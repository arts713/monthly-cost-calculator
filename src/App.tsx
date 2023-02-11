import React from 'react';

import Header from './components/Header';
import Summator from './components/Summator';
import Layout from './core/Layout';




function App() {
  return (
    <>
      <Layout>
        <Header />
        <main>
          <Summator />
        </main>
      </Layout>
    </>
  );
}

export default App;

