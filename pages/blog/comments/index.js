import { useState } from 'react'

export default function CommentPage() {
    const [isLoading, setIsLoading] = useState(true)
    const [comments, setComments] = useState([])
    const [comment, setComment] = useState([])

    async function fetchData() {
        const response = await fetch('/api/comments')
        const data = await response.json()
        setComments(data)
        setIsLoading(false)
    }
    async function submitComment(e) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ comment }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = response.json()
        console.log(data)
        fetchData()
    }

    async function deleteComment (id)  {
        const response = await fetch(`/api/comments/${id}`, {
            method: 'DELETE',
        })
        const data = response.json()
        console.log(data)
        fetchData()
    }


    return <>
        <div>CommentPage</div>
        <input type='text' value={comment} onChange={(e) => setComment(e.target.value)}></input>
        <button onClick={() => submitComment()}>Submit</button>


        <hr></hr>
        <button onClick={fetchData}>load comments</button>
        {isLoading ? <div>Loading...</div> : <div>{comments.map(comment => <div key={comment.id}>{comment.name}
        <button type='text' onClick={()=> deleteComment(comment.id)}>delete</button>
         </div>)}</div>}
    </>
}
