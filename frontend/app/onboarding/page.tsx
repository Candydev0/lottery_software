'use client'
import { Progress } from '@nextui-org/react'
import Image from 'next/image'

export default function Page() {
	return (
		<main className="w-full h-screen flex flex-col justify-center items-center gap-4">
			<div className="logo">
				<Image src="/favicon.ico" alt="logo" width={85} height={85} />
			</div>
			<div className="text-3xl font-semibold font-mono">LottoPro</div>
			<Progress size="sm" value={50} className="max-w-md" />
		</main>
	)
}
