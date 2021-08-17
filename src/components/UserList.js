import React from 'react'

const UserList = ({lists, setLists, removeList,handleEdit}) => {
	return (
	<div >
                  {lists.map((list, i) => {
                    return (
                        <div className="content" key={i}>
			<table>
			<tbody>
			   <tr>
                               <th>Name</th>
                               <th>Email</th> 
                               <th>Gender</th>
			       <th>Age</th>
			       <th>PhoneNumber</th>
                           </tr>
		         <tr>
                            <td>{list.name}</td>
			    <td>{list.email}</td>
			    <td>{list.gender}</td>
			    <td>{list.age} </td>
			    <td>{list.phoneNumber}</td>

			 </tr>
			</tbody>	
			</table>
			 <button 
			 onClick={()=>removeList(i)}
			 >remove
			 </button>
                         <button
			 onClick={()=>handleEdit(i)}
			 >
                         Edit
			 </button>
			 
                        
                         </div>
                        )

                    })}
		</div>
	)
}

export default UserList
