// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './Header';
import ClassForm from './ClassForm';
import FunctionForm from './functionForm';



function App() {
 
  return (
      <div className="ui container">
        <Header />
       
        <ClassForm /> 
        <br/>
        <br/>
        {/* <FunctionForm /> */}
      </div>
  );
}

export default App;
