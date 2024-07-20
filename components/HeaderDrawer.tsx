import React, { useState } from "react";
import Navigator from "@/components/elements/Navigator";

import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import Logo from "@/components/elements/Logo";

const HeaderDrawer = ({ children }: { children: React.ReactNode }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Drawer
			direction='left'
			open={isOpen}
			onOpenChange={setIsOpen}
		>
			<DrawerTrigger>{children}</DrawerTrigger>
			<DrawerContent className='w-[240px] h-full'>
				<div className='py-3'>
					<div className='px-3'>
						<Logo
							isInDrawer
							onClickClose={() => {
								setIsOpen(false);
							}}
						/>
					</div>
					<Navigator />
				</div>
			</DrawerContent>
		</Drawer>
	);
};

export default HeaderDrawer;
