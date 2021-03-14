import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout/Layout'

const Page404 = () => {
  return (
    <Layout>
      <div className='m-6'>
        <h1>OPS!</h1>
        <p>Questa pagina non esiste sul mio blog :(</p>
         <Link to="/">Torna alla home</Link>
      </div>
    </Layout>
  )
}

export default Page404
