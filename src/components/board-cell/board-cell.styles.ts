import styled from "styled-components";

export const Cell = styled.div<{backgroundColor?: string}>`
  border: 1px solid black;
  display: inline-block;
  width: 70px;
  height: 70px;
  cursor: pointer;
  border-radius: 50%;
  margin: 10px;
  border: none;
  background-color: ${props => props.backgroundColor};
`;