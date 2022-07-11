// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';



function App() {
  const contacts =[

    {
      id:"1",
      name:"Nicholas",
      email:"baniicofori@gmail.com",
    },
    {
      id:"2",
      name:"Magaret",
      email:"missadwoaa@gmail.com",
    },
    {
      id:"3",
      name:"Herbert",
      email:"herberto@gmail.com",
    },
  ] 
  return (
      <div className="ui container">
        <Header />
        <AddContact />
        <ContactList contacts={contacts} />
      </div>
  );
}

export default App;
