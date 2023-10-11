import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
    return (
        <div>
            <Header />
            <Sidebar>
                <Routes>
                    <Route path="/overview" element={Header} />
                </Routes>
            </Sidebar>
        </div>
    )
}

export default App;