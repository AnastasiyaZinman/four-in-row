import styled from "styled-components";
import { AppContainer } from "../../App.styles";
import { COLORS } from "../../constants/colors";
import { Button } from "../timer-reset-button/timer-reset-button.styles";

export const ResultsContainer = styled(AppContainer)`
	padding: 30px 0;
	transition: background-color 2s;
	
	&:hover {
	background-color: ${COLORS.lightPurple};
	}
`;

export const ResultsDetails = styled.div`
	width: 90%;
	margin: 0 auto;
	text-align: center;
	font-size: 28px;
`;

export const Title = styled.div`
	font-size: 40px;
	font-weight: 600;
	margin-bottom: 20px;
`;

export const Table = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Row = styled.div`
	display: flex;
	width: 100%;
	flex-direction: row;
	flex-wrap: wrap;
`;

export const Cell = styled.div`
	flex: 2;
	border: 1px solid black;

	:first-child {
		flex: 1;
	}
	:last-child {
		flex: 3;
	}
`;

export const ResetGameButton = styled(Button)`
	margin: 20px auto;
	background-color: ${COLORS.lightPurple};
`;
