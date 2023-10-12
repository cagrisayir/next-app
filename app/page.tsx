import Link from 'next/link';
import ProductCard from './components/ProductCard';

export default function Home() {
	return (
		<main>
			<h1 className='text-black'>Hello world</h1>
			<Link href='/users'>go to users</Link>
			<ProductCard />
		</main>
	);
}
