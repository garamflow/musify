import { Playlist } from "@/types";
import React from "react";

interface PlaylistCarouselProps {
	title?: string;
	subTitle?: string;
	Thumbnail?: React.ReactNode;
	playlist?: Playlist[];
}

const PlaylistCarousel = ({ playlist, Thumbnail, title, subTitle }: PlaylistCarouselProps) => {
	return (
		<div>
			{""}
			{Thumbnail}
			{title} - {subTitle}
			{JSON.stringify(playlist)}
		</div>
	);
};

export default PlaylistCarousel;
