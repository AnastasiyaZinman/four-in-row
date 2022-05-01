import styled from 'styled-components';

export const Form = styled.form`
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
`;

export const FormTitle = styled.div`
	margin-bottom: 10px;
	font-size: 28px;
`;

export const FormField = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
`;

const SimpleInput = styled.input`
	width: 300px;
	height: 20px;
`;

export const Input = styled(SimpleInput)`
	height: 25px;
`;

export const SubmitButton = styled(SimpleInput)`
	margin-top: 10px;
	padding: 10px 0;
	height: 40px;
`;

export const ErrorMessage = styled.div`
	width: 100%;
	height: 18px;
	height: 20px;
	color: red;
	font-size: 18px;
`;