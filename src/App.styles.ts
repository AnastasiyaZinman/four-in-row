import styled from 'styled-components';
import {COLORS} from '../src/constants/colors';

export const AppContainer = styled.div`
	padding: 0 20px;
	top: 0;
	left: 0;
	position: fixed;
	width: 100%;
	height: 100%;
	background-color: ${COLORS.lightPurple};
	font-family: 'Caveat', cursive;
	font-size: 34px;
`;