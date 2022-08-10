function PostList({posts}) {
    return (
        <div>
            <h1>Posts</h1>
            {posts.map(post => {
                return (
                    <div key={post.id}><h2>{post.id}-- {post.title}</h2></div>
                )
            })}
        </div>
    );
}

export default PostList;

export async function getStaticProps() {
    const post = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await post.json();
    console.log(data);
    return {
        props: {
            posts: data.slice(0, 3)
        }
    }
}
