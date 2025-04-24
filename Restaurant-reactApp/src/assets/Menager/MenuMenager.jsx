import { useState } from 'react';
import '../Kucharz/RealizacjaZamowien.css'
function MenuMenager({menuList,setMenuList}){

function handleDishAdd(){
    if(newDish.name && newDish.type && newDish.ingredients !== ""){
        setMenuList(prev=>[newDish,...prev])
        setNewDish({name:'',
            type:'',
            ingredients:[]
    })

    }

}

 const [newDish, setNewDish] = useState({name:'',
                                        type:'',
                                        ingredients:[],
                                        
 });

    function handleRemove(index){
        setMenuList(prev=>prev.filter((_,element)=>element!==index))


    }
    
    return(
        <>
        <h1 style={{left:"65%"}}>Menu</h1>
        <input value={newDish.name} onChange={event=>setNewDish(prev=>({...prev, name:event.target.value}))} style={{top:"20%"}}className="Inputs"type="text" placeholder='Dodaj potrawę' />
        <input value={newDish.type}onChange={event=>setNewDish(prev=>({...prev, type:event.target.value}))}style={{top:"25%"}} className="Inputs"type="text" placeholder='Rodzaj dania' />
        <input value={newDish.ingredients}onChange={event=>setNewDish(prev=>({...prev, ingredients:event.target.value.split(", ")}))}style={{top:"30%"}} className="Inputs"type="text" placeholder='Dodaj składniki' />
        



        <button style={{left:"77%"}} onClick={handleDishAdd} id="DodajButton">Dodaj danie</button>
        <div style={{left:"65%", top:"35%"}}className="NewOrdersContainer">
            {menuList.map((element, index)=>(
                <div className='SingleOrderContainer' key={index} >
                    <h2>{element.name}</h2>
                    <h3>{element.type}</h3>
                    <h3>{element.ingredients.join(", ")}</h3>
                    <button onClick={()=>handleRemove(index)}>Usuń</button>
                </div>
                
            ))}


        </div>
        </>
    );
    

}
export default MenuMenager