import { comments } from "../../../data/comments"
export default function handle(req, res) {
    const {slug}= req.query
    if(req.method === 'GET') {

    const comment = comments.find((comment) => comment.id === parseInt(slug))
    res.statusCode = 200
    res.json(comment) 
    }
    if(req.method === 'DELETE') {
        const comment = comments.find((comment) => comment.id === parseInt(slug))
        const index = comments.findIndex((comment)=> comment.id === parseInt(slug))

        comments.splice(index, 1)
        res.statusCode = 200
        res.json(comment) 
    }
}