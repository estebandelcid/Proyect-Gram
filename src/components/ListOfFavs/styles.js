import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const Grid = styled.div`
   padding-top: 32px;
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5px;
`;

export const Link = styled(LinkRouter)`
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  justify-content: center;
`;
export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;


