import Category from "@/app/(site)/components/Category";
import { sleep } from "@/lib/utils";
import React from "react";

const page = async () => {
	await sleep(2000);
	return (
		<div className='min-h-[600px]'>
			<div className='mt-9'>
				<Category />
			</div>
		</div>
	);
};

export default page;
