import './MainPanel.css';
import { useState } from 'react';
import KucharzPanel from './Kucharz/KucharzPanel.jsx';
import KelnerPanel from './Kelner/KelnerPanel.jsx';
import LogScreen from './LogScreen.jsx';
import MenagerPanel from './Menager/MenagerPanel.jsx';
function MainPanel(){

    const [isKucharzDisplayed, setIsKucharzDisplayed] = useState(false)
    const [isKelnerDisplayed, setIsKelnerDisplayed] = useState(false);
    const [isLogInDisplayed, setIsLogInDisplayed]= useState(true);
    const [isMenagerDisplayed, setIsMenagerDisplayed] = useState(false);
    const [message, setMessage] = useState("")

    const [rola, setRola] = useState("");

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
            setIsKelnerDisplayed(false)
            setIsMenagerDisplayed(false)
            setRola("Kucharz")
        }
        else if(user==="kelner" && password==="kelner"){
            setIsKelnerDisplayed(true)
            setIsLogInDisplayed(false)
            setIsKucharzDisplayed(false)
            setIsMenagerDisplayed(false)
            setRola("Kelner")
        }
        else if(user==="menager" && password==="menager"){
            setIsKelnerDisplayed(false)
            setIsLogInDisplayed(false)
            setIsKucharzDisplayed(false)
            setIsMenagerDisplayed(true)
            setRola("Menager")
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

    
    const [menuList, setMenuList] = useState([
        {
          name: "Pierogi ruskie",

          type: "danie główne",
          ingredients: ["ziemniaki", "biały ser", "cebula", "mąka", "sól", "pieprz"]
        },
        {
          name: "Spaghetti carbonara",

          type: "danie główne",
          ingredients: ["makaron", "jajka", "boczek", "parmezan", "czarny pieprz"]
        },
        {
          name: "Tom Yum",
          type: "zupa",
          ingredients: ["krewetki", "trawa cytrynowa", "liście limonki", "chili", "grzyby", "limonka"]
        },
        {
          name: "Falafel",
          type: "przekąska",
          ingredients: ["ciecierzyca", "czosnek", "cebula", "kolendra", "kumin", "mąka"]
        },
        {
          name: "Sushi",
          type: "danie główne",
          ingredients: ["ryż", "nori", "surowa ryba", "ogórek", "awokado", "ocet ryżowy"]
        },
        {
          name: "Szarlotka",
          type: "deser",
          ingredients: ["jabłka", "mąka", "cukier", "masło", "cynamon", "jajka"]
        }
      ]);




    return(

        <>
        <nav>
            <ul>
                <li id="Rola">{rola}</li>
                <li onClick={LogOut}>Wyloguj</li>
            </ul>
        </nav>
        {isKucharzDisplayed &&
            <KucharzPanel  setdone={setdone} OrdersList={OrdersList} setOrdersList={setOrdersList}/>

        }
        {isKelnerDisplayed &&
            <KelnerPanel menuList={menuList}  setdone = {setdone}done={done} OrdersList={OrdersList} setOrdersList={setOrdersList}/>


        }
        {isLogInDisplayed &&
            <LogScreen message={message} LogIn={LogIn} setUser={setUser} setPassword={setPassword}/>


        }
        {isMenagerDisplayed &&
            <MenagerPanel setMenuList={setMenuList} menuList={menuList}/>}
        </>
    )
}
export default MainPanel