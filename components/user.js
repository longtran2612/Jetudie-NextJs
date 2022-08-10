function User({user}) {
    return (<h1>
        <div key={user.id}>{user.name} --{user.email}</div>
    </h1>);
}
export default User;