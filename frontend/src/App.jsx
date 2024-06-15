import { Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Temp from './pages/Temp';
import Courses from './pages/Courses';
import Lecture from './pages/Lecture';
import { EdgeStoreProvider } from './utils/edgestore';

function App() {
	return (
		<>
			<EdgeStoreProvider basePath='http://localhost:3000/edgestore'>
				{/* Rest of your app */}

				<nav className=''>
					<ul className='flex items-center gap-x-3'>
						<li>
							<Link to='/'>Home</Link>
						</li>
						<li>
							<Link to='/temp'>Temp</Link>
						</li>
						<li>
							<Link to='/courses'>Courses</Link>
						</li>
						<li>
							<Link to='/lecture'>Lecture</Link>
						</li>
					</ul>
				</nav>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/temp' element={<Temp />} />
					<Route path='/courses' element={<Courses />} />
					<Route path='/lecture' element={<Lecture />} />
				</Routes>
			</EdgeStoreProvider>
		</>
	);
}

export default App;
