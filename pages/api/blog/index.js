export default function handle(req, res) {
    res.statusCode = 200
    res.json({
        message: 'Blog api'
    })
}