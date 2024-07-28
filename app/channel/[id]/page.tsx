import React from "react";
import { permanentRedirect } from "next/navigation";
import { getChannelById } from "@/lib/dummyData";
import { getRandomElementFromArray } from "@/lib/utils";
import HeaderBgChanger from "@/components/HeaderBgChanger";
import PagePadding from "@/components/PagePadding";
import PlaylistCarousel from "@/components/PlaylistCarousel";
import SongCardExpand from "@/components/SongCardExpand";
import ChannelHead from "@/app/channel/components/ChannelHead";

interface ChannelPageProps {
	params: {
		id: string;
	};
}

const page = async (props: ChannelPageProps) => {
	const channel = await getChannelById(Number(props.params.id));

	if (!channel) permanentRedirect("/");

	const imageSrc = getRandomElementFromArray(channel.songList)?.imageSrc;

	return (
		<PagePadding>
			<HeaderBgChanger imageSrc={imageSrc} />
			<div className='mt-[150px]'></div>
			<ChannelHead channel={channel} />
			<section className='mt-[80px]'>
				<div className=' text-[28px] font-bold'>Song</div>
				<div className='mt-[20px]'>
					<ul className='flex flex-col gap-2'>
						{channel.songList.map((song, key) => {
							return (
								<SongCardExpand
									song={song}
									key={key}
								/>
							);
						})}
					</ul>
				</div>
			</section>
			<section className='mt-[80px]'>
				<div className='text-[28px] font-bold'>Album</div>
				<PlaylistCarousel playlistArray={channel.playlistArray} />
			</section>
			<section className='mt-[80px]'></section>
		</PagePadding>
	);
};

export default page;
