import {CityModel, RegionModel} from "../models/Region.js";

export async function get_all_region(req,res){
    try {
        const regions = await RegionModel.find().populate("cities");
        res.json(regions);
    } catch (err) {
        console.error(err);
        res.status(500).send("Erreur serveur");
    }
}

export async function get_city_by_region(req,res){
    try {
        const regionId = req.params.regionId;
        const region = await RegionModel.findById(regionId).populate("cities");
        if (!region) {
            return res.status(404).send("Région non trouvée");
        }
        res.json(region.cities);
    } catch (err) {
        console.error(err);
        res.status(500).send("Erreur serveur");
    }
}

export async function get_subprefecture(req,res){
    try {
        const cityId = req.params.cityId;
        const city = await CityModel.findById(cityId).populate("subPrefectures");
        if (!city) {
            return res.status(404).send("Ville non trouvée");
        }
        res.json(city.subPrefectures);
    } catch (err) {
        console.error(err);
        res.status(500).send("Erreur serveur");
    }
}