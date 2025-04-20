import { useState } from 'react';
import './RealizacjaZamowien.css'
function GotoweZamowienia({setDone,Done}){
    


    function handleOrderRemove(index){
        setOrdersList(prev=>prev.filter((_,element)=>element!==index))

    }

    function handleChangeInProcess(index){
        setInProcess(prev=>[...prev, OrdersList[index]])
        setOrdersList(prev=>prev.filter((_,element)=>element!==index))


    }
    return(
        <>
        <h1 style={{left:"65%"}}>Zamówienia do odebrania</h1>
        <div style={{left:"65%"}}className="NewOrdersContainer">
            {Done.map((element, index)=>(
                <div className='SingleOrderContainer' key={index} >
                    <h2>{element.OrderName}</h2>
                    <h3>{element.OrderDescription}</h3>
                    <button onClick={()=>handleOrderRemove(index)}>Odebrane</button>
                    <button onClick={()=>handleOrderRemove(index)}>Usuń</button>
                </div>
                
            ))}


        </div>
        </>
    );
    

}
export default GotoweZamowienia