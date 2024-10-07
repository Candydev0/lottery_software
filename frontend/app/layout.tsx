import { Providers } from '../components/providers'
import './globals.css'

export const metadata = {
	title: 'NextJS + Electron Boilerplate',
	description:
		'A neat boilerplate for building Electron apps, with NextJS at the frontend and pre-configured with a bunch of handy development tools.',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className="font-mono overflow-hidden max-h-screen min-h-screen ">
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
