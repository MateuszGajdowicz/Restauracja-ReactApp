import { useEffect, useState } from 'react'
import './KelnerZamowienie.css'
function KelnerZamowienie({selectedIndex,menuList,OrdersList,setOrdersList}){

                                
    const [orderDetails, setOrderDetails] =useState({OrderName: '',
        OrderDetails: ''})

    useEffect(() => {
        if (selectedIndex !== null && menuList[selectedIndex]) {
            setOrderDetails({ OrderName: menuList[selectedIndex].name, OrderDetails: "" });
        }
    }, [selectedIndex]);

    
    function sendSelectedToKucharz() {
        const noweZamowienie = {
          OrderName: menuList[selectedIndex].name,
          OrderDescription: orderDetails.OrderDetails
        };
      
        setOrdersList(prev => [...prev, noweZamowienie]);
      }
      
    

    return(
        <>
        <div className='OrderContainer'>
        <h1>{selectedIndex !== null ? menuList[selectedIndex].name : "Wybierz danie z menu"}</h1>
        <textarea  id="textarea" onChange={(event) =>setOrderDetails({...orderDetails,OrderDetails: event.target.value})}name="" value={orderDetails.OrderDetails} placeholder='Dodatkowe notatki'></textarea>
            <button onClick={sendSelectedToKucharz}>Prześlij na kuchnię</button>


        </div>
        </>
    )

}
export default KelnerZamowienie