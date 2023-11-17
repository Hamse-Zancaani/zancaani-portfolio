import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaFileDownload} from 'react-icons/fa';
import useThemeSwitcher from '../../hooks/useThemeSwitcher';
import Typewriter from 'typewriter-effect';
function AppBanner() {
	const [activeTheme] = useThemeSwitcher();

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
			className="flex flex-col sm:justify-between items-center sm:flex-row mt-5 md:mt-2"
		>
			<div className="w-full md:w-1/3 text-left">
				<motion.h1
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.1,
					}}
					className="font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase"
				>
					Salaam 👋, I'm Hamse Zancaani
	
				</motion.h1>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.2,
					}}
					className="font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200"
				>
								<Typewriter
  options={{
    strings: ['Full Mern Stack Developer', 'Pern Stack Developer'],
    autoStart: true,
    loop: true,
  }}
/>
				</motion.p>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.3,
					}}
					className="flex justify-center sm:block"
				>
					<a
						download="mern stack developer.pdf"
						href="/files/mern stack developer.pdf"
						className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-900 text-gray-500 hover:text-white duration-500"
						aria-label="Download Resume"
					>
						<FaFileDownload className="ml-0 sm:ml-1 mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FaFileDownload>
						<span className="text-sm sm:text-lg duration-100">
							Get Resume
						</span>
					</a>
				</motion.div>
			</div>
			<motion.div
				initial={{ opacity: 0, y: -180 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
				className="w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0"
			>
				<img
					layout="responsive"
					src={
						activeTheme === 'dark'
							? '/images/zanco.png'
							: '/images/zanco.png'
					}
					alt="Developer"
				/>
			</motion.div>
		</motion.section>
	);
}

export default AppBanner;
