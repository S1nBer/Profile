import { styled } from "styled-components";
// import jpg from "images/photo.jpg";

export const StartViewContainer = styled.div`
height: 100vh;
background: #014F86;
overflow: hidden;

  .background-image {
    height: 100%;
    width: 100%;
    opacity: 0.3;
    // background-position: center;
    // background-size: cover;
    object-fit: cover;
    -webkit-filter: grayscale(1);
    filter: grayscale(1);
  }

  .name, .specialization {
    position: absolute;

    font-family: Raleway Roboto;
    color: white;
  }

  .name {
    top: 20%;
    left: 5%;

    font-size: 80px;
  }

  .specialization {
    top: 30%;
    left: 5%;

    font-size: 50px;

    .selected {
      color: #EB8D02;
    }
  }
`;