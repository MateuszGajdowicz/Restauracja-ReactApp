import './KucharzPanel.css';
import ZamowieniaDoRealizacji from './ZamowieniaDoRealizacji.jsx';
import RealizacjaZamowien from './RealizacjaZmowien.jsx';
import GotoweZamowienia from './GotoweZamowienia.jsx';
import { useState } from 'react';
function KucharzPanel(){

    const [OrdersList, setOrdersList] = useState([{OrderName:"Jajka",
        OrderDescription:"Na twardo"
        },{OrderName:"Pasztet",
        OrderDescription:"PasztetPasztetPasztetPasztetPasztetPasztetPasztetPasztetPasztetPasztetPasztetPasztet"}])

    const [InProcess, setInProcess] = useState([])

    const [Done, setDone] = useState([]);

    return(
        <>
        <ZamowieniaDoRealizacji setInProcess={setInProcess} OrdersList={OrdersList} setOrdersList={setOrdersList}/>
        <RealizacjaZamowien InProcess={InProcess} setInProcess={setInProcess} setDone={setDone}/>
        <GotoweZamowienia Done={Done} setDone={setDone}/>
        </>
    );
}
export default KucharzPanel