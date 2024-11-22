function errors (err,req,res,next){
    res.status(500)
    res.json({
        message : "Page 500 Errors, qualcosa é andato storto"
    })
}

module.exports = errors