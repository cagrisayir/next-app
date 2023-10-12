import Link from 'next/link';

export default function Home() {
	return (
		<main>
			<h1 className='text-black'>Hello world</h1>
			<Link href='/users'>go to users</Link>
		</main>
	);
}
