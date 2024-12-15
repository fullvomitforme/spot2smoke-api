'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export default function Home() {
	const [message, setMessage] = useState<string | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch('/api/hello');
				const data = await res.json();
				setMessage(data.message);
			} catch (error) {
				console.error('Error fetching data:', error);
				setMessage('Error loading data');
			}
		};
		fetchData();
	}, []);

	return (
		<div className='flex justify-center items-center bg-black min-h-screen'>
			<Card className='w-full max-w-md'>
				<CardHeader>
					<CardTitle className='font-bold text-2xl text-black text-center'>
						spot 2 smoke api
					</CardTitle>
				</CardHeader>
				<CardContent>
					{!message ? (
						<div className='space-y-2'>
							<Skeleton className='w-[250px] h-4' />
							<Skeleton className='w-[200px] h-4' />
						</div>
					) : (
						<p className='text-black text-center text-lg'>{message}</p>
					)}
				</CardContent>
			</Card>
		</div>
	);
}
