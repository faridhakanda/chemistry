import React from 'react'
import Link from 'next/link'
const Footer = () => {
  return (
    <div className="bg-slate-950 text-slate-100 p-2 text-center">
        <div>
            <h1>Powered by Farid Akanda.</h1>
            <h1>&copy; All Right Reserved 2024.</h1>
            <Link className="bg-blue-600 p-1 rounded-lg text-slate-100" href="https://github.com/faridhakanda">Connect with github Farid Akanda</Link>
        </div>
    </div>
  )
}

export default Footer