import React, { useState } from "react";

function FunctionForm() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [gen, setGen] = useState("");
	const [CardReg, setCardReg] = useState([
		// { name: "Eric", email: "Eric@gmail.com", gen: 22 },
		// { name: "val", email: "Eric@gmail.com", gen: 4 },
	]);
	const handleSubmit = (e) => {
		e.preventDefault();
		setCardReg(
			[...CardReg, {name, email, gen }],
			setName(" "),
			setEmail(" "),
			setGen(" ")
		);
	};

	return (
		<>
            <div className="container center">
				<h1>Function form</h1>
                <form className="ui form from">
				<div className="two fields">
                     <div className="field">
                        <label>Name</label>
						<input
						type="text"
						name="name"
						value={name}
						onChange={(e) => {
						setName(e.target.value);
						}}
						/>
                    </div> 
                    <div className="field">
                        <label>Email</label>
						<input
						type="text"
						name="email"
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
						/>
                    </div>
                    <div className="field">
                        <label>Gen</label>
						<input
					type="text"
					name="gen"
					value={gen}
					onChange={(e) => {
						setGen(e.target.value);
					}}
					/>
                    </div>
					<button className="ui button blue" onClick={handleSubmit}>Submit</button>
					</div>
                </form>
            </div> 

			{CardReg.map((item, index) => {
				return (


					<row className=" ui container center hover">
                          <table className=" ui  center hover">
							
                            <thead className="ui form two fields">
                                <tr className="ui center hover">
                               
                                </tr>
                            </thead>
                            <tbody>
                            <tr>
                               <td><h4>{item.name}</h4></td> 
                                 <td><h4>{item.email}</h4></td>
                                <td><h4>{item.gen}</h4></td>
                                </tr>
                            </tbody>
                        </table>  
                        </row>
				);
			})}
		</>
	);
}

export default FunctionForm;
