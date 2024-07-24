import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

export function getRandomInt(min: number, max: number) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomElementFromArray<T>(arr: T[]): T | undefined {
	const len = arr?.length;
	return arr[getRandomInt(0, len - 1)];
}

export function chunkArray<T>(arr: T[], chunkSize: number): T[][] {
	if (chunkSize <= 0) throw new Error("chunkSize가 0보다 커야합니다.");

	const resultArray: T[][] = [];
	for (let i = 0; i < arr.length; i += chunkSize) {
		const chunk = arr.slice(i, i + chunkSize);
		resultArray.push(chunk);
	}
	return resultArray;
}

export function generateRandomHexColor() {
	return "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");
}
