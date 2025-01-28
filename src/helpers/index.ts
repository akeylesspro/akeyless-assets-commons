import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const formatCarNumber = (car_number: string) => {
    var cn = car_number;
    if (cn?.length == 8) return `${cn[0]}${cn[1]}${cn[2]}-${cn[3]}${cn[4]}-${cn[5]}${cn[6]}${cn[7]}`;
    if (cn?.length == 7) return `${cn[0]}${cn[1]}-${cn[2]}${cn[3]}${cn[4]}-${cn[5]}${cn[6]}`;
    if (cn?.length == 6) return `${cn[0]}${cn[1]}-${cn[2]}${cn[3]}-${cn[4]}${cn[5]}`;
    if (cn?.length == 5) return `${cn[0]}-${cn[1]}${cn[2]}-${cn[3]}${cn[4]}`;
    return cn;
};
export const calculateBearing = (startLat, startLng, endLat, endLng) => {
    if (startLat === endLat || startLng === endLng) {
        return 0;
    }
    if (startLat === undefined || startLng === undefined || endLat === undefined || endLng === undefined) {
        return 0;
    }
    const startLatRad = (startLat * Math.PI) / 180;
    const startLngRad = (startLng * Math.PI) / 180;
    const endLatRad = (endLat * Math.PI) / 180;
    const endLngRad = (endLng * Math.PI) / 180;

    const dLon = endLngRad - startLngRad;
    const y = Math.sin(dLon) * Math.cos(endLatRad);
    const x = Math.cos(startLatRad) * Math.sin(endLatRad) - Math.sin(startLatRad) * Math.cos(endLatRad) * Math.cos(dLon);
    const bearing = (Math.atan2(y, x) * 180) / Math.PI;

    return (bearing + 360) % 360;
};

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
