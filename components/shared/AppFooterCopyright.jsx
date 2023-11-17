function AppFooterCopyright() {
	return (
		<div className="font-general-regular flex justify-center items-center text-center">
			<div className="text-lg text-ternary-dark dark:text-ternary-light">
				&copy; {new Date().getFullYear()}
				<a
					href="https://www.linkedin.com/in/hamze-zancaani-2ab776172"
					target="__blank"
					className="hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
				>
				Made with ❤️ by Hamse Zancaani


				</a>
				.{' '}
				<a
					href="https://zancaani.me"
					target="__blank"
					className="text-secondary-dark dark:text-secondary-light font-medium uppercase hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
				>
					 
				</a>
			</div>
		</div>
	);
}

export default AppFooterCopyright;
