import React, { useState }  from 'react';
import styled from 'styled-components';

function DisplayMembers( { teamList, editMember } ) {

   const submitHandler = (e) => {
      e.preventDefault();
      editMember(e);
   }

   return (
      <div>
         {teamList.map( member => (
            <form onSubmit={submitHandler}>
               <DisplayCard key={member.name}>
                  <p name="name"><BoldStyle>Name: </BoldStyle>{member.name}</p>
                  <p><BoldStyle>Email: </BoldStyle>{member.email}</p>
                  <p><BoldStyle>Role: </BoldStyle>{member.role}</p>
                  <button>Edit</button>
               </DisplayCard>
            </form>
         ) ) }
      </div>
)
}

export default DisplayMembers;

const DisplayCard = styled.div`
border: 1px solid gray;
border-radius: 5px;
width: 40%;
margin: 2em auto;
padding: 1em;
`;

const BoldStyle = styled.span`
   font-weight: bold;
`;
 