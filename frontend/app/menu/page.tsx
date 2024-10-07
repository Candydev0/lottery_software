'use client'
import {
	Badge,
	Button,
	Card,
	CardBody,
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@nextui-org/react'
import { ClarityDisconnectLine } from '../../components/icons/ClarityDisconnectLine'
import { ClarityUpdateLine } from '../../components/icons/ClarityUpdateLine'
import HugeiconsConnect from '../../components/icons/hugeiconsConnect'
import { MaterialSymbolsUsb } from '../../components/icons/MaterialSymbolsUsb'
import { MaterialSymbolsWifiTethering } from '../../components/icons/MaterialSymbolsWifiTethering'
import { SolarPrinterBold } from '../../components/icons/SolarPrinterBold'
import { SolarProgrammingBold } from '../../components/icons/SolarProgrammingBold'
import { UilWifi } from '../../components/icons/UilWifi'

export default function Page() {
	return (
		<main className="w-full h-screen flex flex-col justify-center items-center gap-4">
			<div className="logo text-2xl">MENU</div>
			<Card radius="sm" className="bg-default-100 border border-default-400 ">
				<CardBody className="grid grid-cols-1 sm:grid-cols-2 gap-3  ">
					<Button
						className="h-[60px]  flex-col justify-center items-center text-base gap-0  bg-white text-black"
						color="default"
					>
						<HugeiconsConnect width={26} height={26} />
						Connect
					</Button>
					<Button
						className="h-[60px] flex-col justify-center items-center text-base gap-0  bg-white text-black"
						color="default"
					>
						<ClarityDisconnectLine width={26} height={26} />
						Disconnect
					</Button>
					<Button
						className="h-[60px]  divide-x-2  justify-start    divide-black"
						color="success"
						as={'div'}
					>
						<div className="h-full justify-center flex items-center mr-1">
							<SolarProgrammingBold width={36} height={36} />
						</div>
						<div className="h-full flex flex-col justify-center px-2.5 gap-0">
							<span className="text-xl/4 font-semibold">Program</span>
							<span className="text-sm text-default-100">Online</span>
						</div>
					</Button>
					<Button
						className="h-[60px]  divide-x-2  justify-start    divide-black"
						color="warning"
						as={'div'}
					>
						<div className="h-full justify-center flex items-center mr-1">
							<ClarityUpdateLine width={36} height={36} />
						</div>
						<div className="h-full flex flex-col justify-center px-2.5 gap-0">
							<span className="text-xl/4 font-semibold">Updation</span>
							<span className="text-sm ">1.0 v</span>
						</div>
					</Button>
					<Button
						className="h-[60px]  divide-x-2  justify-start    divide-black"
						color="success"
						as={'div'}
					>
						<div className="h-full justify-center flex items-center mr-1">
							<SolarPrinterBold width={36} height={36} />
						</div>
						<div className="h-full flex flex-col justify-center px-2.5 gap-0">
							<span className="text-xl/4 font-semibold">Printer</span>
							<span className="text-sm ">connected</span>
						</div>
					</Button>
					<Button
						className="h-[60px] flex-col justify-center items-center text-base gap-0  bg-white text-black"
						color="default"
					>
						<MaterialSymbolsWifiTethering width={26} height={26} />
						Tethering
					</Button>
					<Button
						className="h-[60px]  divide-x-2  justify-start    divide-black"
						color="success"
						as={'div'}
					>
						<div className="h-full justify-center flex items-center mr-1">
							<UilWifi width={36} height={36} />
						</div>
						<div className="h-full flex flex-col justify-center px-2.5 gap-0">
							<span className="text-xl/4 font-semibold">Wifi</span>
							<span className="text-sm ">connected</span>
						</div>
					</Button>
					<Button
						className="h-[60px]  divide-x-2  justify-start  bg-white text-black  divide-black"
						color="default"
						as={'div'}
					>
						<div className="h-full justify-center flex items-center mr-1">
							<MaterialSymbolsUsb width={36} height={36} />
						</div>
						<div className="h-full flex flex-col justify-center px-2.5 gap-0">
							<span className="text-xl/4 font-semibold">Modem</span>
							<span className="text-sm ">--------</span>
						</div>
					</Button>
				</CardBody>
			</Card>

			<div className=" flex justify-between bg-white/10  border-white/20 border-1 overflow-hidden  absolute rounded-large bottom-3 right-3  shadow-small  z-10 gap-2 p-1">
				<Connectivity />
				<PowerMenu />
			</div>
		</main>
	)
}

import {
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
} from '@nextui-org/react'
import { UiwPoweroff } from '../../components/icons/UiwPoweroff'
import { IconamoonRestart } from '../../components/icons/Restart'

export function PowerMenu() {
	const iconClasses =
		'text-xl text-default-500 pointer-events-none flex-shrink-0'

	return (
		<Dropdown>
			<DropdownTrigger>
				<Button variant="light" isIconOnly>
					<UiwPoweroff className={iconClasses} />
				</Button>
			</DropdownTrigger>
			<DropdownMenu variant="faded" aria-label="Dropdown menu with icons">
				<DropdownItem
					key="edit"
					shortcut="⌘⇧E"
					startContent={<IconamoonRestart className={iconClasses} />}
				>
					Restart Programs
				</DropdownItem>
				<DropdownItem
					key="copy"
					shortcut="⌘C"
					startContent={<IconamoonRestart className={iconClasses} />}
				>
					Reboot
				</DropdownItem>
				<DropdownItem
					key="new"
					shortcut="⌘N"
					startContent={<UiwPoweroff className={iconClasses} />}
				>
					Power Off
				</DropdownItem>
			</DropdownMenu>
		</Dropdown>
	)
}

export function Connectivity() {
	return (
		<Popover placement="top">
			<PopoverTrigger>
				<Button isIconOnly variant="light">
					<Badge
						isOneChar
						size="sm"
						color="success"
						isDot
						placement="top-right"
					>
						<MaterialSymbolsWifiTethering className="text-2xl text-default-500 pointer-events-none flex-shrink-0" />
					</Badge>
				</Button>
			</PopoverTrigger>
			<PopoverContent>
				<div className="px-1 py-2">
					<div className="text-small font-bold">Popover Content</div>
					<div className="text-tiny">This is the popover content</div>
				</div>
			</PopoverContent>
		</Popover>
	)
}
