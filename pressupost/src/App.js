import './App.css';
import React from "react";

//components
import Panell from "./components/inicio/Panell";


const { useState } = React;

function App  ()  {
    const items = [{
            Id: 1,
            Name: "Una pàgina web",
            value: 500,
        },
        {
            Id: 2,
            Name: "Una consultoria SEO",
            value: 300,
        },
        {
            Id: 3,
            Name: "Una campanya de Google Ads web",
            value: 200,
        },
    ]


    const [checked, setChecked] = useState([]);
    const [hidePanel, setHidePanel] = useState(true);
    const handleChange = (item, checked) =>
{
if (checked){

        setChecked((prev) => [...prev, item])
        setHidePanel(false)

}else{
        setChecked((prev) =>
            prev.filter((c) => c.Id !== item.Id && c.value != item.value)
        );
        setHidePanel(true)
}
}
    return ( 
    
    <div>
        <h1> ¿Que quiere hacer ? </h1>

        <div> {
            items.map((c) => {

                if (c.Id === 1){
                    return ( <div>
                        <input type = "checkbox" onChange = {
                            (e) => handleChange(c, e.target.checked) }
                        /> { ` ${c.Name} ${c.value}`}
                            <Panell key="panel" showPanel={hidePanel}/>
                        </div> 
                       
                    );
                }else{
                    return ( <div>
                        <input type = "checkbox" onChange = {
                            (e) => handleChange(c, e.target.checked) }
                        /> { ` ${c.Name} ${c.value}`}
    
                        </div> 
                    );
                }

            })
        } <p> Preu : { checked.reduce((sum, { value }) => (sum + value)+(Panell.), 0) } </p> 
        </div>
        </div>
    );
};

export default App;
