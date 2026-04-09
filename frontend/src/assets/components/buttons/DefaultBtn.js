import { Link } from "react-router-dom";

const MyButton = ({ to }) => {

    return (
        <Link to={`/${to}`}>
               {to}
        </Link>
    )
}

export default MyButton;
