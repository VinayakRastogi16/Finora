import { model } from "mongoose";
import PositionsSchema from "../schemas/PositionsSchema.js";

const PositionModel = new model("position", PositionsSchema);

export default PositionModel;