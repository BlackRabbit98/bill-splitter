import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GroupCost from './components/GroupCost';
import IndividualCost from './components/IndividualCost';
import HomeScreen from './screens/HomeScreen';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomeScreen />} />
					<Route path="groupcost" element={<GroupCost />} />
					<Route path="individualcost" element={<IndividualCost />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
