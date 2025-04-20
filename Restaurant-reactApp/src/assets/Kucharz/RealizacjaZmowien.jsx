import { useState } from 'react';
import './RealizacjaZamowien.css'
function RealizacjaZamowien({InProcess,setInProcess,setDone}){
    


    function handleOrderRemove(index){
        setInProcess(prev=>prev.filter((_,element)=>element!==index))

    }
    function handleSetDone(index){
        setDone(prev=>[...prev,InProcess[index]])
        setInProcess(prev=>prev.filter((_,element)=>element!==index))


    }
    return(
        <>
        <h1 style={{left:"35%"}}>W trakcie realizacji</h1>
        <div style={{left:"35%"}}className="NewOrdersContainer">
            {InProcess.map((element, index)=>(
                <div className='SingleOrderContainer' key={index} >
                    <h2>{element.OrderName}</h2>
                    <h3>{element.OrderDescription}</h3>
                    <button onClick={()=>handleSetDone(index)}>Zrealizowane</button>
                    <button onClick={()=>handleOrderRemove(index)}>Usuń</button>
                </div>
                
            ))}


        </div>
        </>
    );
    

}
export default RealizacjaZamowien