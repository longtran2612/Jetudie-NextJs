import useSwr from 'swr'

const fetcher = async () => {
    const response = await fetch('http://localhost:4000/dashboard')
    const data = await response.json()
    return data
}

function DasboardSWR() {
    const { data, error } = useSwr('dashboard', fetcher)
    if(error) return 'error'
    if(!data) return 'loading...'
    
    return <>
     <div>
            <h2>Dashboard</h2>
            <h2>Posts - {data.id}</h2>
            <h2>Likes - {data.title}</h2>
            <h2>Followers - {data.description}</h2>
            <h2>Following - {data.category}</h2>
        </div>

    </>
}

export default DasboardSWR;