import React from 'react';
import SortingVisualizer from './SortingVisualizer/SortingVisualizer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.scss';
import {Nav, Navbar} from 'react-bootstrap';

function App() {
  return (
    <div>
      <Navbar bg="primary" expand="lg">
        <Nav justify variant="tabs" defaultActiveKey="#">
          <Nav.Item>
            <Nav.Link href="#">Sorting Algorithms Visualizer</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="https://johnoh26.github.io/pathfinding/">
              Go To Pathfinding Visualizer
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="https://www.john-oh.com">
              Check Out Other Cool Projects
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>

      <div className="App">
        <SortingVisualizer></SortingVisualizer>
      </div>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
        crossOrigin="anonymous"
      />
    </div>
  );
}

export default App;
