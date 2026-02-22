import { model } from "mongoose";
import OrdersSchema from "../schemas/OrdersSchema.js"

const OrdersModel = new model("order", OrdersSchema);

export default OrdersModel;