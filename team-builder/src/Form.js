import React, { useState, useEffect }  from 'react';
import styled from 'styled-components';
//import DisplayMembers from './DisplayMembers'
import './App.css';

function Form( { addMember, memberToEdit } ) {

   // STATE OF INDIVIDUAL MEMBER
   const [teamMember, setTeamMember] = useState(
      {   name : "",
          email : "",
          role : "" 
       }
   )
   //--------------------------------------------    
   // USE-EFFECT FOR EDIT 
   useEffect( () => {
      console.log("use effect is working")
      setTeamMember( {
         ...teamMember,
         memberToEdit
      } )
   },[memberToEdit])
   //---------------------------------------------

   // ONCHANGE
   const handleChanges = (e) => {

     setTeamMember( {
         ...teamMember,
         [e.target.name]: e.target.value
      } )
   }

   // ONSUBMIT
   const submitHandler = (e) => {
      e.preventDefault();

      addMember(teamMember);

      //reset the form
      // setTeamMember(defaultState) also an option
      setTeamMember(  
       { name : "",
         email : "",
         role : "" 
       } );    
   }


  return (
    <div className="App">
     
         <ReactForm onSubmit={submitHandler}>
            <label>
               Name: 
               <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={ teamMember.name } // controlled input
                  onChange={ handleChanges }
               />
            </label>
            <label>
               Email: 
               <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={ teamMember.email } // controlled input
                  onChange={ handleChanges }
               />
            </label>
            <label>
               Role: 
               <input
                  type="text"
                  name="role"
                  placeholder="Position"
                  value={ teamMember.role } // controlled input
                  onChange={ handleChanges }
               />
            </label>
            <button>Submit</button>
         </ReactForm>
    </div>
  );
}

const ReactForm = styled.form`
   border: 1px solid gray;
   border-radius: 5px;
   box-shadow: 0px 0px 5px black;
   width: 40%;
   margin: 2em auto;
   padding: 1em;

   display: flex;
   justify-content: center;
   flex-direction: column;

   label{
      padding: .5em;
   }
   input{
      margin: 0 .5em;
   }

   button{
      width: 50%;
      margin: 1em auto 0;
      padding: .5em 0;
   }
  
`;

export default Form;