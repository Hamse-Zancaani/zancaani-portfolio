import '../styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import DefaultLayout from '../components/layout/DefaultLayout';
import UseScrollToTop from '../hooks/useScrollToTop';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function MyApp({ Component, pageProps }) {
	return (
		<AnimatePresence>
			<div className=" bg-secondary-light dark:bg-primary-dark transition duration-300">
				<DefaultLayout>
					<Component {...pageProps} />
				</DefaultLayout>
				<UseScrollToTop />
			</div>
			<ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
{/* Same as */}
<ToastContainer />
		</AnimatePresence>
	);
}

export default MyApp;
