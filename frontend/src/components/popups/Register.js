
//import slider components
//import DefaultBtn from "../buttons/DefaultBtn"

//functions needed
	// -> check if username is already in use
	// -> check if email is valid / or already in use
	// -> check if new password fullfills the criteria
	// -> check if the repeat password is identical to new password
	// -> create new user with the given inputs and open 2.0 Auth verification.

export default function GameConfig(){
	return (
			<div className="flexColumn">
				<label for="username">username</label>
				<input id="username" name="username" type="text" placeholder="username" />
				<label>email</label>
				<input  type="email" placeholder="example@42.fr" />
				<label>password</label>
				<span>password must contain 8 character, one number and a symbol</span>
				<input type="password" placeholder="new password"/>
				<label>repeat password</label>
				<input type="password"placeholder="repeat password"/>
				<input className="DefaultBtn" type="submit" value="Sign up"/>
		</div>
		)
}
