import React from "react";


class AddContact extends React.Component{
    render(){
        return(
            <div className="ui container center">
                <h2 className="ui dividing header">Add Contact</h2>
                <form className="ui form">
                    <div className="two fields">
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name"/>
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="text" name="email" placeholder="Email"/>
                    </div>
                    </div>
                    <button className="ui button blue">Add</button>
                </form>
            </div> 
        );
    }
}
export default AddContact;