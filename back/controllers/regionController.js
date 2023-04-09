import {get_all_region, get_city_by_region, get_subprefecture} from "../service/regionService.js";

export async function getAllRegion(req, res){
    let response = await get_all_region(req,res);

    console.log(response)
    return response;
}

export async function getCityByRegion(req, res){
    let response = await get_city_by_region(req,res);

    console.log(response)
    return response;
}

export async function getSubprefecture(req, res){
    let response = await get_subprefecture(req,res);

    console.log(response)
    return response;
}