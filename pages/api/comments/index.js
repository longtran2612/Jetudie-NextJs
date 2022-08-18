import { comments } from "../../../data/comments"
export default function handle(req, res) {
    if(req.method === 'GET') {
    res.statusCode = 200
    res.json(comments)
    }
    if(req.method === 'POST') {
        const comment = req.body.comment
        const newComment = {
            id: comments.length + 1,
            name: comment
        }
        comments.push(newComment)
        res.statusCode = 201
        res.json(comments)
    }
}
