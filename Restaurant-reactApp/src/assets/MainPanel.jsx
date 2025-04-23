import './MainPanel.css';
import { useState } from 'react';
import KucharzPanel from './Kucharz/KucharzPanel.jsx';
import KelnerPanel from './Kelner/KelnerPanel.jsx';
import LogScreen from './LogScreen.jsx';
function MainPanel(){

    const [isKucharzDisplayed, setIsKucharzDisplayed] = useState(false)
    const [isKelnerDisplayed, setIsKelnerDisplayed] = useState(false);
    const [isLogInDisplayed, setIsLogInDisplayed]= useState(true);
    const [message, setMessage] = useState("")

    const [OrdersList, setOrdersList] = useState([{OrderName:"Jajka",
        OrderDescription:"Na twardo"
        },{OrderName:"Pasztet",
        OrderDescription:"PasztetPasztetPasztetPasztetPasztetPasztetPasztetPasztetPasztetPasztetPasztetPasztet"}])

    const [user, setUser] =useState('');
    const [password, setPassword] = useState('');

    function LogIn(){
        if(user==="kucharz" && password==="kucharz"){
            setIsKucharzDisplayed(true)
            setIsLogInDisplayed(false)
        }
        else if(user==="kelner" && password==="kelner"){
            setIsKelnerDisplayed(true)
            setIsLogInDisplayed(false)
        }
        else{
            setIsLogInDisplayed(true);
            setMessage("Niepoprawne dane logowania")
        }

    }

    function LogOut(){
        setPassword("")
        setUser("")
        setIsKucharzDisplayed(false)
        setIsKelnerDisplayed(false)
        setIsLogInDisplayed(true);



        
    }
    const [done, setdone] =useState([]);

    return(

        <>
        <nav>
            <ul>
                <li id="Rola">Rola</li>
                <li onClick={LogOut}>Wyloguj</li>
            </ul>
        </nav>
        {isKucharzDisplayed &&
            <KucharzPanel  setdone={setdone} OrdersList={OrdersList} setOrdersList={setOrdersList}/>

        }
        {isKelnerDisplayed &&
            <KelnerPanel setdone = {setdone}done={done} OrdersList={OrdersList} setOrdersList={setOrdersList}/>


        }
        {isLogInDisplayed &&
            <LogScreen message={message} LogIn={LogIn} setUser={setUser} setPassword={setPassword}/>


        }
        </>
    )
}
export default MainPanel