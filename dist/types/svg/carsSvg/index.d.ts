import { Car, LastLocationCar } from "akeyless-types-commons";
import { VehicleSvg } from "../../types";
export declare const allIcons: {
    car: {
        red: VehicleSvg;
        yellow: VehicleSvg;
        green: VehicleSvg;
        gray: VehicleSvg;
    };
    motorcycle: {
        red: VehicleSvg;
        yellow: VehicleSvg;
        green: VehicleSvg;
        gray: VehicleSvg;
    };
    truck: {
        red: VehicleSvg;
        yellow: VehicleSvg;
        green: VehicleSvg;
        gray: VehicleSvg;
    };
    bus: {
        red: VehicleSvg;
        yellow: VehicleSvg;
        green: VehicleSvg;
        gray: VehicleSvg;
    };
    scooter: {
        red: VehicleSvg;
        yellow: VehicleSvg;
        green: VehicleSvg;
        gray: VehicleSvg;
    };
    bicycle: {
        red: VehicleSvg;
        yellow: VehicleSvg;
        green: VehicleSvg;
        gray: VehicleSvg;
    };
    forklift: {
        red: VehicleSvg;
        yellow: VehicleSvg;
        green: VehicleSvg;
        gray: VehicleSvg;
    };
    crane: {
        red: VehicleSvg;
        yellow: VehicleSvg;
        green: VehicleSvg;
        gray: VehicleSvg;
    };
    jeep: {
        red: VehicleSvg;
        yellow: VehicleSvg;
        green: VehicleSvg;
        gray: VehicleSvg;
    };
};
export declare const getVehiclesIcon: (vehicle: any, isBig: boolean | undefined, sitesData: any) => import("react/jsx-runtime").JSX.Element;
export declare const generateVehicleIconForMenu: (width: string | number, height: string | number, vehicle: Car, locationCar: LastLocationCar) => JSX.Element;
