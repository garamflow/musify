import React from "react";
import { FiMusic, FiBarChart, FiSmile } from "react-icons/fi";

const CategoryMenu = ({ icon, label }: { icon: React.ReactNode; label: string }) => {
	return (
		<div className='w-full h-[56px] py-4 px-[24px] flex flex-row gap-4 items-center bg-neutral-700 text-[20px] cursor-pointer rounded-sm hover:bg-neutral-800 transition'>
			{icon}
			{label}
		</div>
	);
};

const Catagory = () => {
	return (
		<div className='flex flex-col gap-4 w-full lg:flex-row'>
			<CategoryMenu
				label={"New Music"}
				icon={<FiMusic color='#AAAAA' />}
			/>
			<CategoryMenu
				label={"Chart"}
				icon={<FiBarChart color='#AAAAA' />}
			/>
			<CategoryMenu
				label={"Mood & Genre"}
				icon={<FiSmile color='#AAAAA' />}
			/>
		</div>
	);
};

export default Catagory;
