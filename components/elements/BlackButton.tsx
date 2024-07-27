"use client";
import { cn } from "@/lib/utils";
import React from "react";

interface BlackButtonProps {
	icon: React.ReactNode;
	label: string;
	className: string;
}

const BlackButton = ({ icon, label, className, ...props }: BlackButtonProps) => {
	return (
		<div
			className={cn("cursor-pointer border-neutral-700 bg-black hover:bg-neutral-700 text-white rounded-2xl flex flex-row items-center min-w-[80px] h-[36px] p-4 gap-2", className)}
			{...props}
		>
			<span>{icon}</span>
			<span>{label}</span>
		</div>
	);
};

export default BlackButton;
