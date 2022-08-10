import { useRouter } from 'next/router';

function Post({ post }) {
    const router = useRouter();
    const { slug } = router.query;
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <p>{slug}</p>
        </div>
    );

}
export default Post;

export async function getStaticProps(context) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
    const data = await response.json();
    return {
        props: {
            post: data
        },
    };
}

export async function getStaticPaths() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    const paths = data.map((post) => {
        return {
            params: {
                slug: `${post.id}`,
            }
        }

    })
    return {
        paths,
        fallback: false,
    }
}