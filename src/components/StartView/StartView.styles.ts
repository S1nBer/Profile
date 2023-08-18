import { styled } from "styled-components";

export const StartViewContainer = styled.div`
height: 100vh;
background: #014F86;
overflow: hidden;

.background-image {
  height: 100%;
  width: 100%;
  opacity: 0.3;
  object-fit: cover;
  -webkit-filter: grayscale(1);
  filter: grayscale(1);
}
`;