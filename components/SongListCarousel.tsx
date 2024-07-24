import React from "react";
import { TopSong } from "@/types";
import { chunkArray } from "@/lib/utils";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import SongCard from "@/components/SongCard";

interface SongListCarouselProps {
	title?: string;
	subTitle?: string;
	Thumbnail?: React.ReactNode;
	songListTop10: TopSong[];
}

const SongColumn = ({ songList = [] }: { songList: TopSong[] }) => {
	return (
		<div className='flex flex-col gap-4'>
			{songList.map((song: TopSong, idx: number) => {
				return (
					<SongCard
						key={idx}
						song={song}
					/>
				);
			})}
		</div>
	);
};

const SongListCarousel = ({ songListTop10, Thumbnail, title, subTitle }: SongListCarouselProps) => {
	const chunkedTop10SongList = chunkArray(songListTop10, 4) as TopSong[][];

	return (
		<div className='w-full'>
			<Carousel>
				<div className='flex flex-row justify-between items-end my-2'>
					<article className='flex flex-row gap-3'>
						{Thumbnail}
						<div className='flex flex-col justify-center'>{subTitle && <div className='text-neutral-500'>{subTitle}</div>}</div>
						<div className='text-[34px] font-bold leadding-[34px]'>{title}</div>
					</article>
					<div className='relative left-[-45px]'>
						<div className='absolute bottom-[20px]'>
							<CarouselPrevious className='right-2' />
							<CarouselNext className='left-2' />
						</div>
					</div>
				</div>
				<CarouselContent className='mt-4'>
					{chunkedTop10SongList?.map((songList, index) => {
						return (
							<CarouselItem
								key={index}
								className='lg:basis-1/2'
							>
								<SongColumn songList={songList} />
							</CarouselItem>
						);
					})}
				</CarouselContent>
			</Carousel>
		</div>
	);
};

export default SongListCarousel;
