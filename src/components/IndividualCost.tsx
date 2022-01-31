import React, { useEffect, useState } from 'react';
import { Button, Center, Flex, Input, Select } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { selectUser } from '../reducer/userReducer';
import { useNavigate } from 'react-router-dom';

const EMPTY_INDI_COST = {
	receiver: '',
	giver: '',
	cost: 0,
};
const IndividualCost = () => {
	const users = useSelector(selectUser);
	const [individualCost, setIndividualCost] = useState([EMPTY_INDI_COST]);
	const navigate = useNavigate();

	useEffect(() => {
		if (!users.length) navigate('/');
	}, []);

	return (
		<Center minHeight="100vh">
			<Flex direction="column">
				{individualCost.map((cost, index) => {
					return (
						<Flex key={index} my={2}>
							<Select
								placeholder="Select Receiver"
								value={cost.receiver}
								onChange={(e) =>
									setIndividualCost((prevState) => {
										const clonedState = [...prevState];
										clonedState[index] = {
											...clonedState[index],
											receiver: e.target.value,
										};
										return clonedState;
									})
								}>
								{users.map((user) => (
									<option value={user.name}>
										{user.name}
									</option>
								))}
							</Select>
							<Select
								placeholder="Select Giver"
								value={cost.giver}
								onChange={(e) =>
									setIndividualCost((prevState) => {
										const clonedState = [...prevState];
										clonedState[index] = {
											...clonedState[index],
											giver: e.target.value,
										};
										return clonedState;
									})
								}>
								{users.map((user) => (
									<option value={user.name}>
										{user.name}
									</option>
								))}
							</Select>
							<Input
								placeholder="Enter cost"
								value={cost.cost}
								onChange={(e) =>
									setIndividualCost((prevState) => {
										const clonedState = [...prevState];
										clonedState[index] = {
											...clonedState[index],
											cost: Number(e.target.value),
										};
										return clonedState;
									})
								}
							/>
						</Flex>
					);
				})}
				<Button
					colorScheme="teal"
					size="lg"
					variant="outline"
					type="button"
					onClick={() =>
						setIndividualCost((prevState) => [
							...prevState,
							EMPTY_INDI_COST,
						])
					}>
					Add
				</Button>

				<Button
					data-testid={`next-button`}
					colorScheme="teal"
					size="lg"
					variant="solid"
					type="button"
					onClick={() => console.log(individualCost)}>
					Calculate
				</Button>
			</Flex>
		</Center>
	);
};

export default IndividualCost;
