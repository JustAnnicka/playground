import  express from 'express';
import  cors from 'cors';
import http from 'http';
import { Server } from 'socket.io';
import { v4 as uuidv4 } from 'uuid';
const app = express();

app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "http://localhost:3000", methods: ["GET", "POST"] }
});

const games = {}; 

// Setup game endpoint
app.post('/api/games', (req, res) => {
  const { playerCount, vsComputer, rounds } = req.body;

  if (!playerCount || playerCount < 2 || playerCount > 4) {
    return res.status(400).json({ error: "Invalid player count" });
  }

  const gameId = uuidv4();

  const gameState = {
    id: gameId,
    status: 'waiting',
    config: { playerCount, vsComputer, rounds }, // later add difficulty aswell
    players: [],
    deck: []
  };

  games[gameId] = gameState;
  console.log(`Game created: ${gameId}`);

  res.json({ 
    success: true, 
    gameId, 
    initialState: gameState 
  });
});

// 2. Socket.io Logic
io.on('connection', (socket) => {
  socket.on('join_game', (gameId) => {
    if (games[gameId]) {
      socket.join(gameId);
      socket.emit('game_state', games[gameId]);
      socket.to(gameId).emit('player_joined', { userId: socket.id });
    } else {
      socket.emit('error', { message: 'Game not found' });
    }
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

server.listen(3001, () => {
  console.log('Server running on port 3001');
});

/* 
app.get('/', (req, res) => {
	res.send('sending....');
})

app.listen(3000, () => {
	console.log('server listening on 3000');
}) */