import {add_category, get_all_category} from "../service/categoryService.js";


export async function addCategory(req, res){
    let response = await add_category(req,res);

    console.log(response)
    return response;
}


export async function getAllCategory(req, res){
    let response = await get_all_category(req,res);

    console.log(response)
    return response;
}
