import React from 'react'

export default function blog({user,password}) {
  
  return (
    <div>

      <h1>{user} --  {password}</h1>
    </div>
  )
}

export async function getServerSideProps(context) {
  const user = process.env.DB_USER 
  const password = process.env.DB_PASSWORD
  console.log(user, password)
  return {
    props: {
      user: user,
      password: password
  }
}
}
