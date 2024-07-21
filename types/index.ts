export interface Song {
	channelId: number;
	name: string;
	channel: string;
	src: string;
	imageSrc: string;
}

export interface TopSong extends Song {
	prevRank: number;
	rank: number;
}

export interface Playlist {
	id: number;
	owner: string;
	playlistName: string;
	songList: Song[];
}

export interface Channel {
	id: number;
	subscribers: number;
	name: string;
	songList: Song[];
	playlistArray: Playlist[];
}
