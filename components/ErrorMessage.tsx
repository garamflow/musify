"use client";
import React from "react";
import { GridLoader } from "react-spinners";

const ErrorMessage = (): JSX.Element => {
	return (
		<div className='my-20 flex flex-col justify-center items-center gap-4'>
			<GridLoader color='red' />
			<div className='text-[50px]'>Oops</div>
			<div>다시 확인해주세요.</div>
		</div>
	);
};

export default ErrorMessage;
