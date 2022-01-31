import React from 'react';
import {
	Button,
	Flex,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Heading,
	Input,
} from '@chakra-ui/react';
import { useFieldArray, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { addUsers, User } from '../reducer/userReducer';
import { useReduxDispatch } from '../app/store';
import { useNavigate } from 'react-router-dom';

const schema = yup.object().shape({
	user: yup.array(
		yup.object().shape({
			name: yup.string().required('This is required'),
		})
	),
});

const HomeScreen = () => {
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm({
		defaultValues: {
			user: [{ name: '' }],
		},
		resolver: yupResolver(schema),
	});

	const { fields, append, remove } = useFieldArray({
		control,
		name: 'user',
	});

	const dipatch = useReduxDispatch();
	const navigate = useNavigate();

	const handleFormSubmit = (values: { user: User[] }) => {
		dipatch(addUsers(values.user));
		navigate('/groupcost');
	};

	return (
		<Flex data-testid={`first-page`} direction="column" align="center">
			<Heading as="h1" size="lg" pb={4}>
				Bill Splitter
			</Heading>
			{console.log(fields, errors)}
			<form onSubmit={handleSubmit(handleFormSubmit)}>
				{fields.map((field, idx) => {
					const errorAtIndex = errors.user?.[idx];
					return (
						<FormControl
							key={field.id}
							isInvalid={!!errorAtIndex}
							pb={4}>
							<FormLabel htmlFor="email">Name</FormLabel>
							<Input
								id="email"
								data-testid={`input-${idx}`}
								placeholder="name"
								{...register(`user.${idx}.name`)}
							/>
							<Button
								data-testid={`remove-${idx}`}
								colorScheme="red"
								size="lg"
								variant="outline"
								type="button"
								onClick={() => remove(idx)}>
								Remove
							</Button>
							<FormErrorMessage data-testid={`error-${idx}`}>
								{errorAtIndex?.name?.message}
							</FormErrorMessage>
						</FormControl>
					);
				})}
				<Button
					data-testid={`add-button`}
					colorScheme="teal"
					size="lg"
					variant="outline"
					type="button"
					onClick={() => append({ name: '' })}>
					Add Members
				</Button>
				<Button
					data-testid={`next-button`}
					colorScheme="teal"
					size="lg"
					variant="solid"
					type="submit">
					Next
				</Button>
			</form>
		</Flex>
	);
};

export default HomeScreen;
