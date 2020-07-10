import React, { useState }  from 'react';
import styled from 'styled-components';

function DisplayMembers( { teamList, editMember } ) {

  
   

   return (
      <div>
         {teamList.map( member => (  
               <DisplayCard key={member.name}>
                  <p><Bold>Name: </Bold><span id="name-value">{member.name}</span></p>
                  <p><Bold>Email: </Bold><span id="email-value">{member.email}</span></p>
                  <p><Bold>Role: </Bold><span id="role-value">{member.role}</span></p>
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

const Bold = styled.span`
   font-weight: bold;
   font-size: 1.1rem;

`;
 