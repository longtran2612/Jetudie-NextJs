
export default function handle(req, res){
    res.setPreviewData({})
    res.redirect(req.query.redirect)
}