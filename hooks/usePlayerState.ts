import { Song } from "@/types";
import { create } from "zustand";

interface PlayerState {
	isPlayerVisible: boolean;
	setPlayerVisible: (isPlayerVisible: boolean) => void;
	activeSong?: Song | null;
	previousQueue: Song[];
	nextQueue: Song[];
	setSongQueue: (songList: Song[]) => void;
	playNext: () => void;
	playBack: () => void;
}

const usePlayerState = create<PlayerState>((set) => ({
	isPlayerVisible: false,
	setPlayerVisible: (isPlayerVisible: boolean) => set({ isPlayerVisible }),
	activeSong: null,
	previousQueue: [],
	nextQueue: [],
	setSongQueue: (songList: Song[]) =>
		set((prev) => {
			const prevSong = prev.activeSong;
			const cloneSongList = [...songList];
			const currentSong = cloneSongList.splice(0, 1)?.[0];

			return {
				activeSong: currentSong,
				previousQueue: prevSong ? [prevSong, ...prev.previousQueue] : prev.previousQueue,
				nextQueue: [...cloneSongList],
				isVisiblePlayer: true,
			};
		}),
	playNext: () =>
		set((prev) => {
			const currentSong = prev.activeSong;
			const nextQueue = [...prev.nextQueue];
			const nextSong = nextQueue.shift();

			return {
				activeSong: nextSong || null,
				nextQueue: nextQueue,
				previousQueue: currentSong ? [currentSong, ...prev.previousQueue] : prev.previousQueue,
			};
		}),
	playBack: () =>
		set((prev) => {
			const currentSong = prev.activeSong;
			const previousQueue = [...prev.previousQueue];
			const prevSong = previousQueue.shift();

			return {
				activeSong: prevSong || null,
				nextQueue: currentSong ? [currentSong, ...prev.nextQueue] : prev.previousQueue,
				previousQueue: previousQueue,
			};
		}),
}));

export default usePlayerState;
