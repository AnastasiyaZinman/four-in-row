import styled from "styled-components";

export const GameBoard = styled.div<{ isTimerActive?: boolean }>`
	display: flex;
	flex-direction: row;
	max-width: 630px;
  padding: 10px;
	pointer-events: ${(props) => props.isTimerActive ? 'auto' : 'none'};
  background-color: ${(props) => props.isTimerActive ? 'rgb(13, 58, 110)' : 'rgba(13, 58, 110, 0.5)'};
	margin: 0 auto;
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column-reverse;
	justify-content: space-between
`;