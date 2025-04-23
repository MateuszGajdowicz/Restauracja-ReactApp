import './LogScreen.css';
function LogScreen({setUser,setPassword,LogIn, message}){
    
    return(
        <>
        <div className='LogWindow'>
            <div className='LogContainer'>
                <h2>Zaloguj się</h2>
                <input onChange={event=>setUser(event.target.value)}type="text" placeholder='User'/>
                <input type="password" onChange={event=>setPassword(event.target.value)} placeholder='Password' />
                <button type="submit"onClick={()=>LogIn()}>Zaloguj</button>
                <h3>{message}</h3>

            </div>
        </div>
        </>
    );
}
export default LogScreen