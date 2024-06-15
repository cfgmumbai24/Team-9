import { Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Temp from './pages/Temp';

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/temp' element={<Temp />} />
			</Routes>
		</>
	);
}

export default App;
