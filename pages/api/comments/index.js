import { comments } from "../../../data/comments"
export default function handle(req, res) {
    res.statusCode = 200
    res.json(comments)
}