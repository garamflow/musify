"use client";

import React from "react";
import { Playlist } from "@/types";
import IconButton from "@/components/elements/IconButton";
import { FiMoreVertical } from "react-icons/fi";
import Image from "next/image";
import { getRandomElementFromArray } from "@/lib/utils";

const PlaylistHead = ({ playlist }: { playlist: Playlist }) => {
	const { playlistName, owner, songList } = playlist;

	const randomSong = getRandomElementFromArray(songList);

	return (
		<section className='flex flex-col items-center gap-[50px] lg:flex-row'>
			<div className='relative h-[240px] w-[240px]'>
				<Image
					alt='songImage'
					fill
					src={randomSong?.imageSrc || "https://images.unsplash.com/photo-1707833558984-3293e794031c"}
				/>
			</div>
			<article className='flex flex-col justify-center'>
				<div className='font-bold text-[28px]'>{playlistName}</div>
				<div className='text-neutral-400 mt-4 text-[14px]'>
					<div>{`Album, ${owner}, 2019`}</div>
					<div>{`${songList.length}, 15min`}</div>
				</div>
				<ul>
					<IconButton icon={<FiMoreVertical size={24} />} />
				</ul>
			</article>
		</section>
	);
};

export default PlaylistHead;
