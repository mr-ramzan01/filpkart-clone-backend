import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
    category_id: {
        typeof: Number,
        required: true
    },
    category_name: {
        typeof: String,
        required: true
    },
    image: {
        typeof: String,
        required: true
    },
    description: {
        typeof: String,
        required: true
    },
    stars: {
        typeof: Number,
        required: true
    },
    ratings: {
        typeof: String,
        required: true
    },
    reviews: {
        typeof: String,
        required: true
    },
    warranty: {
        typeof: String,
        required: true
    },
    new_price: {
        typeof: Number,
        required: true
    },
    old_price: {
        typeof: Number,
        required: true
    },
    discount: {
        typeof: Number,
        required: true
    },
    delivery_type: {
        typeof: String,
        required: true
    },
    offer: {
        typeof: String,
        required: true
    },
    offer2: {
        typeof: String,
        required: true
    },
    hidden_stars: {
        typeof: Number,
        required: true
    },
    item_id: {
        typeof: Number,
        required: true
    },
    quantity: {
        typeof: Number,
        required: true
    },
    size: {
        typeof: String,
        required: true
    }
},{
    versionKey: false,
    timeseries: true
})


export const products = mongoose.model('products', productsSchema);

