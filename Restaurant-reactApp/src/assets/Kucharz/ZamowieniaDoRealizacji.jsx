import { useState } from 'react';
import './RealizacjaZamowien.css'
function ZamowieniaDoRealizacji({setInProcess, OrdersList,setOrdersList}){
    
    
    function handleOrderRemove(index){
        setOrdersList(prev=>prev.filter((_,element)=>element!==index))

    }

    function handleChangeInProcess(index){
        setInProcess(prev=>[...prev, OrdersList[index]])
        setOrdersList(prev=>prev.filter((_,element)=>element!==index))


    }
    return(
        <>
        <h1 style={{left:"5%"}}>Zamówienia do zrealizowania</h1>
        <div style={{left:"5%"}}className="NewOrdersContainer">
            {OrdersList.map((element, index)=>(
                <div className='SingleOrderContainer' key={index} >
                    <h2>{element.OrderName}</h2>
                    <h3>{element.OrderDescription}</h3>
                    <button onClick={()=>handleChangeInProcess(index)}>Zrealizuj</button>
                    <button onClick={()=>handleOrderRemove(index)}>Usuń</button>
                </div>
                
            ))}


        </div>
        </>
    );
    

}
export default ZamowieniaDoRealizacji