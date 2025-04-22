import { useState } from 'react';
import'../Kucharz/RealizacjaZamowien.css'
import KelnerZamowienie from './KelnerZamowienie.jsx';
function MenuKelner({menuList, setSelectedIndex, orderDetails}){
    
    return(
        <>
        <h1 style={{left:"5%"}}>Menu</h1>
        <div style={{left:"5%"}}className="NewOrdersContainer">
            {menuList.map((element, index)=>(
                <div className='SingleOrderContainer' key={index} >
                    <h2>{element.name}</h2>
                    <h3>{element.type}</h3>
                    <h4>{element.ingredients.join(", ")}</h4>
                    <button onClick={()=>setSelectedIndex(index)}>Zamów</button>
                </div>
                
            ))}



        </div>

        </>
    );
    

}
export default MenuKelner