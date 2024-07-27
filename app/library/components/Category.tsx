"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, DropdownMenuCheckboxItem } from "@/components/ui/dropdown-menu";
import { AiFillCaretDown } from "react-icons/ai";
import { FiCheck } from "react-icons/fi";

const Category = () => {
	const libraryCategoryList = ["재생목록", "팟캐스트", "노래", "앨범", "아티스트"];

	return (
		<div className='flex flex-row justify-center items-center gap-4 flex-wrap'>
			<ul className='max-w-full overflow-x-auto flex flex-row gap-4'>
				{libraryCategoryList.map((item) => {
					return (
						<li
							key={item}
							className={cn("h-[38px] min-w-fit px-3 flex justify-center items-center border border-transparent rounded-lg bg-[rgba(144,144,144,0.2)] hover:bg-[rgba(144,144,144,0.45)] cursor-pointer")}
						>
							{item}
						</li>
					);
				})}
			</ul>
			<div>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<div className='w-[162px] h-[42px] flex flex-row justify-between items-center p-4 bg-neutral-700 border border-neutral-600 rounded-3xl text-[14px]'>
							<div>최근활동</div>
							<div>
								<AiFillCaretDown />
							</div>
						</div>
					</DropdownMenuTrigger>
					<DropdownMenuContent
						align='end'
						className='w-[300px] bg-neutral-800'
					>
						<DropdownMenuLabel className='p-4'>Appearance</DropdownMenuLabel>
						<DropdownMenuSeparator className='bg-neutral-700' />
						<DropdownMenuCheckboxItem className='p-4'>
							<span className='min-w-[40px]'>
								<FiCheck size={20} />
							</span>
							Recent Active
						</DropdownMenuCheckboxItem>
						<DropdownMenuCheckboxItem className='p-4'>
							<span className='min-w-[40px]'>
								<FiCheck size={20} />
							</span>
							Recent Saved
						</DropdownMenuCheckboxItem>
						<DropdownMenuCheckboxItem className='p-4'>
							<span className='min-w-[40px]'>
								<FiCheck size={20} />
							</span>
							Recent Play Music
						</DropdownMenuCheckboxItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</div>
	);
};

export default Category;
