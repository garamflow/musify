"use client";
import React from "react";
import Image from "next/image";
import { TopSong } from "@/types";
import IconButton from "@/components/elements/IconButton";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { FaCircle } from "react-icons/fa";
import { FiPlayCircle, FiThumbsDown, FiThumbsUp, FiMoreVertical } from "react-icons/fi";
import usePlayerState from "@/hooks/usePlayerState";

interface SongCardProps {
	song: TopSong;
}

const SongCard = ({ song }: SongCardProps) => {
	const { setSongQueue } = usePlayerState();

	const onClickPlay = () => {
		setSongQueue([song]);
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
				<section
					onClick={onClickPlay}
					className='hidden group-hover:flex absolute top-0 w-[48px] h-[48px] items-center justify-center bg-black cursor-pointer'
				>
					<FiPlayCircle size={20} />
				</section>
			</div>
			<div className='flex flex-row items-center gap-4'>
				<div>
					{song.rank === song.prevRank ? (
						<FaCircle size={10} />
					) : song.rank > song.prevRank ? (
						<AiOutlineCaretUp
							color='#3CA63F'
							size={10}
						/>
					) : (
						<AiOutlineCaretDown
							color='#FF0000'
							size={10}
						/>
					)}
				</div>
				<div>{song.rank + 1}</div>
			</div>
			<div>
				<div>{song.name}</div>
			</div>
			<section className='hidden group-hover:flex absolute top-0 right-0 flex-row justify-end items-center h-[48px] w-1/2 bg-[rgba(0,0,0,0.7)]'>
				<IconButton icon={<FiThumbsDown size={20} />} />
				<IconButton icon={<FiThumbsUp size={20} />} />
				<IconButton icon={<FiMoreVertical size={20} />} />
			</section>
		</article>
	);
};

export default SongCard;
