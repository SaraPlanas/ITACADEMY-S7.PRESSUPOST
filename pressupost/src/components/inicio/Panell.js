import React from "react";
import styled,{css}from'styled-components'

const Panel = styled.div`
border-radius: 10px;
border: 2px solid black;
color: black;
padding: 1em;
width: 400px;
margin:15px;
`;
const Tabla = styled.table`
color: black;
`;

function Panell(props){
  
    return (
  <Panel hidden={props.showPanel}>
    <Tabla>
         <tr>
           <td>
            Número de páginas
             </td>
            <td id="unitpag">
              <input type ="number"></input>
            </td>
          </tr>
         <tr>
           <td>
            Número de idiomas
             </td>
             <td id="unitidiom">
             <input type ="number"></input>
               </td>
         </tr>
         
         </Tabla>
       </Panel>

      )

}
export default Panell;