import styled from 'styled-components';
// You can also use a URL string

export const BackgroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url('https://ik.imagekit.io/y1tcj686k/Background.png?updatedAt=1747747989146');
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
  @media screen and (max-width: 768px) {
    background-image: url('https://ik.imagekit.io/y1tcj686k/nxtAssess/Background%20(1).png?updatedAt=1747748156293');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
`;

