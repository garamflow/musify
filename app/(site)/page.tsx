import Category from "@/app/(site)/components/Category";
import PagePadding from "@/components/PagePadding";
import PlaylistCarousel from "@/components/PlaylistCarousel";
import UserIcon from "@/components/UserIcon";
import { dummyPlaylistArray } from "@/lib/dummyData";
import React from "react";

const page = async () => {
	const dummyPlaylistArray1 = [...dummyPlaylistArray];

	return (
		<PagePadding>
			<div className='min-h-[600px]'>
				<div className='mt-9'></div>
				<Category />
				<div className='mt-12'></div>
				<PlaylistCarousel
					playlist={[...dummyPlaylistArray1]}
					Thumbnail={
						<div className='w-[56px] h-[56px]'>
							<UserIcon size={"lg"} />
						</div>
					}
					title='Replay'
					subTitle='Youtube'
				/>
			</div>
		</PagePadding>
	);
};

export default page;
