"use client";
import React, { useEffect } from "react";
import useUIState from "@/hooks/useUIState";

const HeaderBgChanger = ({ imageSrc }: { imageSrc: string | undefined }) => {
	const { setHeaderImageSrc } = useUIState();

	useEffect(() => {
		if (imageSrc) setHeaderImageSrc(imageSrc);
	}, [imageSrc]);

	return <div>HeaderBgChanger</div>;
};

export default HeaderBgChanger;
