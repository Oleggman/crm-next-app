import Header from '@/app/components/header'

export interface PageProps {
	params: { id: string };
}

export default function Page ({params}: PageProps) {
	return (
		<main>
			<Header>Companies ({params.id})</Header>
		</main>
	);
}