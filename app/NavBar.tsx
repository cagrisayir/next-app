import Link from 'next/link';
import React from 'react';

const NavBar = () => {
	return (
		<nav className='flex justify-start items-center p-5 bg-red-400 gap-5 h-[5vh]'>
			<Link href='/' className='mr-5'>
				Next.js
			</Link>
			<Link href='/users' className='text-slate-500'>
				Users
			</Link>
			<Link href='/admin' className='text-slate-500'>
				Admin
			</Link>
		</nav>
	);
};

export default NavBar;
