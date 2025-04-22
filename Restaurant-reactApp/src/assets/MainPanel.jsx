import './MainPanel.css';
import { useState } from 'react';
import KucharzPanel from './Kucharz/KucharzPanel.jsx';
import KelnerPanel from './Kelner/KelnerPanel.jsx';
function MainPanel(){

    const [isKucharzDisplayed, setIsKucharzDisplayed] = useState(false)

    const [OrdersList, setOrdersList] = useState([{OrderName:"Jajka",
        OrderDescription:"Na twardo"
        },{OrderName:"Pasztet",
        OrderDescription:"PasztetPasztetPasztetPasztetPasztetPasztetPasztetPasztetPasztetPasztetPasztetPasztet"}])

    return(

        <>
        <nav>
            <ul>
                <li id="Rola">Rola</li>
                <li>Wyloguj</li>
                <li onClick={()=>setIsKucharzDisplayed(prev=>!prev)}>Zmien role</li>
            </ul>
        </nav>
        {isKucharzDisplayed &&
            <KucharzPanel OrdersList={OrdersList} setOrdersList={setOrdersList}/>

        }
        {!isKucharzDisplayed &&
            <KelnerPanel OrdersList={OrdersList} setOrdersList={setOrdersList}/>


        }
        </>
    )
}
export default MainPanel