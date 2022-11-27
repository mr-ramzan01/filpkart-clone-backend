
import addressModel from "../Models/address.model.js"

const postaddress = async (req, res)=> {

    const body = req.body;
    const { Name, Number, Email, Address, Pincode, City, State   } = body
    try {
        const { id} = req.params; // get user
       const address =  await addressModel.create({ Name, Number, Email, Address, Pincode, City, State , userId:id });
       console.log(address)
        return res.send({
            "message": "Address successfully save",
        });
    } catch (error) {
        return res.status(500).send({
            status: 'error',
            error: 'Server Error'
        })
    }

}
const getaddress = async(req,res) => {
    try {
        const { id} = req.params; 
        const address = await addressModel.find({userId: id}); // get cart items
        return res.status(200).send(address); 
    } catch (error) {
        return res.status(500).send({
            status: 'error',
            error: 'Server Error'
        })
    }
    
} 

const updateAdress = async (req, res)=> {
    try {
        const updatedAdress = await addressModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.send(updatedAdress);
    } catch (error) {
        return res.status(500).send({
            status: 'error',
            error: 'Server Error'
        })
    }
}




export  {postaddress,getaddress,updateAdress}
