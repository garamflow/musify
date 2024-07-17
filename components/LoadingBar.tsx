"use client";
import React from "react";
import { BarLoader } from "react-spinners";

const LoadingBar = (): JSX.Element => {
	return (
		<div className='w-full h-full'>
			<BarLoader
				color='red'
				height='1.1vw'
				cssOverride={{ width: "100%" }}
			/>
		</div>
	);
};

export default LoadingBar;
