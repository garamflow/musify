import React from "react";
import HeaderBgChanger from "@/components/HeaderBgChanger";
import { getPlaylistById } from "@/lib/dummyData";
import { getRandomElementFromArray } from "@/lib/utils";
import { permanentRedirect } from "next/navigation";
import PagePadding from "@/components/PagePadding";
import PlaylistHead from "@/components/PlaylistHead";
import SongCardExpand from "@/components/SongCardExpand";

interface PlaylistProps {
	searchParams: {
		list: string;
	};
}

const page = async (props: PlaylistProps) => {
	const playlist = await getPlaylistById(Number(props.searchParams.list));

	if (!playlist) permanentRedirect("/");

	const imageSrc = getRandomElementFromArray(playlist.songList)?.imageSrc;

	return (
		<PagePadding>
			<HeaderBgChanger imageSrc={imageSrc} />
			<div className='mt-12'></div>
			<PlaylistHead playlist={playlist} />
			<div className='mt-12'></div>
			<section className='flex flex-col gap-2'>
				{playlist.songList.map((song, idx) => {
					return (
						<SongCardExpand
							key={idx}
							song={song}
						/>
					);
				})}
			</section>
		</PagePadding>
	);
};

export default page;
