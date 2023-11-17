import Link from 'next/link';
import PagesMetaHead from '../components/PagesMetaHead';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import Button from '../components/reusable/Button';
import AppBanner from '../components/shared/AppBanner';

export default function Home() {
	return (
		<div className="container mx-auto">
			<PagesMetaHead title="Home" />

			<AppBanner />


			<div className="mt-10 sm:mt-15 flex justify-center">
				
			</div>
		</div>
	);
}
