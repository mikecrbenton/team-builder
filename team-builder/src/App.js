import React, { useState }  from 'react';
import Form from './Form';
import DisplayMembers from './DisplayMembers';
import './App.css';

function App() {

   // SET STATE OF THE FIRST OBJECT IN THE LIST IN TOP LEVEL
   const [teamList, setTeamList] = useState(   [
    { name : "Mike Benton",
      email : "mikecrbenton@gmail.com",
      role : "Web Development Student" 
    } ] );


   // EDIT FUNCTIONALITY ( STRETCH GOAL )---------------------
   const [memberToEdit, setMemberToEdit] = useState([{
      name : "Mike Benton",
      email : "mikecrbenton@gmail.com",
      role : "Web Development Student" 
    }]
   )
   const editMember = () => {
      // try e.target.value 
      setMemberToEdit( {
         ...memberToEdit,
         name :  document.getElementById("name-value").innerHTML.toString(),
         email : document.getElementById("email-value").innerHTML.toString(),
         role : document.getElementById("role-value").innerHTML.toString()
       } )
      console.log(memberToEdit);
   }
   //--------------------------------------------------------

 
  // SET TEAM LIST IS AN ARRAY OF OBJECTS - ...SPREAD THE ALREADY
  // EXISTING OBJECTS AND ADD THE NEWEST OBJECT
  const addMember = ( member ) => {
     setTeamList( [...teamList, member ] )
  }  
 
  return (
    <div className="App">
       <Form  addMember={addMember} setMemberToEdit={memberToEdit}/>
       <DisplayMembers teamList={teamList} editMember={editMember}/> 
    </div>
  );
}

export default App;
