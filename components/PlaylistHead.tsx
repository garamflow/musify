"use client";

import React from "react";
import { Playlist } from "@/types";
import IconButton from "@/components/elements/IconButton";
import { FiFolderPlus, FiMoreVertical, FiPlay } from "react-icons/fi";
import Image from "next/image";
import { getRandomElementFromArray } from "@/lib/utils";
import WhiteButton from "@/components/elements/WhiteButton";
import BlackButton from "@/components/elements/BlackButton";
import usePlayerState from "@/hooks/usePlayerState";

const PlaylistHead = ({ playlist }: { playlist: Playlist }) => {
	const { setSongQueue } = usePlayerState();

	const { playlistName, owner, songList } = playlist;

	const randomSong = getRandomElementFromArray(songList);

	const onClickPlaylist = () => {
		setSongQueue(songList);
	};

	return (
		<section>
			<div className='flex flex-row gap-[50px]'>
				<div className='relative h-[160px] w-[160px] lg:h-[240px] lg:w-[240px]'>
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
					<ul className='hidden lg:flex flex-row gap-4 mt-4'>
						<WhiteButton
							onClick={onClickPlaylist}
							className={"w-[85px] text-[14px]"}
							icon={<FiPlay />}
							label='play'
						/>
						<BlackButton
							className={"w-[150px] text-[14px]"}
							icon={<FiFolderPlus />}
							label={"Wishlist Save"}
						/>
						<IconButton icon={<FiMoreVertical size={24} />} />
					</ul>
				</article>
			</div>
			<ul className='flex flex-row gap-4 mt-4 lg:hidden'>
				<WhiteButton
					onClick={onClickPlaylist}
					className={"w-[85px] text-[14px]"}
					icon={<FiPlay />}
					label='play'
				/>
				<BlackButton
					className={"w-[135px] text-[14px]"}
					icon={<FiFolderPlus />}
					label='plus'
				/>
				<IconButton icon={<FiMoreVertical size={24} />} />
			</ul>
		</section>
	);
};

export default PlaylistHead;
