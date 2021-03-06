import React from 'react';
import './App.css';
import Cafe from "./components/cafe";
import CafeFunctional from "./components/cafe-functional";

function App() {
  return (
    <div className="App">
      <p>{new Date().toLocaleString()}</p>
      <p>
        Changes in branch master
      </p>
      <br/>
      <hr/>
      <p>
        Changes in branch test
      </p>
      <Cafe
        name="React cafe"
        menu={[
          'Coffee',
          'Tea',
          'Bread',
          'Butter',
          'Honey',
          'Ice-cream'
        ]}
      />
      <CafeFunctional
        name="React cafe functional"
        menu={[
          'Coffee',
          'Tea',
          'Bread',
          'Butter',
          'Honey',
          'Ice-cream'
        ]}
      />
    </div>
  );
}

export default App;
