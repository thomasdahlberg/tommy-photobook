import React, { Component } from "react";
import Layout from '../components/layout';
import Folio from '../components/folio';

class Home extends Component () {
  render() {
    return (
      <div>
        <Layout>
          <Folio />
          <Folio />
        </Layout>
      </div>
    )
  }
}

export default Home;