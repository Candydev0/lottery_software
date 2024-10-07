'use client'
import { data, yantras } from '@/assets/yantra/yantra'
import { Button, ButtonGroup, Input } from '@nextui-org/react'
import Image from 'next/image'
import App from './video'

export default function Page() {
	return (
		<main className="h-full px-6 py-4 ">
			<div className="w-full flex justify-end items-end py-2">
				<div className="flex justify-end items-center rounded-lg gap-2 border border-white/20 divide-x-1 divide-white/25 ">
					<div className="text-xl p-3 font-semibold">₹ 45500</div>
					<div className="p-3 flex flex-col gap-0.5 items-end">
						<span>{new Date().toLocaleTimeString('en-US')}</span>
						<span className="text-base/3">
							{new Date().toLocaleDateString('en-US', {})}
						</span>
					</div>
				</div>
			</div>
			<div className="grid grid-cols-1 lg:grid-cols-8 gap-6">
				<div className="col-span-2">
					<div className="Timer flex justify-between items-center text-xl font-semibold">
						<div className="time text-start">
							Time <br />
							10:00
						</div>
						<div className="time text-end">
							Time Left <br />
							13:56
						</div>
					</div>
					<div className="w-full border-5 border-yellow-500 rounded-lg  mt-2 overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-400 via-fuchsia-500 to-indigo-500 p-1.5">
						<App
							images={yantras.map((yantra, index) => (
								<Image
									key={index}
									src={yantra.image}
									className="rounded-md"
									alt={`Image ${index + 1}`}
								/>
							))}
						/>
					</div>
				</div>
				<div className="col-span-6 grid grid-cols-5 gap-4 p-2 bg-white/20 rounded-md py-2 ">
					{yantras.map((yantra, index) => (
						<div
							key={index}
							className="flex flex-col items-center gap-1 w-full justify-center"
						>
							<div className="flex flex-col items-center gap-1 w-[calc(100%-2.5rem)] ">
								<Image
									src={yantra.image}
									className="rounded-md w-[calc(100%-1.5rem)] "
									alt={`Image ${index + 1}`}
								/>
								<input />
							</div>
						</div>
					))}
				</div>
			</div>

			<div className="w-full  rounded-md flex flex-wrap overflow-y-scroll overflow-hidden max-h-56  mt-2 bg-white/25">
				{data.map((item, index) => (
					<div
						key={index}
						className="flex justify-between w-fit flex-col items-center p-2 border border-white/25"
					>
						<div className="flex flex-col items-center gap-2">
							{item.result && (
								<>
									<Image
										src={item.result.image}
										className="rounded-md"
										width={120}
										alt={`Image ${index + 1}`}
									/>
								</>
							)}
						</div>
						<div className="text-xl font-semibold">{item.time}</div>
					</div>
				))}
			</div>
			<div className="mt-2 flex justify-between">
				<ButtonGroup>
					<Button color="success">Current</Button>
					<Button>Upcoming</Button>
				</ButtonGroup>
				<div className="max-w-xl flex gap-2">
					<Input
						label="Quantity"
						className="max-w-md"
						labelPlacement="outside-left"
					/>
					<Input
						label="Cost"
						className="max-w-md"
						labelPlacement="outside-left"
					/>
					<Input label="F8 Bar Code" labelPlacement="outside-left" />
				</div>
			</div>
			<div className="flex justify-between mt-3">
				<div className="gap-2.5 flex">
					<Button color="primary" size="lg">
						F6 - Buy
					</Button>
					<Button color="warning" size="lg">
						F5 - Clear
					</Button>
					<Button color="secondary" size="lg">
						F9 - Can. Receipt
					</Button>
					<Button color="primary" size="lg">
						Last Receipt
					</Button>
				</div>
				<div className="flex gap-2.5">
					<Button color="danger" size="lg">
						Exit
					</Button>
					<Button size="lg">Purchase Details</Button>
					<Button color="warning" size="lg">
						F7 - Lucky Yantra
					</Button>
				</div>
			</div>
		</main>
	)
}
