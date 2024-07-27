import React from "react";
import PagePadding from "@/components/PagePadding";
import Category from "@/app/library/components/Category";
import PlaylistCard from "@/components/PlaylistCard";
import { getRandomElementFromArray } from "@/lib/utils";
import { dummyPlaylistArray } from "@/lib/dummyData";

const page = () => {
	const randomPlaylist = getRandomElementFromArray(dummyPlaylistArray) || {
		id: 0,
		owner: "Unknown",
		playlistName: "Unknown Playlist",
		songList: [],
	};

	return (
		<PagePadding>
			<div className='mt-9'></div>
			<Category />
			<div className='mt-12'></div>
			<section className='grid grid-cols-3 gap-6 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>
				<PlaylistCard playlist={randomPlaylist} />
				<PlaylistCard playlist={randomPlaylist} />
				<PlaylistCard playlist={randomPlaylist} />
				<PlaylistCard playlist={randomPlaylist} />
				<PlaylistCard playlist={randomPlaylist} />
				<PlaylistCard playlist={randomPlaylist} />
				<PlaylistCard playlist={randomPlaylist} />
				<PlaylistCard playlist={randomPlaylist} />
				<PlaylistCard playlist={randomPlaylist} />
				<PlaylistCard playlist={randomPlaylist} />
				<PlaylistCard playlist={randomPlaylist} />
			</section>
			<div className='mt-20'></div>
		</PagePadding>
	);
};

export default page;
