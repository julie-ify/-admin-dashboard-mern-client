import React, { useState } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { Outlet } from 'react-router-dom'; // Outlet allows us to have a parent component and it's children
// Allowing us to use Router to navigate through different path rendering different components but still inside the parent
// This is handy when we want to have a sidebar and navbar on all our pages.
import { useSelector } from 'react-redux';
import Navbar from 'components/Navbar';
import Sidebar from 'components/Sidebar';

function Layout() {
	const [isSideBarOpen, setIsSideBarOpen] = useState(true);
	const isNonMobile = useMediaQuery('(min-width: 600px)'); // this returns true/false based on the screen width
	return (
		// material ui Box component allows us to set css styles. Not all components allows this in mui
		<Box display={isNonMobile ? 'flex' : 'block'} width="100%" height={'100%'}>
			<Sidebar 
				isNonMobile={isNonMobile}
				drawerWidth="250px"
				isSideBarOpen={isSideBarOpen}
				setIsSideBarOpen={setIsSideBarOpen}
			/>
			<Box>
				<Navbar 
					isSideBarOpen={isSideBarOpen}
					setIsSideBarOpen={setIsSideBarOpen}
				/>
				<Outlet />
			</Box>
		</Box>
	);
}

export default Layout;
