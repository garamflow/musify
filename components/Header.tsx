"use client";
import PagePadding from "@/components/PagePadding";
import UserIcon from "@/components/UserIcon";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FaChromecast } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import Logo from "@/components/elements/Logo";
import { cn } from "@/lib/utils";
import HeaderDrawer from "@/components/HeaderDrawer";

const Header = ({ children }: { children: React.ReactNode }) => {
	const [isScrolled, setIsScrolled] = useState(false);
	const headerRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const headerElement = headerRef?.current;

		const handleScroll = () => {
			const scrollValue = headerRef?.current?.scrollTop;
			setIsScrolled(scrollValue !== 0);
		};

		headerElement?.addEventListener("scroll", handleScroll);

		return () => {
			headerElement?.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<header
			ref={headerRef}
			className='relative overflow-y-auto w-full h-full'
		>
			<section className='absolute top-0 w-full'>
				<div className='relative h-[400px] w-full'>
					<Image
						alt='Header Image Item'
						className='object-cover'
						fill
						src='https://images.unsplash.com/photo-1707833558984-3293e794031c'
					/>
					<div className='absolute h-[400px] top-0 bg-black opacity-40 w-full'></div>
					<div className='absolute h-[400px] top-0 bg-gradient-to-t from-black  w-full'></div>
				</div>
			</section>
			<section className={cn("sticky top-0 left-0 z-10", isScrolled && "bg-black")}>
				<PagePadding>
					<div className='h-[64px] flex flex-row justify-between items-center'>
						<article className='h-[42px] min-w-[480px] hidden lg:flex flex-row items-center bg-[rgba(0,0,0,0.14)] rounded-2xl px-[16px] gap-[16px] border border-neutral-500'>
							<div>
								<FiSearch size={24} />
							</div>
							<input
								type='text'
								className='h-full w-full bg-transparent'
								placeholder='Song, Album, Artist, Podcast Search...'
							/>
						</article>
						<HeaderDrawer>
							<article className='lg:hidden'>
								<Logo />
							</article>
						</HeaderDrawer>
						<article className='flex flex-row gap-6 items-center'>
							<FaChromecast size={26} />
							<UserIcon />
						</article>
					</div>
				</PagePadding>
			</section>
			<section className='relative'>{children}</section>
		</header>
	);
};

export default Header;
