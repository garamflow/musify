import { Playlist } from "@/types";
import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import PlaylistCard from "@/components/PlaylistCard";

interface PlaylistCarouselProps {
	title?: string;
	subTitle?: string;
	Thumbnail?: React.ReactNode;
	playlistArray?: Playlist[];
}

const PlaylistCarousel = ({ playlistArray, Thumbnail, title, subTitle }: PlaylistCarouselProps) => {
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
					{playlistArray?.map((playlist, index) => {
						return (
							<CarouselItem
								key={index}
								className='basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5'
							>
								<PlaylistCard playlist={playlist} />
							</CarouselItem>
						);
					})}
				</CarouselContent>
			</Carousel>
		</div>
	);
};

export default PlaylistCarousel;
