import React,{useState, useEffect} from 'react'

const UserForm = ({edit, addList, updatelist}) => {
	const initialState = {
		name: '',
		email: '',
		age: '',
		gender: '',
		phoneNumber: '',
	}
	const [data, setData] = useState(initialState)

	const handleData = ({ target }) => {
		const { name: key, value } = target
		setData({
			...data,
			[key]: value,
		})
	}

	const handleSubmit=(e)=>{
		e.preventDefault()
               if(!edit) {
		      addList(data)
	       } else {
		updatelist(edit.index, data)
	       }

	       setData(initialState)
              
	}
	
	 useEffect(() => {
           if(edit){
		setData(edit);
		
	   }
	
	 }, [edit])
	return (
		<div className="main"> 
		   <form className="input-form" onSubmit={handleSubmit} >
		     <div className="name-input">
			<label>Name: </label>
		        <input
			  value={data.name}
			  type="text"
			  name="name"
			  placeholder="Enter your name"
			  onChange={handleData}
			/>	     
		     </div>
		      <div className="email-input">
			<label>Email: </label>
		        <input
			  value={data.email}
			  type="text"
			  name="email"
			  placeholder="Enter your email"
			  onChange={handleData}
			/>	     
		     </div>
		     <div className="age-input">
			<label>Age: </label>
		        <input
			  value={data.age}
			  type="text"
			  name="age"
                          placeholder="Enter your Age"
			  onChange={handleData}
			/>	   
		     </div>
		      <div className="phone-input">
			<label>Phone No: </label>
		        <input
			  value={data.phoneNumber}
			  type="text"
			  name="phoneNumber"
                          placeholder="Enter your Age"
			  onChange={handleData}
			/>	   
		     </div>
		    <div className="gender-input">
			<label>Gender: </label>
			<input
			  value={data.gender}
			  type="text"
			  name="gender"
                          placeholder="Enter your Gender"
			  onChange={handleData}
			/>
		     
		     </div>
		     <button
		     type="submit"
		     className="btn"
		     >
                     Submit
		     </button>

		   </form>
		</div>
	)
}

export default UserForm
