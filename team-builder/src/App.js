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

      setMemberToEdit( {
         ...memberToEdit,
         name :  document.getElementById("name-value").innerHTML.toString(),
         email : document.getElementById("email-value").innerHTML.toString(),
         role : document.getElementById("role-value").innerHTML.toString()
       } )
      console.log(memberToEdit);
   }
   //--------------------------------------------------------

  // SET THE CURRENT OBJECT TO THE STATE OF THE ENTIRE LISTER
  // THIS IS PASSED INTO FORM.JS
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
