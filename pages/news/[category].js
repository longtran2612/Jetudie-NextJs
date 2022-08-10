import React from 'react'

export default function Category({ news, category }) {
    return <>
        <div>Category</div>
        <h1>${category}</h1>

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

export async function getServerSideProps({ params }) {
    const category = params.category
    const response = await fetch(`http://localhost:4000/news?category=${category}`)
    const data = await response.json()

    return {
        props: {
            news: data,
            category,
        }
    }
}
