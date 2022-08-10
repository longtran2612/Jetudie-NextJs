import User from '../../components/user';
function userList({users}) {
    return (<h1>
        User List
        {users.map((user) =>{
            return(<div key={user.id}><User user={user}/></div> )})
        } 
    </h1>);
}

export default userList;

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data);

    return {
        props: {
            users: data
        }
    }
}
