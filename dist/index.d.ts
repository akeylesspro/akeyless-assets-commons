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
declare const circlePolygonSvgFun: (color: any) => react_jsx_runtime.JSX.Element;
declare const freeShapePolygonSvgFun: (color: any) => react_jsx_runtime.JSX.Element;
declare const freeShapePolygonSvg: react_jsx_runtime.JSX.Element;
declare const circleDefaultPolygonSvg: react_jsx_runtime.JSX.Element;
declare const freeShapeDefaultPolygonSvg: react_jsx_runtime.JSX.Element;
declare const phoneSvg: react_jsx_runtime.JSX.Element;
declare const userSvg: react_jsx_runtime.JSX.Element;
declare const israelFlagSvg: react_jsx_runtime.JSX.Element;
declare const usFlagSvg: react_jsx_runtime.JSX.Element;
declare const israelFlagSvgFun: (w: any, h: any) => react_jsx_runtime.JSX.Element;
declare const usFlagSvgFun: (w: any, h: any) => react_jsx_runtime.JSX.Element;
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
declare const carPlantDiv: (car_number: any, filter: string, style: any) => react_jsx_runtime.JSX.Element;

export { addPolygonSvg, akeylessLogoSvg, alertSvg, allIcons, asteriskSvg, cameraSvg, carCardSvg, carCutSvg, carMarkerSvg, carPlantDiv, carSvg, carSvg2, changeCoseSvg, circleDefaultPolygonSvg, circlePolygonSvg, circlePolygonSvgFun, cutOnSvg, deleteSvg, editPenSvg, editSvg, endPointSvg, freeShapeDefaultPolygonSvg, freeShapePolygonSvg, freeShapePolygonSvgFun, fullScrenSvg, garbageSvg, garegeModSvg, generateVehicleIconForMenu, getVehiclesIcon, glassSvg, greenVSvg, impersonatImg, infoSvg, infoSvg2, israelFlagSvg, israelFlagSvgFun, mapSvg, menuSvg, moveSvg, openDorsSvg, passwordSvg, phoneSvg, polygonSvg, redXSvg, searchSvg, shrinkScrenSvg, startPointSvg, trashSvg, tripsSvg, usFlagSvg, usFlagSvgFun, userSvg, vibretionSvg, videoHistorySvg, xSvg };
