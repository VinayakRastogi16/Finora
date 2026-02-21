import { model } from "mongoose";

import HoldingSchema from '../schemas/holdingSchema.js';

const HoldingsModel = new model("holding", HoldingSchema);

export default HoldingsModel;