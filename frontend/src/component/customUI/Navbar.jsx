import React from 'react';

const Navbar = () => {
	return (
		<>
			<nav className=''>
				<ul className='flex items-center gap-x-3'>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/temp'>Temp</Link>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Navbar;
