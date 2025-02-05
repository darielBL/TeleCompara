import React from 'react';
import NavBar from '../Components/NavBar/NavBar';
import Footer from '../Components/Footer/Footer';

const Layout = ({ children }) => {
	return (
		<>
			<NavBar />
			{children}
			<Footer />
		</>
	);
}

export default Layout;