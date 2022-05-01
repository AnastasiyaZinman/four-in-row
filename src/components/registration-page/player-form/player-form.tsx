import { useForm } from "react-hook-form";
import { ErrorMessage, Form, FormField, FormTitle, Input, SubmitButton } from "./player-form.styles";

const PlayerForm = ({ playerId: id, submitText, onSubmit, isPlayerExist }: any) => {
	const { register, handleSubmit, formState: { errors, isDirty }, reset } = useForm();

	const preSubmit = (formData: any) => {
		onSubmit({ ...formData, id });
		setTimeout(() => reset({ nickname: '', age: '' }), 0);
	}

	return (
		<Form onSubmit={handleSubmit(preSubmit)}>
			<FormTitle>{id === 1 ? 'First player' : 'Second player'}</FormTitle>
			<FormField>
				<Input type="text"
					placeholder="Type nickname"
					{...register("nickname", {
						required: 'Nickname required',
						minLength: { value: 2, message: 'nickname should be at least 2 symbols' },
						pattern: {
							value: /^[a-zA-Z]{1}/,
							message: '1-st character should be an alphabet',
						},
					})} />
				<ErrorMessage>{errors.nickname && <span>{errors.nickname.message}</span>}</ErrorMessage>
			</FormField>
			<FormField>
				<Input type="text"
					placeholder="Type age"
					{...register("age", {
						required: 'Age required',
						valueAsNumber: true,
						validate: (value) => (value > 4 && value < 91) || "Required number 5-90",
					})} />
				<ErrorMessage>
					{errors.age && <span>{errors.age.message}</span>}
				</ErrorMessage>

				{isPlayerExist && !isDirty && <ErrorMessage>
					<span>Nickname is already in use. Type another nickname</span>
				</ErrorMessage>}
			</FormField>


			<SubmitButton type="submit" value={submitText} />
		</Form>)
}

export default PlayerForm;