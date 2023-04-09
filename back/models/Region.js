import mongoose from "mongoose";

const { model, Schema } = mongoose;

const SubPrefectureSchema = new Schema({
    name: { type: String, required: true },
    population: { type: Number, required: true }
});

const CitySchema = new Schema({
    name: { type: String, required: true },
    population: { type: Number, required: true },
    subPrefectures: [{ type: Schema.Types.ObjectId, ref: 'SubPrefecture' }]
});

const RegionSchema = new Schema({
    name: { type: String, required: true },
    cities: [{ type: Schema.Types.ObjectId, ref: 'City' }]
});

export const SubPrefectureModel = model("SubPrefecture", SubPrefectureSchema);
export const CityModel = model("City", CitySchema);
export const RegionModel = model("Region", RegionSchema);
