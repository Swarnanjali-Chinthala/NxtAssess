import {Link} from "react-router-dom";
const header=()=>{
    return(
        <div className="header">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/cart">Cart</Link>
                </li>
                <li>
                    <button>Logout</button>
                </li>
            </ul>
        </div>
    )
}
export default header;