
const errorhandler = (req,res,next)=>{
    try {
        next()
    } catch (error) {
        console.log(error)
    }
}

export { errorhandler }