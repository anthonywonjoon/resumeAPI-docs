import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { Col, Container, Row } from 'react-bootstrap';
import Documentation from './components/Documentation';
import ApiFrame from './components/ApiFrame';

function App() {
    return (
        <div>
            <Header />
            <Container fluid>
              <Row className="noMargin">
                <Sidebar>
                  <Routes>
                    <Route path="/overview" element={Header} />
                  </Routes>
                </Sidebar>
                <Documentation />
                <ApiFrame />
              </Row>
            </Container>
        </div>
    )
}

export default App;