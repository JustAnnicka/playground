
//import slider components
//import DefaultBtn from "../buttons/DefaultBtn"

//functions needed
	// -> check if username is already in use
	// -> check if email is valid / or already in use
	// -> check if new password fullfills the criteria
	// -> check if the repeat password is identical to new password
	// -> create new user with the given inputs and open 2.0 Auth verification.
function handleSubmit(e) {
    e.preventDefault();
    alert();
  }
export default function GameConfig({showPopUp, closePopUp, title}){
	if (!showPopUp) {return null}
	return (
		<form className="PopUp" onSubmit={handleSubmit} >
			<div className="headerPopup">
        		<h3> {title}</h3>
        	    <button className="ClosePopupBtn" onClick={closePopUp}>X</button>
			</div>
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
		</form>
		)
}
