import Category from "@/app/(site)/components/Category";
import PagePadding from "@/components/PagePadding";
import PlaylistCarousel from "@/components/PlaylistCarousel";
import UserIcon from "@/components/UserIcon";
import { dummyPlaylistArray, getPlaylistById } from "@/lib/dummyData";
import React from "react";

const page = async () => {
	const dummyPlaylistArray1 = [...dummyPlaylistArray];
	const dummyPlaylistArray2 = [await getPlaylistById(1)];
	const dummyPlaylistArray3 = [await getPlaylistById(2)];
	const dummyPlaylistArray4 = [await getPlaylistById(3)];

	return (
		<PagePadding>
			<div className='min-h-[600px]'>
				<div className='mt-9'></div>
				<Category />
				<div className='mt-20'></div>
				<PlaylistCarousel
					playlistArray={[...dummyPlaylistArray1]}
					Thumbnail={
						<div className='w-[56px] h-[56px]'>
							<UserIcon size={"lg"} />
						</div>
					}
					title='Replay'
					subTitle='Musify'
				/>
				<div className='mt-20'></div>

				<PlaylistCarousel
					playlistArray={[...dummyPlaylistArray1]}
					title='IU'
					subTitle='New Album'
				/>
				<div className='mt-20'></div>

				<PlaylistCarousel
					playlistArray={[...dummyPlaylistArray1]}
					title='Community'
					subTitle='Musify'
				/>
				<div className='mt-20'></div>

				<PlaylistCarousel
					playlistArray={[...dummyPlaylistArray1]}
					title='Cover & Remix'
					subTitle='Musify'
				/>
			</div>
		</PagePadding>
	);
};

export default page;
