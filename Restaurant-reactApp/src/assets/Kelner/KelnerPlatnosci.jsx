import { useState } from 'react';
import'../Kucharz/RealizacjaZamowien.css'
import KelnerZamowienie from './KelnerZamowienie.jsx';
function KelnerPlatnosci({done, setdone}){


    function handleZapłacone(index){
        setdone(prev=>prev.filter((_,index)=>index!==index))


    }
    
    return(
        <>
        <h1 style={{left:"70%"}}>Do zapłaty</h1>
        <div style={{left:"70%"}}className="NewOrdersContainer">
            {done.map((element, index)=>(
                <div className='SingleOrderContainer' key={index} >
                    <h2>{element.OrderName}</h2>
                    <h3>{element.OrderDescription}</h3>
                    <button onClick={()=>handleZapłacone(index)}>Zapłacone</button>
                </div>
                
            ))}



        </div>

        </>
    );
    

}
export default KelnerPlatnosci