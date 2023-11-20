import React from 'react';
import {
	Box,
	Divider,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Typography,
	useTheme,
} from '@mui/material';

import {
	SettingsOutlined,
	ChevronLeft,
	ChevronRightOutlined,
	HomeOutlined,
	ShoppingCartOutlined,
	Groups2Outlined,
	ReceiptLongOutlined,
	PublicOutlined,
	PointOfSaleOutlined,
	TodayOutlined,
	CalendarMonthOutlined,
	AdminPanelSettingsOutlined,
	TrendingUpOutlined,
	PieChartOutlined,
} from '@mui/icons-material';

import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import FlexBetween from './FlexBetween';
import profileImage from 'assets/profile.jpg';

const listItems = [
	{
		text: 'Dashboard',
		icon: <HomeOutlined />,
	},
	{
		text: 'Client Facing',
		icon: null,
	},
	{
		text: 'Products',
		icon: <ShoppingCartOutlined />,
	},
	{
		text: 'Customers',
		icon: <Groups2Outlined />,
	},
	{
		text: 'Transactions',
		icon: <ReceiptLongOutlined />,
	},
	{
		text: 'Geography',
		icon: <PublicOutlined />,
	},
	{
		text: 'Sales',
		icon: null,
	},
	{
		text: 'Overview',
		icon: <PointOfSaleOutlined />,
	},
	{
		text: 'Daily',
		icon: <TodayOutlined />,
	},
	{
		text: 'Monthly',
		icon: <CalendarMonthOutlined />,
	},
	{
		text: 'Breakdown',
		icon: <PieChartOutlined />,
	},
	{
		text: 'Management',
		icon: null,
	},
	{
		text: 'Admin',
		icon: <AdminPanelSettingsOutlined />,
	},
	{
		text: 'Performance',
		icon: <TrendingUpOutlined />,
	},
];

const Sidebar = ({
	drawerWidth,
	isSideBarOpen,
	setIsSideBarOpen,
	isNonMobile,
}) => {
	const { pathname } = useLocation();
	const [active, setActive] = useState('');
	const navigate = useNavigate();
	const theme = useTheme();

	useEffect(() => {
		setActive(pathname.substring(1));
		// I used substing(1) so that if the pathname is /dashboard, substring(1) returns 'dashboard'
	}, [pathname]);
	return (
		<Box component="nav">
			{isSideBarOpen && (
				<Drawer
					open={isSideBarOpen}
					onClose={() => setIsSideBarOpen(!isSideBarOpen)}
					variant="persistent"
					anchor="left"
					sx={{
						width: drawerWidth,
						'& .MuiDrawer-paper': {
							color: theme.palette.secondary[200],
							backgroundColor: theme.palette.background.alt,
							boxSizing: 'border-box',
							width: drawerWidth,
						},
					}}
				>
					<Box width={'100%'}>
						<Box m={'1.5rem 2rem 2rem 3rem'}>
							<FlexBetween color={theme.palette.secondary.main}>
								<Box display={'flex'} alignItems={'center'} gap={'0.5rem'}>
									<Typography variant="h4" fontWeight={'bold'}>
										JCOMVISION
									</Typography>
								</Box>
								{!isNonMobile && (
									<IconButton onClick={() => setIsSideBarOpen(!isSideBarOpen)}>
										<ChevronLeft />
									</IconButton>
								)}
							</FlexBetween>
						</Box>
						<List>
							{listItems.map(({ text, icon }) => {
								if (!icon) {
									return (
										<Typography key={text} sx={{ m: '2.25rem 0 1rem 3rem' }}>
											{text}
										</Typography>
									);
								}
								const iconText = text.toLowerCase();
								return (
									<ListItem key={text} disablePadding>
										<ListItemButton
											onClick={() => {
												navigate(`/${iconText}`);
												setActive(iconText);
											}}
											sx={{
												backgroundColor:
													active === iconText
														? theme.palette.secondary[300]
														: 'transparent',
												color:
													active === iconText
														? theme.palette.primary[600]
														: theme.palette.secondary[100],
											}}
										>
											<ListItemIcon
												sx={{
													ml: '2rem',
													color:
														active === iconText
															? theme.palette.primary[600]
															: theme.palette.secondary[200],
												}}
											>
												{icon}
											</ListItemIcon>
											<ListItemText primary={text} />
											{active === iconText && (
												<ChevronRightOutlined sx={{ ml: 'auto' }} />
											)}
										</ListItemButton>
									</ListItem>
								);
							})}
						</List>
					</Box>
				</Drawer>
			)}
		</Box>
	);
};

export default Sidebar;
