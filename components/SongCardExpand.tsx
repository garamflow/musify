"use client";
import React from "react";
import Image from "next/image";
import { Song } from "@/types";
import IconButton from "@/components/elements/IconButton";
import { FiPlayCircle, FiThumbsDown, FiThumbsUp, FiMoreVertical } from "react-icons/fi";
import { useRouter } from "next/navigation";

interface SongCardExpandProps {
	song: Song;
}

const SongCardExpand = ({ song }: SongCardExpandProps) => {
	const { channel, channelId } = song;
	const { push } = useRouter();

	const onClickChannel = () => {
		push(`/channel/${channelId}`);
	};

	return (
		<article className='flex flex-row gap-4 h-[48px] w-full relative group'>
			<div className='w-[48px] h-[48px] relative'>
				<Image
					alt='song image'
					src={song.imageSrc}
					fill
					className='object-cover'
				/>
				<section className='hidden group-hover:flex absolute top-0 w-[48px] h-[48px] items-center justify-center bg-black cursor-pointer'>
					<FiPlayCircle size={20} />
				</section>
			</div>
			<div className='flex flex-row gap-4 justify-between basis-1/3'>
				<div className='w-[100px] truncate'>{song.name}</div>
				<div
					onClick={onClickChannel}
					className='cursor-pointer text-neutral-500 hover:underline'
				>
					{channel}
				</div>
			</div>
			<section className='hidden group-hover:flex absolute top-0 right-0 flex-row justify-end items-center h-[48px] w-[120px] bg-[rgba(0,0,0,0.7)]'>
				<IconButton icon={<FiThumbsDown size={20} />} />
				<IconButton icon={<FiThumbsUp size={20} />} />
				<IconButton icon={<FiMoreVertical size={20} />} />
			</section>
		</article>
	);
};

export default SongCardExpand;
