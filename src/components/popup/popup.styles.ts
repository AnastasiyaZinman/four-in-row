import styled from "styled-components";
import { COLORS } from "../../constants/colors";

export const PopupContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	width: fit-content;
	height: fit-content;
	margin: auto;
	background: rgb(32, 54, 92);
	border-radius: 5px;
	color: ${COLORS.white};
	padding: 50px;
	box-sizing: border-box;
	z-index: 5;
	text-align: center;
`;

export const SubTitle = styled.div`
	font-size: 18px;
	color: ${COLORS.white};
`;

export const Title = styled(SubTitle)`
	font-size: 20px;
	font-weight: 600;
	margin-bottom: 20px;
`;

export const Button = styled.div`
	margin-top: 20px;
	padding: 10px 20px;
	width: 160px;
	cursor: pointer;
	border: none;
	background: rgb(47, 101, 172);
	border-radius: 3px;
	opacity: 0.9;
	color: #5fe775;
	font-size: 22px;

	&:hover{
	opacity: 1;
	color: ${COLORS.white};
	}
`;

export const Background = styled.div`
	padding: 30px 0;
	top: 0;
	left: 0;
	position: fixed;
	width: 100%;
	height: 100%;
	background-color: rgba(100, 100, 100, 0.5);
	transition: background-color 2s;
	font-family: 'Caveat', cursive;
	font-size: 34px;
`;

