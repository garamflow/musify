import React from "react";
import { permanentRedirect } from "next/navigation";
import { FiMusic, FiShuffle } from "react-icons/fi";
import { getChannelById } from "@/lib/dummyData";
import { getRandomElementFromArray } from "@/lib/utils";
import HeaderBgChanger from "@/components/HeaderBgChanger";
import PagePadding from "@/components/PagePadding";
import PlaylistCarousel from "@/components/PlaylistCarousel";
import SongCardExpand from "@/components/SongCardExpand";
import WhiteButton from "@/components/elements/WhiteButton";
import BlackButton from "@/components/elements/BlackButton";

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
			<section>
				<div className=' text-[28px] font-bold'>{channel.name}</div>
				<article className='mt-4 lg:hidden'>
					<div>
						<BlackButton
							className={"w-[230px] flex justify-center"}
							label={"구독중 4.18만"}
						/>
					</div>
					<div className='flex flex-row gap-4 mt-4'>
						<WhiteButton
							label={"셔플"}
							icon={<FiShuffle size={16}></FiShuffle>}
						/>
						<WhiteButton
							label={"뮤직 스테이션"}
							icon={<FiMusic size={16} />}
						/>
					</div>
				</article>
				<div className='hidden lg:flex flex-row items-center gap-4 text-[14px] mt-4'>
					<WhiteButton
						label={"셔플"}
						icon={<FiShuffle size={16}></FiShuffle>}
					/>
					<WhiteButton
						label={"뮤직 스테이션"}
						icon={<FiMusic size={16} />}
					/>
					<BlackButton
						className={"w-[230px] flex justify-center"}
						label={"구독중 4.18만"}
					/>
				</div>
			</section>
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
