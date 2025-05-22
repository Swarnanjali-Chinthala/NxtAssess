import {Link} from "react-router-dom";
import { HeadContainer,UnorderedList,StyledLink } from "./index.styles"; 
const header=()=>{
    return(
        <HeadContainer className="header">
            <img src="https://ik.imagekit.io/y1tcj686k/nxtAssess/Logo%202.png?updatedAt=1747748679469" alt="logo" />
            <UnorderedList>
                <li>
                    <StyledLink to="/">Home</StyledLink>
                </li>
                <li>
                    <StyledLink to="/cart">Cart</StyledLink>
                </li>
                <li style={{color:'black'}}>
                  Logout
                </li>
            </UnorderedList>
        </HeadContainer>
    )
}
export default header;