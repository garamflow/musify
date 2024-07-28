"use client";
import PlayerContent from "@/components/player/PlayerContent";
import usePlayerState from "@/hooks/usePlayerState";
import React from "react";

const PlayerWrapper = () => {
	const { isPlayerVisible } = usePlayerState();

	if (!isPlayerVisible) return null;

	return (
		<div className='fixed bottom-0 h-[72px] w-full bg-neutral-900'>
			<PlayerContent />
		</div>
	);
};

export default PlayerWrapper;
