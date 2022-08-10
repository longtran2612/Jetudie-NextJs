

export default function Product({product}) {
  return (
    <div>
        <h1>{product.id}</h1>
        <p>{product.name}</p>
    </div>
);
}
export async function getStaticPaths() {
  const response = await fetch(`http://localhost:4000/products`)
  const data = await response.json()
  const paths = data.map((product) => {
    return {
      params: {
        slug: `${product.id}`,
      }
    }
  })
  return {
    paths,
    fallback: 'blocking',
  }

}

export async function getStaticProps({ params }) {
    const response = await fetch(`http://localhost:4000/products/${params.slug}`);
    const data = await response.json();
    return {
        props: {
        product: data
        },
    };
    }
