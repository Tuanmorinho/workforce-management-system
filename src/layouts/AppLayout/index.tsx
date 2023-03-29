import { Header, Footer } from "components/Common";
import { Box, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
			<ToastContainer
				position="top-center"
				autoClose={3000}
				hideProgressBar
				newestOnTop
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="colored"
			/>
		</Box>
    )
}