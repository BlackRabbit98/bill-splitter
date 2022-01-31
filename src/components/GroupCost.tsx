import React, { FormEventHandler, useEffect, useState } from 'react';
import { Button, Flex, FormLabel, Heading, Input } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { selectUser } from '../reducer/userReducer';
import { useReduxDispatch } from '../app/store';
import { useNavigate } from 'react-router-dom';
import { addCosts, Cost } from '../reducer/costReducer';

const GroupCost = () => {
	const [costs, setCosts] = useState<Cost[]>([]);
	const users = useSelector(selectUser);
	const dipatch = useReduxDispatch();
	const navigate = useNavigate();

	console.log(costs);

	useEffect(() => {
		if (!users.length) navigate('/');
		setCosts(users.map((user) => ({ ...user, cost: 0 })));
	}, []);

	const handleFormSubmit: FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();
		dipatch(addCosts(costs));
		navigate('/individualcost');
	};

	//console.log('this is data from selector', users);

	return (
		<Flex data-testid={`second-page`} direction="column" align="center">
			<Heading as="h1" size="lg" pb={4}>
				Group Cost
			</Heading>
			<form onSubmit={handleFormSubmit}>
				{costs.map((cost, index) => (
					<Flex key={cost.name} align="center">
						<FormLabel htmlFor="name">{cost.name}</FormLabel>
						<Input
							data-testid={`input-${index}`}
							id="cost"
							type="number"
							placeholder="cost"
							value={cost.cost}
							onChange={(e) => {
								setCosts((prevCosts) => {
									const newCosts = [...prevCosts];
									newCosts[index].cost = Number(
										e.target.value
									);

									return newCosts;
								});
							}}
						/>
					</Flex>
				))}
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

export default GroupCost;
