import './KelnerPanel.css'
import { useEffect, useState } from 'react';
import MenuKelner from './MenuKelner.jsx';
import KelnerZamowienie from './KelnerZamowienie.jsx';
import KelnerPlatnosci from './KelnerPlatnosci.jsx';
function KelnerPanel({menuList, setdone,done,orderDetails,setOrderDetails,OrdersList,setOrdersList }){


      const [selectedIndex, setSelectedIndex] = useState(null);

    return(
        <>
        <MenuKelner  setSelectedIndex={setSelectedIndex} menuList={menuList}/>
        <KelnerZamowienie OrdersList={OrdersList} setOrdersList={setOrdersList} selectedIndex={selectedIndex} orderDetails={orderDetails} setOrderDetails={setOrderDetails} menuList={menuList}/>
        <KelnerPlatnosci  done={done} setdone = {setdone}setSelectedIndex={setSelectedIndex} menuList={menuList}/>

        </>
    );

}
export default KelnerPanel