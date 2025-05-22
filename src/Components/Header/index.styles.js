import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const HeadContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
padding-right: 60px;
padding-left: 20px;

`
export const UnorderedList = styled.ul`
display: flex;
gap: 60px;
list-style-type: none;
color:black


  li  a   {
    text-decoration: none;
    color: black;
}
`
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;

  &:hover {
    color: #555;
  }
`;
