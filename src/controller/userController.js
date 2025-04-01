module.exports={
    activity(req, res){
        const texto = req.body.texto;
        
        return res.json({Mensaje: texto})
    } 
}