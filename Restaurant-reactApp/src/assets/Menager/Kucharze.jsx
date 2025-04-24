import { useState } from 'react';
import '../Kucharz/RealizacjaZamowien.css'
function Kucharze({}){
    const [KucharzeList, setKucharzeList] = useState(["Marek Kowalski", "Jan Nowak", "Anna dkasdjakd"])

    const [nameValue, setNameValue] = useState("")

    function handleKucharzAdd(){
        if(nameValue!==""){
            setKucharzeList(prev=>[nameValue, ...prev])
            setNameValue("")

        }

    }

    function handleRemove(index){
        setKucharzeList(prev=>prev.filter((_,element)=>element!==index))

    }
    
    return(
        <>
        <h1 style={{left:"5%"}}>Kucharze</h1>
        <input style={{left:"5%"}} id="nameInput"type="text" placeholder='Dodaj kucharza' value={nameValue} onChange={event=>setNameValue(event.target.value)}/>
        <button style={{left:"17%"}}onClick={handleKucharzAdd} id="DodajButton">Dodaj</button>
        <div style={{left:"5%", top:"25%"}}className="NewOrdersContainer">
            {KucharzeList.map((element, index)=>(
                <div className='SingleOrderContainer' key={index} >
                    <h2>{element}</h2>
                    <button onClick={()=>handleRemove(index)}>Usuń</button>
                </div>
                
            ))}


        </div>
        </>
    );
    

}
export default Kucharze