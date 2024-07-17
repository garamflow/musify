import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

// await sleep(1000)
export const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));
