import Header from '@/app/components/header'

export interface PageProps {
	params: { id: string };
}
export function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }]
}

export default function Page ({params}: PageProps) {
	return (
		<main>
			<Header>Companies ({params.id})</Header>
		</main>
	);
}