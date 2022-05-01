import styled from 'styled-components';

export const GameContainer = styled.div`
	margin: 0 auto;
	max-width: 700px;
`;

export const Header = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	font-family: 'Caveat', cursive;
	font-size: 30px;
`;

export const Title = styled.div`
	font-size: 50px;
	font-weight: 600;
`;

export const GameDetails = styled.div`
  display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 70%;
`;

export const PlayerInfo = styled.div`
	margin-bottom: 10px;
	display: flex;
	justify-content: flex-start;
`;

export const Player = styled.div<{playerColor: string}>`
	margin-left: 10px;
	color: ${(props) => props.playerColor}
`;