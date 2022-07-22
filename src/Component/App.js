// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import ClassForm from './ClassForm';
import FunctionForm from './functionForm';



function App() {
  // const contacts =[

  //   {
  //     id:"1",
  //     name:"Nicholas",
  //     email:"baniicofori@gmail.com",
  //   },
  //   {
  //     id:"2",
  //     name:"Margaret",
  //     email:"missadwoaa@gmail.com",
  //   },
  //   {
  //     id:"3",
  //     name:"Herbert",
  //     email:"herberto@gmail.com",
  //   },
  // ] 
  return (
      <div className="ui container">
        {/* <Header /> */}
        {/* <AddContact />
        <ContactList contacts={contacts} />*/}
        <ClassForm /> 
        <br/>
        <br/>
        <FunctionForm />
      </div>
  );
}

export default App;
