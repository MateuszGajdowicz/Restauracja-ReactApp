import { useState } from 'react';
import '../Kucharz/RealizacjaZamowien.css'
function Kelnerzy({}){
    const [KelnerzyList, setKelnerzyList] = useState(["Józek Dębniak", "Jan Jan", "Jola dkasdjakd"])

    const [nameValue, setNameValue] = useState("")

    function handleKucharzAdd(){
        if(nameValue!==""){
            setKucharzeList(prev=>[nameValue, ...prev])
            setNameValue("")

        }

    }

    function handleRemove(index){
        setKelnerzyList(prev=>prev.filter((_,element)=>element!==index))

    }
    
    return(
        <>
        <h1 style={{left:"35%"}}>Kelnerzy</h1>
        <input style={{left:"35%"}} id="nameInput"type="text" placeholder='Dodaj kucharza' value={nameValue} onChange={event=>setNameValue(event.target.value)}/>
        <button style={{left:"47%"}}onClick={handleKucharzAdd} id="DodajButton">Dodaj</button>
        <div style={{left:"35%", top:"25%"}}className="NewOrdersContainer">
            {KelnerzyList.map((element, index)=>(
                <div className='SingleOrderContainer' key={index} >
                    <h2>{element}</h2>
                    <button onClick={()=>handleRemove(index)}>Usuń</button>
                </div>
                
            ))}


        </div>
        </>
    );
    

}
export default Kelnerzy