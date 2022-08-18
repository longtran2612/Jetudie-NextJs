function Products({products}){
    return(
        <div>
        <h1>products</h1>
        {products.map(product => {
            return (
                <div key={product.id}><h2>{product.name}-- {product.price}</h2></div>
            )
        })}
    </div>
    )
    
}
export default Products;

export async function getStaticProps(context) {
    console.log('getStaticProps');
    const response = await fetch('http://localhost:4000/products')
    const data = await response.json()
    return {
        props: {
            products:data
        },
        revalidate: 10,
    }
}