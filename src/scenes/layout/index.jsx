import React, { useState } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from 'components/Navbar';
import Sidebar from 'components/Sidebar';

function Layout() {
	const [isSidebarOpen, setIsSideBarOpen] = useState(true);
	const isNonMobile = useMediaQuery('(min-width: 600px)'); // this returns true/false based on the screen width
	return (
		// material ui Box component allows us to set css styles. Not all components allows this in mui
		<Box display={isNonMobile ? 'flex' : 'block'} width="100%" height={'100%'}>
			<Sidebar 
				isNonMobile={isNonMobile}
				drawerWidth="250px"
				isSidebarOpen={isSidebarOpen}
				setIsSideBarOpen={setIsSideBarOpen}
			/>
			<Box>
				<Navbar 
					isSidebarOpen={isSidebarOpen}
					setIsSideBarOpen={setIsSideBarOpen}
				/>
				<Outlet />
			</Box>
		</Box>
	);
}

export default Layout;
