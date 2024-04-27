import Header from '@/app/components/header'

export interface PageProps {
	params: { id: string };
}

export async function generateStaticParams() {
  const ids = ['1', '2', '3'];
  return ids.map((id) => ({
    params: { id },
  }));
}

export default function Page ({params}: PageProps) {
	return (
		<main>
			<Header>Companies ({params.id})</Header>
		</main>
	);
}