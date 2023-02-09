import React from 'react';

import Header from './components/Header';
import Layout from './core/Layout';



const List = () => {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  );
}

function App() {
  return (
    <>
      <Layout>
        <Header />
        <main>
          <div>Sum: 100</div>
          <input />
          <button>Add</button>
          <List />
        </main>
      </Layout>
    </>
  );
}

export default App;
