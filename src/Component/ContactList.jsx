import React from "react";
import App from "./App";
import ContactCard from './ContactCard';

const ContactList = (props) => {
    console.log(props);
    // return(
    //     <div className="ui celled list">Contact List</div>
    // );

     const renderContactList = props.contacts.map((contacts)=>{
        
        return <ContactCard contacts={contacts}></ContactCard>;
       
     });

      return <div className="ui celled list">{renderContactList}</div>;

};
export default ContactList;