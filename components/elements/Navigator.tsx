"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useMemo } from "react";
import { FiPlus, FiMusic, FiCompass } from "react-icons/fi";
import { GoHome } from "react-icons/go";
import { dummyPlaylistArray } from "@/lib/dummyData";
import { PlaylistNavigator } from "@/components/elements/PlaylistNavigator";

const Navigator = () => {
	const pathname = usePathname();
	const routes = useMemo(() => {
		return [
			{ icon: <GoHome size={24} />, label: "Home", isActive: pathname === "/", href: "/" },
			{ icon: <FiCompass size={24} />, label: "Explore", isActive: pathname === "/explore", href: "/explore" },
			{ icon: <FiMusic size={24} />, label: "Library", isActive: pathname === "/library", href: "/library" },
		];
	}, [pathname]);

	return (
		<div>
			<section className='flex flex-col gap-2 p-4'>
				{routes.map((route) => {
					return (
						<Link
							key={route.label}
							href={route.href}
						>
							<div className={cn("test-[16px] flex flex-row items-center gap-4 hover:bg-neutral-700 rounded-lg p-2", route.isActive && "bg-neutral-800")}>
								{route.icon}
								<span>{route.label}</span>
							</div>
						</Link>
					);
				})}
			</section>
			<section className='px-6'>
				<div className='w-full h-[1px] bg-neutral-700'></div>
			</section>
			<section className='px-6'>
				<div className='hover:bg-slate-700 cursor-pointer flex flex-row items-center bg-neutral-800 my-6 rounded-3xl p-2 font-[200] justify-center gap-2'>
					<FiPlus size={24} />
					<span>New Playlist</span>
				</div>
			</section>
			<section>
				<ul className='flex flex-col'>
					{dummyPlaylistArray.map((playlist) => {
						return (
							<PlaylistNavigator
								key={playlist.id}
								playlist={playlist}
							/>
						);
					})}
				</ul>
			</section>
		</div>
	);
};

export default Navigator;
