import Kucharze from "./Kucharze.jsx";
import Kelnerzy from "./Kelnerzy.jsx";
import MenuMenager from "./MenuMenager.jsx";
function MenagerPanel({menuList,setMenuList}){
    return(
        <>
        <Kucharze/>
        <Kelnerzy/>
        <MenuMenager menuList={menuList} setMenuList={setMenuList}/>
        </>
    );
}
export default MenagerPanel