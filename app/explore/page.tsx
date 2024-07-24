import Category from "@/app/explore/components/Catagory";
import PagePadding from "@/components/PagePadding";
import PlaylistCarousel from "@/components/PlaylistCarousel";
import { getAllPlaylist } from "@/lib/dummyData";
import React from "react";

const page = async () => {
	const playlistArray = await getAllPlaylist();

	return (
		<PagePadding>
			<div className='mt-4'></div>
			<Category />
			<div className='mt-20'></div>
			<PlaylistCarousel
				playlistArray={playlistArray}
				title='New Album & Single'
			/>
		</PagePadding>
	);
};

export default page;
