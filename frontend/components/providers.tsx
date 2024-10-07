'use client'
// import { AuthProvider } from '@/context/auth-context';
import { NextUIProvider } from '@nextui-org/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

// import ToastProvider from './toast'
const queryClient = new QueryClient()
export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<QueryClientProvider client={queryClient}>
			<NextThemesProvider attribute="class" defaultTheme="dark">
				<NextUIProvider>
					{/* <AuthProvider> */}
					{children}
					{/* </AuthProvider> */}
					{/* <ToastProvider /> */}
				</NextUIProvider>
			</NextThemesProvider>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	)
}
