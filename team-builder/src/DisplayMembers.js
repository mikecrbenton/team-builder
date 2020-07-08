import React, { useState }  from 'react';
import styled from 'styled-components';

function DisplayMembers( { teamList, editMember } ) {

  
   

   return (
      <div>
         {teamList.map( member => (  
               <DisplayCard key={member.name}>
                  <p><BoldStyle>Name: </BoldStyle><span id="name-value">{member.name}</span></p>
                  <p><BoldStyle>Email: </BoldStyle><span id="email-value">{member.email}</span></p>
                  <p><BoldStyle>Role: </BoldStyle><span id="role-value">{member.role}</span></p>
                  <button onClick={editMember}>Edit</button>
               </DisplayCard>  
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
 