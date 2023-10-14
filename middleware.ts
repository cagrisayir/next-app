import { NextRequest, NextResponse } from 'next/server';
export { default } from 'next-auth/middleware';

export const config = {
	// * after: zero or more parameter
	// + one or more parameter
	// ? zero or more
	matcher: ['/users', '/admin'],
};
