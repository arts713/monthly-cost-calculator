import * as React from "react";

import Header from "./components/Header";
import Summator from "./components/Summator";
import Layout from "./core/Layout";

function App() {
    return (
        <>
            <Header />
            <Layout>
                <main>
                    <div className="container">
                        <Summator />
                    </div>
                </main>
            </Layout>
        </>
    );
}

export default App;
