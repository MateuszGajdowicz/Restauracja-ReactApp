import './MainPanel.css';
import KucharzPanel from './Kucharz/KucharzPanel.jsx';
function MainPanel(){
    return(

        <>
        <nav>
            <ul>
                <li id="Rola">Rola</li>
                <li>Wyloguj</li>
            </ul>
        </nav>
        <KucharzPanel/>
        </>
    )
}
export default MainPanel