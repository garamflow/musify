import { Playlist } from "@/types";
import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface PlaylistCarouselProps {
	title?: string;
	subTitle?: string;
	Thumbnail?: React.ReactNode;
	playlist?: Playlist[];
}

const PlaylistCarousel = ({ playlist, Thumbnail, title, subTitle }: PlaylistCarouselProps) => {
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
				<CarouselContent>
					{Array.from({ length: 5 }).map((_, index) => (
						<CarouselItem
							key={index}
							className='md:basis-1/2 lg:basis-1/3'
						>
							<div className='p-1'>card</div>
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
		</div>
	);
};

export default PlaylistCarousel;
