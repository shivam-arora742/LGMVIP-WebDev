// import navbar component:
// useSTate fro users:
import {useState,useEffect} from 'react';
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import * as ReactBootStrap from 'react-bootstrap';

function App() {
    const [user,setUser]=useState([]);
    const [loading,setLoading]=useState(false);

    // asynchronous method:
    const LoadUser=async()=>{
        // setLoading(true);
        // wait till response is fetched from API:
        const response=await fetch ("https://reqres.in/api/users")
        .then(response=>response.json())
        .then(response=>{
            const item=response.data;
            // setLoading(false);
            setUser(item);
            // setDataLoaded(true);
        })
        // // Convert response to JSON for usage:
        // const jsonResponse=await response.json();
        // // setDataLoading(true);
        // // Extract only data array from jsonResponse:
        // const item=jsonResponse.data;
        // // Now setting the Users with data fetched from API:
        // setUser(item);
    };

    // click handler:
    const Clickhandler=()=>{
        setLoading(true);
    }
    // for lowering down the speed of loading-spinner:
    const LowSpeedSpin=()=>{
        return new Promise((resolve)=>setTimeout(resolve,2000));
    }
    useEffect(() => {
        if(loading){
            LowSpeedSpin().then(()=>{
                setLoading(false);
                LoadUser();
            });
        }
      }, [loading]);

    return (
         <div >
        <Navbar/>
        <br/>
        <hr></hr>
        <br/>
        <Button type="submit" onClick={Clickhandler}>Get User!!</Button>
        <br/><br/><br/>

        {loading ?(<ReactBootStrap.Spinner animation="border" style={{'marginLeft':'50%','marginTop':'15%','height':'60px','width':'60px'}}/>) : (<ul className="userData">
            {user.map(({id,email,first_name,last_name,avatar})=>(
                <li key={id}>
                    <img src={avatar}></img>
                    <p className="mail">E-MAil : {email}</p>
                    <p className="name"> Full Name: {first_name} {last_name}</p>
                    </li>
            ))}
        </ul>)}
        </div>
    );
}

export default App;