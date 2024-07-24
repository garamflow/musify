import React from "react";
import { dummyGenreList, getAllPlaylist, getSongListTop10 } from "@/lib/dummyData";
import Category from "@/app/explore/components/Catagory";
import GenreListCarousel from "@/components/GenreListCarousel";
import PagePadding from "@/components/PagePadding";
import PlaylistCarousel from "@/components/PlaylistCarousel";
import SongListCarousel from "@/components/SongListCarousel";

const page = async () => {
	const [playlistArray, songListTop10] = await Promise.all([getAllPlaylist(), getSongListTop10()]);

	return (
		<PagePadding>
			<div className='mt-4'></div>
			<Category />
			<div className='mt-20'></div>
			<PlaylistCarousel
				playlistArray={playlistArray}
				title='New Album & Single'
			/>
			<div className='mt-20'></div>
			<SongListCarousel
				songListTop10={songListTop10}
				title='Trends'
			/>
			<div className='mt-20'></div>
			<GenreListCarousel genreList={dummyGenreList} />
			<div className='mt-20'></div>
			<div className='mt-20'></div>
		</PagePadding>
	);
};

export default page;
