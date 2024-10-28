import { grayCraneIcon, greenCraneIcon } from "./cranes2";
import { redCraneIcon, yellowCraneIcon } from "./cranes1";
import { grayBusIcon, greenBusIcon, redBusIcon, yellowBusIcon } from "./buss";
import { grayCarIcon, greenCarIcon, redCarIcon, yellowCarIcon } from "./cars";
import { grayJeepIcon, greenJeepIcon, redJeepIcon, yellowJeepIcon } from "./jeeps";
import { grayTruckIcon, greenTruckIcon, redTruckIcon, yellowTruckIcon } from "./trucks";
import { grayScooterIcon, greenScooterIcon, redScooterIcon, yellowScooterIcon } from "./scooters";
import { grayBicycleIcon, greenBicycleIcon, redBicycleIcon, yellowBicycleIcon } from "./bicycles";
import { grayForkliftIcon, greenForkliftIcon, redForkliftIcon, yellowForkliftIcon } from "./forklifts";
import { grayMotorcycleIcon, greenMotorcycleIcon, redMotorcycleIcon, yellowMotorcycleIcon } from "./motorcycles";
import { Car, LastLocationCar } from "akeyless-types-commons";
import { VehicleSvg } from "../../types";
import { calculateBearing } from "../../helpers";
export const allIcons = {
    car: {
        red: redCarIcon,
        yellow: yellowCarIcon,
        green: greenCarIcon,
        gray: grayCarIcon,
    },
    motorcycle: {
        red: redMotorcycleIcon,
        yellow: yellowMotorcycleIcon,
        green: greenMotorcycleIcon,
        gray: grayMotorcycleIcon,
    },
    truck: {
        red: redTruckIcon,
        yellow: yellowTruckIcon,
        green: greenTruckIcon,
        gray: grayTruckIcon,
    },
    bus: {
        red: redBusIcon,
        yellow: yellowBusIcon,
        green: greenBusIcon,
        gray: grayBusIcon,
    },
    scooter: {
        red: redScooterIcon,
        yellow: yellowScooterIcon,
        green: greenScooterIcon,
        gray: grayScooterIcon,
    },
    bicycle: {
        red: redBicycleIcon,
        yellow: yellowBicycleIcon,
        green: greenBicycleIcon,
        gray: grayBicycleIcon,
    },
    forklift: {
        red: redForkliftIcon,
        yellow: yellowForkliftIcon,
        green: greenForkliftIcon,
        gray: grayForkliftIcon,
    },
    crane: {
        red: redCraneIcon,
        yellow: yellowCraneIcon,
        green: greenCraneIcon,
        gray: grayCraneIcon,
    },
    jeep: {
        red: redJeepIcon,
        yellow: yellowJeepIcon,
        green: greenJeepIcon,
        gray: grayJeepIcon,
    },
};
const pointerSvg = (size: string, filColor: string, className: string, degrees: string | number) => {
    const is_big = className === "newBigIconCar";
    const svgSize = is_big ? `${Number(size) + 65}` : `${Number(size) + 50}`;
    return (
        <svg
            className={className + "C"}
            style={{ transform: `rotate(${degrees}deg)` }}
            width={svgSize}
            height={svgSize}
            viewBox="0 0 70 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M69.3982 52.949C70.6199 36.6096 60.2209 22.0941 45.1882 17.4981C41.8335 11.1835 38.0595 1.14696 36.4972 0.869719C34.7777 0.575531 28.0567 13.2921 25.4317 17.3607C12.0749 21.2671 1.88731 33.1143 0.788044 47.8161C-0.630031 66.7666 13.583 83.2715 32.5335 84.6896C51.4839 86.1077 67.9889 71.8947 69.407 52.9442L69.3982 52.949ZM33.0594 77.4939C18.0838 76.3728 6.85383 63.3224 7.97498 48.3468C9.09612 33.3713 22.1465 22.1413 37.1221 23.2624C52.0976 24.3836 63.3276 37.434 62.2065 52.4095C61.0853 67.3851 48.0349 78.6151 33.0594 77.4939Z"
                fill={filColor}
            />
        </svg>
    );
};
export const getVehiclesIcon = (vehicle: any, isBig: boolean | undefined, sitesData: any) => {
    // get custom inon
    if (vehicle === undefined || isBig === undefined) {
        return <></>;
    }
    const iconType = vehicle.icon;
    const isUndefined = vehicle.ign === undefined || vehicle.spd === undefined;
    const iconColor = isUndefined ? "gray" : vehicle?.ign == 0 ? "red" : vehicle?.spd != 0 ? "green" : "yellow";
    const icon = allIcons[iconType || "car"][iconColor];
    // set args values
    const degrees = calculateBearing(vehicle?.prev_lat, vehicle?.prev_lng, vehicle?.lat, vehicle?.lng);
    const currentSite = sitesData.find((s: any) => s.cars.includes(vehicle?.car_number));
    const siteColor = currentSite?.color;
    const className = isBig ? "newBigIconCar" : "newIconCar";
    const size = isBig ? "100" : "30";
    const viewBoxFor = "map_icon";
    // returning the icon
    return (
        <>
            {pointerSvg(size, siteColor, className, degrees)}
            {icon(size, size, siteColor, className, viewBoxFor)}
        </>
    );
};
export const generateVehicleIconForMenu = (width: string | number, height: string | number, vehicle: Car, locationCar: LastLocationCar) => {
    const iconType = vehicle?.icon;
    let isUndefined: boolean;
    if (locationCar) {
        isUndefined = locationCar.ign === undefined || locationCar.spd === undefined;
    } else {
        isUndefined = true;
    }
    const viewBoxFor = "menu_icon";
    const iconColor = isUndefined ? "gray" : locationCar?.ign == 0 ? "red" : locationCar?.spd != 0 ? "green" : "yellow";
    const icon: VehicleSvg = allIcons[iconType || "car"][iconColor];
    if (!vehicle) {
    }
    return vehicle ? icon(width, height, undefined, "menu_vehicle_icon", viewBoxFor) : <>{"N/A"}</>;
};
