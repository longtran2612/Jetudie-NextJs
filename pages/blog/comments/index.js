import { useState } from 'react'

export default function CommentPage() {
    const [isLoading, setIsLoading] = useState(true)
    const [comments, setComments] = useState([])

    async function fetchData() {
        const response = await fetch('/api/comments')
        const data = await response.json()
        setComments(data)
        setIsLoading(false)
    }


return <>
    <div>CommentPage</div>
    <button onClick={fetchData}>load comments</button>
    {isLoading ? <div>Loading...</div> : <div>{comments.map(comment => <div key={comment.id}>{comment.name}</div>)}</div>}
</>
}
