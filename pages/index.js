import React from 'react'
import Link from 'next/link'

export default function index() {
  return (
    <>
    <div>index</div>
    <Link href='/profile'>
      <a>Go to profile</a>
    </Link>
    </>
  )
}
