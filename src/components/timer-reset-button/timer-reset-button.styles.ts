import styled from "styled-components";

export const Button = styled.div<{ isActivated?: boolean }>`
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid black;
	width: 80px;
	background-color: ${(props) => props.isActivated ? '#EE4C4C' : '#78EA7F'};
	border-radius: 8px;
	font-size: 24px;
	cursor: pointer;

	&:hover {
		box-shadow: 5px 3px 5px #c3bebe;
	}
`;