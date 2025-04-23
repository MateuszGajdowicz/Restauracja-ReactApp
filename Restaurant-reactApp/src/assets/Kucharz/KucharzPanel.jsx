import './KucharzPanel.css';
import ZamowieniaDoRealizacji from './ZamowieniaDoRealizacji.jsx';
import RealizacjaZamowien from './RealizacjaZmowien.jsx';
import GotoweZamowienia from './GotoweZamowienia.jsx';
import { useEffect, useState } from 'react';
function KucharzPanel({OrdersList,setOrdersList,setdone}){

   
    const [InProcess, setInProcess] = useState([])

    const [Done, setDone] = useState([]);
    useEffect(()=>{
        setdone(Done);


    },[Done])

    return(
        <>
        <ZamowieniaDoRealizacji setInProcess={setInProcess} OrdersList={OrdersList} setOrdersList={setOrdersList}/>
        <RealizacjaZamowien InProcess={InProcess} setInProcess={setInProcess} setDone={setDone}/>
        <GotoweZamowienia Done={Done} setDone={setDone}/>
        </>
    );
}
export default KucharzPanel