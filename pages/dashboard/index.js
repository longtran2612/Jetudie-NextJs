import { useState, useEffect } from 'react'

export default function Dashboard() {
    const [isLoading, setIsLoading] = useState(true)
    const [dasboardData, setDasboardData] = useState(null)

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('http://localhost:4000/dashboard')
            const data = await response.json()
            setDasboardData(data)
            setIsLoading(false)
        }
        fetchData()
    }, [])

    if(isLoading){
        return <div>Loading...</div>
    }
    return <>
        <h1>Dasboard</h1>
        <h2>id: {dasboardData.id}</h2>
        <h2>title: {dasboardData.title}</h2>
        <h2>description: {dasboardData.description}</h2>
        <h2>category: {dasboardData.category}</h2>
    
    </>
}
