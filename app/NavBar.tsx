'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

const NavBar = () => {
	const { status, data: session } = useSession();

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
			{status === 'loading' && <div>loading...</div>}
			{status === 'authenticated' && (
				<div className='flex gap-5'>
					{session.user?.name}
					<Link href='/api/auth/signout'>Sign Out</Link>
				</div>
			)}
			{status === 'unauthenticated' && (
				<Link href='/api/auth/signin'>Sign In</Link>
			)}
		</nav>
	);
};

export default NavBar;
