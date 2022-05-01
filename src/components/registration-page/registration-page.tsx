import { useState } from "react";
import { useNavigate } from "react-router";
import { Players } from "../../constants/game";
import PlayerForm from "./player-form/player-form";
import { RegistrationTitle, RegistrationContainer } from "./registration-page.styles";

const RegistrationPage = ({handleData}: any) => {

	const [step, setStep] = useState(1);
	const [players, updatePlayers] = useState<any>([]);
	const [isPlayerExist, setIsPlayerExist] = useState(false);


	const navigate = useNavigate();  

	const handleStep = () => {
		switch(step) {
			case 1: 
			return {
				playerId: Players.First,
				submitText: 'Next',
				onSubmit: (data: any) => {
					setStep(2);
					updatePlayers([...players, data])
				}
			}
			case 2: 
			return {
				playerId: Players.Second,
				submitText: 'Finish',
				onSubmit: (data: any) => {
					if(data.nickname === players[0].nickname) {
						setIsPlayerExist(true);
						return;
					}
					handleData([...players, data])
					setTimeout(() => navigate('/game'), 0) ;
				}
			}
		}
	}

	const stepData = handleStep();

	return (
		<RegistrationContainer>
			<RegistrationTitle>Please enter Players details</RegistrationTitle>
			<PlayerForm 
				playerId={stepData?.playerId}
				submitText={stepData?.submitText}
				onSubmit={stepData?.onSubmit}
				isPlayerExist={isPlayerExist}
				/>
		</RegistrationContainer>
	);
};

export default RegistrationPage;