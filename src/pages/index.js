import React from "react"
import Layout from '../components/layout';
import Folio from '../components/folio';

export default function Home() {
  return (
    <div>
      <Layout>
        <Folio />
        <Folio />
      </Layout>
    </div>
  )
}

export default Home;