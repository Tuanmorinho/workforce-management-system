import { Header, Footer } from "components/Common";
import { Box, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import NoAuth from 'components/Guard/noAuth';

export default function AppLayout() {
    return (
		<Box width={'100%'} height={'100vh'}>	
			<Stack minHeight='100vh'>
				<Header />
				<Box mt={'95px'} flexGrow={1} position={'relative'}>
					
					<Outlet />
				</Box>
				<Footer />
			</Stack>
		</Box>
    )
}