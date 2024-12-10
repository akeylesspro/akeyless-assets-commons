import * as react_jsx_runtime from 'react/jsx-runtime';
import { Car, LastLocationCar } from 'akeyless-types-commons';

type VehicleSvg = (width: string | number, height: string | number, siteColor: string, className: string, viewBoxFor: string) => JSX.Element;

declare const allIcons: {
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
declare const getVehiclesIcon: (vehicle: any, isBig: boolean | undefined, sitesData: any) => react_jsx_runtime.JSX.Element;
declare const generateVehicleIconForMenu: (width: string | number, height: string | number, vehicle: Car, locationCar: LastLocationCar) => JSX.Element;

declare const carMarkerSvg: react_jsx_runtime.JSX.Element;
declare const moveSvg: react_jsx_runtime.JSX.Element;
declare const searchSvg: react_jsx_runtime.JSX.Element;
declare const trashSvg: react_jsx_runtime.JSX.Element;
declare const editPenSvg: react_jsx_runtime.JSX.Element;
declare const impersonatImg: react_jsx_runtime.JSX.Element;
declare const cutOnSvg: react_jsx_runtime.JSX.Element;
declare const openDorsSvg: react_jsx_runtime.JSX.Element;
declare const changeCoseSvg: react_jsx_runtime.JSX.Element;
declare const vibretionSvg: react_jsx_runtime.JSX.Element;
declare const garegeModSvg: react_jsx_runtime.JSX.Element;
declare const asteriskSvg: react_jsx_runtime.JSX.Element;
declare const deleteSvg: react_jsx_runtime.JSX.Element;
declare const tripsSvg: react_jsx_runtime.JSX.Element;
declare const cameraSvg: react_jsx_runtime.JSX.Element;
declare const videoHistorySvg: react_jsx_runtime.JSX.Element;
declare const carCardSvg: react_jsx_runtime.JSX.Element;
declare const infoSvg: react_jsx_runtime.JSX.Element;
declare const infoSvg2: react_jsx_runtime.JSX.Element;
declare const redXSvg: react_jsx_runtime.JSX.Element;
declare const greenVSvg: react_jsx_runtime.JSX.Element;
declare const garbageSvg: react_jsx_runtime.JSX.Element;
declare const editSvg: react_jsx_runtime.JSX.Element;
declare const addPolygonSvg: react_jsx_runtime.JSX.Element;
declare const circlePolygonSvg: react_jsx_runtime.JSX.Element;
declare const circlePolygonSvgFun: (color: string) => react_jsx_runtime.JSX.Element;
declare const freeShapePolygonSvgFun: (color: string) => react_jsx_runtime.JSX.Element;
declare const freeShapePolygonSvg: react_jsx_runtime.JSX.Element;
declare const circleDefaultPolygonSvg: react_jsx_runtime.JSX.Element;
declare const freeShapeDefaultPolygonSvg: react_jsx_runtime.JSX.Element;
declare const phoneSvg: react_jsx_runtime.JSX.Element;
declare const userSvg: react_jsx_runtime.JSX.Element;
declare const israelFlagSvg: react_jsx_runtime.JSX.Element;
declare const usFlagSvg: react_jsx_runtime.JSX.Element;
declare const israelFlagSvgFun: (w?: number, h?: number) => react_jsx_runtime.JSX.Element;
declare const usFlagSvgFun: (w?: number, h?: number) => react_jsx_runtime.JSX.Element;
declare const xSvg: react_jsx_runtime.JSX.Element;
declare const shrinkScrenSvg: react_jsx_runtime.JSX.Element;
declare const fullScrenSvg: react_jsx_runtime.JSX.Element;
declare const passwordSvg: react_jsx_runtime.JSX.Element;
declare const alertSvg: react_jsx_runtime.JSX.Element;
declare const mapSvg: react_jsx_runtime.JSX.Element;
declare const polygonSvg: react_jsx_runtime.JSX.Element;
declare const carSvg: react_jsx_runtime.JSX.Element;
declare const carCutSvg: react_jsx_runtime.JSX.Element;
declare const carSvg2: react_jsx_runtime.JSX.Element;
declare const glassSvg: react_jsx_runtime.JSX.Element;
declare const akeylessLogoSvg: react_jsx_runtime.JSX.Element;
declare const menuSvg: react_jsx_runtime.JSX.Element;
declare const endPointSvg: react_jsx_runtime.JSX.Element;
declare const startPointSvg: react_jsx_runtime.JSX.Element;
type CarPlantDiv = (car_number: string, filter?: string, style?: React.CSSProperties) => JSX.Element;
declare const carPlantDiv: CarPlantDiv;

declare const bellIco: react_jsx_runtime.JSX.Element;
declare const low_fuel_levelSvg: react_jsx_runtime.JSX.Element;
declare const batterySvg: react_jsx_runtime.JSX.Element;
declare const low_airSvg: react_jsx_runtime.JSX.Element;
declare const absSvg: react_jsx_runtime.JSX.Element;
declare const air_bagSvg: react_jsx_runtime.JSX.Element;
declare const check_engineSvg: react_jsx_runtime.JSX.Element;
declare const low_battery_level_svg: react_jsx_runtime.JSX.Element;
declare const charging_icon: react_jsx_runtime.JSX.Element;
declare const site_low_fuel_levelSvg: react_jsx_runtime.JSX.Element;
declare const site_batterySvg: react_jsx_runtime.JSX.Element;
declare const site_low_airSvg: react_jsx_runtime.JSX.Element;
declare const site_absSvg: react_jsx_runtime.JSX.Element;
declare const site_air_bagSvg: react_jsx_runtime.JSX.Element;
declare const site_check_engineSvg: react_jsx_runtime.JSX.Element;
declare const site_low_battery_level_svg: react_jsx_runtime.JSX.Element;
declare const site_charging_icon: react_jsx_runtime.JSX.Element;

export { absSvg, addPolygonSvg, air_bagSvg, akeylessLogoSvg, alertSvg, allIcons, asteriskSvg, batterySvg, bellIco, cameraSvg, carCardSvg, carCutSvg, carMarkerSvg, carPlantDiv, carSvg, carSvg2, changeCoseSvg, charging_icon, check_engineSvg, circleDefaultPolygonSvg, circlePolygonSvg, circlePolygonSvgFun, cutOnSvg, deleteSvg, editPenSvg, editSvg, endPointSvg, freeShapeDefaultPolygonSvg, freeShapePolygonSvg, freeShapePolygonSvgFun, fullScrenSvg, garbageSvg, garegeModSvg, generateVehicleIconForMenu, getVehiclesIcon, glassSvg, greenVSvg, impersonatImg, infoSvg, infoSvg2, israelFlagSvg, israelFlagSvgFun, low_airSvg, low_battery_level_svg, low_fuel_levelSvg, mapSvg, menuSvg, moveSvg, openDorsSvg, passwordSvg, phoneSvg, polygonSvg, redXSvg, searchSvg, shrinkScrenSvg, site_absSvg, site_air_bagSvg, site_batterySvg, site_charging_icon, site_check_engineSvg, site_low_airSvg, site_low_battery_level_svg, site_low_fuel_levelSvg, startPointSvg, trashSvg, tripsSvg, usFlagSvg, usFlagSvgFun, userSvg, vibretionSvg, videoHistorySvg, xSvg };
