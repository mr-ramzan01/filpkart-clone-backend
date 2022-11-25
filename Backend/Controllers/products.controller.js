import  products  from '../Models/products.model.js';


async function getProduct(req,res) {
    try {
        console.log(req.query)
        let {category} = req.query;
        let data;
        if(category) {
            console.log("here")
            data = await products.find({category_name: category})
        }
        else {
            data = await products.find();

        }
        if(!data) {
            return res.send(404).send({
                status: 'Error',
                message: "Not Found"
            })
        }
        return res.send({
            status: "Success",
            data: data
        })
    } catch (error) {
        return res.send(500).send({
            status: 'Error',
            message: 'Internal Server Error'
        })
    }
}
async function getProductById(req,res) {
    try {
        let {id} = req.params;
        const data = await products.findById(id);
        if(!data) {
            return res.status(404).send({
                status: 'Error',
                message: "Not Found"
            })
        }
        return res.send({
            status: "Success",
            data: data
        })
    } catch (error) {
        return res.send(500).send({
            status: 'Error',
            message: 'Internal Server Error'
        })
    }
}
async function postProduct(req,res) {
    try {
        const data = await products.create(req.body);
        return res.send({
            status: "Success",
            data: data
        })
        if(!data) {
            return res.status(400).send({
                status: 'Error',
                message: 'Somethng went wrong'
            })
        }
    } catch (error) {
        return res.send(500).send({
            status: 'Error',
            message: 'Internal Server Error'
        })
    }
}


export {getProduct, postProduct, getProductById};