import Image from 'next/image';
import { useState } from 'react';
import { aboutMeData } from '../../data/aboutMeData';
import AppFooter from '../shared/AppFooter';
function AboutMeBio() {
	const [aboutMe, setAboutMe] = useState(aboutMeData);
	return (
		<div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
			<div className="w-full sm:w-1/4 mb-7 sm:mb-0">
				<Image
					src="/images/hamse.png"
					width={200}
					height={200}
					className="rounded-lg"
					alt="Profile Image"
				/>
			</div>

			<div className="font-general-regular w-full sm:w-3/4 text-left">
				{aboutMe.map((bio) => (
					<p
						className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
						key={bio.id}
					>
						{bio.bio}
					</p>
				))}
					<AppFooter />
			</div>
		
			<div>
			
			</div>
		</div>
		
	);
}

export default AboutMeBio;
