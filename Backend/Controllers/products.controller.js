import { products } from '../Models/products.model';


async function getProduct(req,res) {
    try {
        const data = await products.find();
        return res.send({
            status: "Success",
            data: data
        })
    } catch (error) {
        return res.send(500).send({
            status: 'Error',
            data: 'Internal Server Error'
        })
    }
}


export {getProduct};