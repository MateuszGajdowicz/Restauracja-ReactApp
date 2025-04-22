import './KelnerPanel.css'
import { useState } from 'react';
import MenuKelner from './MenuKelner.jsx';
import KelnerZamowienie from './KelnerZamowienie.jsx';
function KelnerPanel({orderDetails,setOrderDetails,OrdersList,setOrdersList }){

    const menuList = [
        {
          name: "Pierogi ruskie",
          quisine: "polska",
          vegan: true,
          type: "danie główne",
          ingredients: ["ziemniaki", "biały ser", "cebula", "mąka", "sól", "pieprz"]
        },
        {
          name: "Spaghetti carbonara",
          quisine: "włoska",
          vegan: false,
          type: "danie główne",
          ingredients: ["makaron", "jajka", "boczek", "parmezan", "czarny pieprz"]
        },
        {
          name: "Tom Yum",
          quisine: "tajska",
          vegan: false,
          type: "zupa",
          ingredients: ["krewetki", "trawa cytrynowa", "liście limonki", "chili", "grzyby", "limonka"]
        },
        {
          name: "Falafel",
          quisine: "bliskowschodnia",
          vegan: true,
          type: "przekąska",
          ingredients: ["ciecierzyca", "czosnek", "cebula", "kolendra", "kumin", "mąka"]
        },
        {
          name: "Sushi",
          quisine: "japońska",
          vegan: false,
          type: "danie główne",
          ingredients: ["ryż", "nori", "surowa ryba", "ogórek", "awokado", "ocet ryżowy"]
        },
        {
          name: "Szarlotka",
          quisine: "polska",
          vegan: true,
          type: "deser",
          ingredients: ["jabłka", "mąka", "cukier", "masło", "cynamon", "jajka"]
        }
      ];

      const [selectedIndex, setSelectedIndex] = useState(null);

    return(
        <>
        <MenuKelner  setSelectedIndex={setSelectedIndex} menuList={menuList}/>
        <KelnerZamowienie OrdersList={OrdersList} setOrdersList={setOrdersList} selectedIndex={selectedIndex} orderDetails={orderDetails} setOrderDetails={setOrderDetails} menuList={menuList}/>

        </>
    );

}
export default KelnerPanel