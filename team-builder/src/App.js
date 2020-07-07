import React, { useState }  from 'react';
import Form from './Form';
import DisplayMembers from './DisplayMembers';
import './App.css';

function App() {

   // SET STATE OF THE OBJECT IN TOP LEVEL
   const [teamList, setTeamList] = useState(   [
    { name : "Mike Benton",
      email : "mikecrbenton@gmail.com",
      role : "Web Development Student" 
    } ] );

   // EDIT FUNCTIONALITY ( STRETCH GOAL )---------------------
   const [memberToEdit, setMemberToEdit] = useState(
      { name : "",
        email : "",
        role : "" 
    }
   )
   const editMember = ( e ) => {
      console.log(e.target.name)
      setMemberToEdit( {
         ...memberToEdit,
         [e.target.name]: e.target.value
      } )
      console.log(memberToEdit);
   }
   //--------------------------------------------------------

  // SET THE CURRENT OBJECT TO THE STATE OF THE ENTIRE LISTER
  // THIS IS PASSED INTO FORM.JS
  const addMember = ( member ) => {
     setTeamList( [...teamList, member ] )
  }  
  //****************I took teamList={teamList} out of Form 7/7/20 erase this if I didn't need it */
  return (
    <div className="App">
       <Form  addMember={addMember} setMemberToEdit={memberToEdit}/>
       <DisplayMembers teamList={teamList} editMember={editMember}/> 
    </div>
  );
}

export default App;
