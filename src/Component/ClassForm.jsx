import React from "react";
import { Component } from "react";

class ClassForm extends Component{
    constructor(props){
        super();
        this.state={
            students:[
                // {name:"Nicholas",email :"baniicofori@gmail.com",gen :22},
              
                // {name:"Herbert",email :"baniicofori@gmail.com",gen :22}
            ],
            
        };
    }
    cancelCourse = () => { 
        this.myFormRef.reset();
      }
      
    handleRegister=(e)=>{
        e.preventDefault();
        this.setState({[e.target.name]:e.target.value});
        
    };
    handelSubmit = (e)=>{
      e.preventDefault();
      this.cancelCourse();
      this.setState({
    
        students:[
             ...this.state.students,
             {name:this.state.name,email:this.state.email, mobileNo:this.state.mobileNo,address:this.state.address, city:this.state.city},
          
        ],
    } );
    
    };
        render(){
            return(
            <>
            <form>
            {/* <h1>Register</h1> */}
            <div className="container center">
                <h2 className="">Class Form</h2>
                <form  className="ui form" ref={(el) => this.myFormRef = el}>
                    <div className="two fields">
                    <div className="field">
                        <label>Fullname</label>
                        <input type="text" name="name"
                         placeholder="Name"
                          value={this.state.students.name}
                        onChange={this.handleRegister} />
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="text" name="email" placeholder="Email goes here"value={this.state.students.email}
                                onChange={this.handleRegister} />
                    </div>
                    <div className="field">
                        <label>Gen</label>
                        <input type="text" name="mobileNo" placeholder="mobileNo"value={this.state.students.mobileNo}
                                onChange={this.handleRegister} />
                    </div>
                    <div className="field">
                        <label>Address</label>
                        <input type="text" name="address" placeholder="Your address goes here"value={this.state.students.address}
                                onChange={this.handleRegister} />
                    </div>
                    <div className="field">
                        <label>City</label>
                        <input type="text" name="city" placeholder="Your current city goes here"value={this.state.students.city}
                                onChange={this.handleRegister} />
                    </div>
                    </div>
                    <button className="ui button blue" onClick={this.handelSubmit}>Add</button>
                </form>
            </div> 
           </form>
           <br />
           <hr />
           {this.state.students.map((student,index)=>{
                return(
                    <div key={index}>
                        <row className=" ui container center hover">
                          <table className=" ui  center hover">
                            <thead className="ui form two fields">
                                <tr className="ui center hover">
                                </tr>
                            </thead>
                            <tbody style={{textAlign:"left"}}>
                            <tr>
                                <td><h4>{student.name}</h4></td> 
                                <td><h4>{student.email}</h4></td>
                                <td><h4>{student.mobileNo}</h4></td>
                                <td><h4>{student.address}</h4></td>
                                <td><h4>{student.city}</h4></td>
                                </tr>
                            </tbody>
                        </table>  
                        </row>
                    </div>
                );
           })}
            </>
            );
        }
    }
    export default ClassForm;
