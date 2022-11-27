import jwt  from "jsonwebtoken";
import cartItemModel from "../Models/cartItem.model.js"

const getItems = async(req,res) => {
    try {
        const token = localStorage.getItem('flipkartToken'); // take token from localStorage
        const decode = jwt.verify(token,process.env.JWT_SECRET_KEY); // verify token
        const { _id} = decode; // get user
        const cartItems = await cartItemModel.find({userId: _id}); // get cart items
        return res.status(200).send(cartItems); 
    } catch (error) {
        return res.status(500).send({
            status: 'error',
            error: 'Server Error'
        })
    }
    
} 

const addItem = async (req, res)=> {
    const token = localStorage.getItem('flipkartToken'); // take token from localStorage
    const decode = jwt.verify(token,process.env.JWT_SECRET_KEY); // verify token
    const { _id} = decode; // get user
    const body = {...req.body,userId:_id}; // get body
    try {
        const cartItem = await cartItemModel.create(body);
        return res.send({
            "message": "Added cart item successfully",
        });
    } catch (error) {
        return res.status(500).send({
            status: 'error',
            error: 'Server Error'
        })
    }

}

const updateItem = async (req, res)=> {
    try {
        const token = localStorage.getItem('flipkartToken'); // take token from localStorage
        const decode = jwt.verify(token,process.env.JWT_SECRET_KEY); // verify token
        const updatedCartItem = await cartItemModel.findByIdAndUpdate(req.query.id, req.body, {new: true});
        res.send(updatedCartItem);
    } catch (error) {
        return res.status(500).send({
            status: 'error',
            error: 'Server Error'
        })
    }
}

const deleteItem = async (req, res)=> {
    try {
        const token = localStorage.getItem('flipkartToken'); // take token from localStorage
        const decode = jwt.verify(token,process.env.JWT_SECRET_KEY); // verify token
        const deletedCartItem = await cartItemModel.findByIdAndDelete(req.query.id);
        res.send({
            "message": "Delete cart item successfully"
        });
    } catch (error) {
        return res.status(500).send({
            status: 'error',
            error: 'Server Error'
        })
    }
}

export {getItems,deleteItem,updateItem,addItem}