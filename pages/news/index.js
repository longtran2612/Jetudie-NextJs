import React from 'react'

export default function News({ news }) {
    return <>
        <div>Lisst new</div>
        {
            news.map(news => {
                return (
                    <div key={news.id}>
                        <h2>{news.title} |  {news.description}</h2>
                       
                    </div>
                )
            })}
    </>
}

export async function getServerSideProps() {
    const response = await fetch('http://localhost:4000/news')
    const data = await response.json()

    return {
        props: {
            news: data
        }
    }

}