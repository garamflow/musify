import Logo from "@/components/elements/Logo";
import Navigator from "@/components/elements/Navigator";
import React from "react";

const Sidebar = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='flex flex-row h-full'>
			<nav className='hidden lg:block w-[240px] border-r-[1px] border-neutral-600'>
				<div className='p-[24px]'>
					<Logo />
				</div>
				<div>
					<Navigator />
				</div>
			</nav>
			<div className='w-full lg:w-[calc(100% - 240px)]'>{children}</div>
		</div>
	);
};

export default Sidebar;
