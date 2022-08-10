import React from 'react'

export default function Category({ news, slug }) {
    return <>
        <div>Category</div>
        <h1>${slug}</h1>

        <h1>lisst new </h1>
        {news.map(news => {
            return (
                <div key={news.id}>
                    <h2>{news.title} | {news.description}</h2>
                </div>
            )
        }
        )
        }
    </>
}

export async function getServerSideProps(context) {
    const {params ,req ,res,query} = context
    console.log(req.headers.cookie)
    console.log(query)
    res.setHeader('Set-Cookie', ['name=Long'])
    const {slug} = params
    const response = await fetch(`http://localhost:4000/news?category=${slug}`)
    const data = await response.json()

    return {
        props: {
            news: data,
            slug,
        }
    }
}
