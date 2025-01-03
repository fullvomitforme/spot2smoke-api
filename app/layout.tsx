import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Hono | nextjs',
	description: 'Generated by hono',
	icons: {
		icon: 'favicon/favicon.ico',
	},
};

// These styles apply to every route in the application
import './globals.css';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	);
}
