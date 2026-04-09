// server/index.js
import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';
import gameService from './services/gameService.js';

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const io = new Server(server, {
  cors: { 
    origin: "http://localhost:3000", 
    methods: ["GET", "POST"] 
  }
});

// Create game endpoint
app.post('/api/games', (req, res) => {
  try {
    const { playerCount, vsComputer, rounds } = req.body;

    if (!playerCount || playerCount < 2 || playerCount > 4) {
      return res.status(400).json({ error: "Invalid player count" });
    }

    const gameId = uuidv4();
    const gameState = gameService.createGame(gameId, playerCount, vsComputer, rounds || 5);

    res.json({ 
      success: true, 
      gameId, 
      initialState: gameState 
    });
  } catch (error) {
    // Log the full error to console so you can see the stack trace
    console.error("GAME CREATION ERROR:", error);
    console.error(error.stack); 
    
    res.status(500).json({ 
      error: "Internal server error", 
      message: error.message 
    });
  }
});

// Join game endpoint (alternative to socket)
app.post('/api/games/:gameId/join', (req, res) => {
  try {
    const { gameId } = req.params;
    const { userId, userData } = req.body;

    const game = gameService.joinGame(gameId, userId, userData);

    // Notify all connected sockets in this game
    io.to(gameId).emit('game_state', game);
    io.to(gameId).emit('player_joined', { userId });

    res.json({ success: true, game });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Play round endpoint
app.post('/api/games/:gameId/play-round', (req, res) => {
  try {
    const { gameId } = req.params;
    const { comparisonField = 'points' } = req.body;

    const game = gameService.playRound(gameId, comparisonField);

    io.to(gameId).emit('game_state', game);
    io.to(gameId).emit('round_complete', {
      round: game.currentRound,
      winners: game.roundWinners[game.roundWinners.length - 1]
    });

    res.json({ success: true, game });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Socket.io Logic
io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  socket.on('join_game', (gameId) => {
    const game = gameService.getGame(gameId);
    
    if (game) {
      socket.join(gameId);
      socket.gameId = gameId;
      
      // Update player socket reference
      const player = game.players.find(p => p.socketId === socket.id);
      if (player) {
        player.socketId = socket.id;
      }
      
      socket.emit('game_state', game);
      socket.to(gameId).emit('player_joined', { userId: socket.id });
    } else {
      socket.emit('error', { message: 'Game not found' });
    }
  });

  socket.on('play_action', ({ gameId, action, comparisonField }) => {
    try {
      let game;
      
      if (action === 'play_round') {
        game = gameService.playRound(gameId, comparisonField);
      }
      
      io.to(gameId).emit('game_state', game);
    } catch (error) {
      socket.emit('error', { message: error.message });
    }
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
    
    // Clean up game if needed
    if (socket.gameId) {
      const game = gameService.getGame(socket.gameId);
      if (game) {
        const playerIndex = game.players.findIndex(p => p.socketId === socket.id);
        if (playerIndex > -1) {
          game.players.splice(playerIndex, 1);
          io.to(socket.gameId).emit('game_state', game);
        }
      }
    }
  });
});

server.listen(3001, () => {
  console.log('Server running on port 3001');
});