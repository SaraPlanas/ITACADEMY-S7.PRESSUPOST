
import './App.css';
import React from "react";





function App() {
  return (
    <div className="App">
      
       <div> ¿Que quiere hacer?
         

         <table>
         <tr>
           <td>
             <input type="checkbox"/>
             </td>

         <td>
           <p>Una pàgina web</p>
           </td>
           <td>
             500 €
           </td>
         </tr>
         <tr>
           <td>
             <input type="checkbox"/>
             </td>
             <td>
               <p>Una consultoria SEO </p>
               </td>
               <td>
             300 €
           </td>
               </tr>
           <tr>
           <td>
             <input type="checkbox"/>
             </td>
             <td>
               <p>Una campanya de Google Ads web</p>
               </td>
               <td>
             200 €
           </td>
               </tr>
                  </table>
       </div>

       <table>
         <tr>
         <td>
           <p>Preu</p>
           </td>
           <td> XXX
             </td>
         </tr>
       </table>
      </div>
    
  );
}

export default App;
