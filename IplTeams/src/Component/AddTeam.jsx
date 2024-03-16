import  { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom';
import axios from 'axios'
import WelcomeUser from './SubComponent/WelcomeUser';
function AddTeams() {
    const navigate = useNavigate();
    const [Id,setId]=useState("")
    const [teamName,setTeamName]=useState("")
    const [ranking,setRankings]=useState("")
    const [M,setM]=useState("")
    const [W,setW]=useState("")
    const [L,setL]=useState("")
    const [T,setT]=useState("")
    const [NR,setNR]=useState("")
    const [PT,setPT]=useState("")
    const [NRR,setNRR]=useState("")
    const [For,setFor]=useState("")
    const [Against,setAgainst]=useState("")
    const [OwnedBy,setOwnedBy]=useState("")
    function getCookie(name) {
      let cookieArray = document.cookie.split('; ');
      let cookie = cookieArray.find((row) => row.startsWith(name + '='));
      return cookie ? cookie.split('=')[1] : null;
  }
  const token = getCookie('token')
    const submit=(e)=>{
      e.preventDefault();
        axios.post('https://s51-ipl-team.onrender.com/api/addiplteam',{
          Id:Id,
          Teams:teamName,
          Ranking:ranking,
          M:M,
          W:W,
          L:L,
          T:T,
          NR:NR,
          PT:PT,
          NRR:NRR,
          For:For,
          Against:Against,
          OwnedBy:OwnedBy},{headers:{authorization:`Bearer ${token}`}})
     .then((response) =>{ console.log(response.data);
    navigate('/')})
    .catch((error) => console.error(error))
    }

  return (
    <>
        <div id='Body'>
        <div id='Navbar'>
            <div id='Navbar-left'>
              <Link to='/'><h1>IPL Teams</h1></Link>
            </div>
            <div id='Navbar-right'>
              <WelcomeUser/>
            </div>
        </div>
        <div id='Body-content'>
          <div id='form'>
          <form onSubmit={submit}>
            <div className='space-around'><label>Team Id : </label>
            <input type="text" onChange={(e)=>setId(e.target.value)}/></div>
            <div className='space-around'><label>Team Name : </label>
            <input type="text" onChange={(e)=>setTeamName(e.target.value)}/></div>
            <div className='space-around'><label>Ranking : </label>
            <input type="text" onChange={(e)=>{setRankings(e.target.value)}}/></div>
            <div className='space-around'><label>Matches Played : </label>
            <input type="text" onChange={(e)=>setM(e.target.value)}/></div>
            <div className='space-around'><label>Won : </label>
            <input type="text" onChange={(e)=>setW(e.target.value)}/></div>
            <div className='space-around'><label>Losses : </label>
            <input type="text" onChange={(e)=>setL(e.target.value)}/></div>
            <div className='space-around'><label>Matches Tied : </label>
            <input type="text" onChange={(e)=>setT(e.target.value)}/></div>
            <div className='space-around'><label>Matches Abandoned : </label>
            <input type="text" onChange={(e)=>setNR(e.target.value)}/></div>
            <div className='space-around'><label>Points Awarded : </label>
            <input type="text" onChange={(e)=>setPT(e.target.value)}/></div>
            <div className='space-around'><label>Net Run Rate : </label>
            <input type="text" onChange={(e)=>setNRR(e.target.value)}/></div>
            <div className='space-around'><label>For : </label>
            <input type="text" onChange={(e)=>setFor(e.target.value)}/></div>
            <div className='space-around'><label>Against : </label>
            <input type="text" onChange={(e)=>setAgainst(e.target.value)}/></div>
            <div className='space-around'><label>Owned By : </label>
            <select name="createdBy" id="cCreatedBy" onChange={(e)=>{setOwnedBy(e.target.value)}}>
              <option value="Siddharth Patel">Siddharth Patel</option>
              <option value="N Srinivasan">N Srinivasan</option>
              <option value="Sanjiv Goenka">Sanjiv Goenka</option>
              <option value="Nita Ambani">Nita Ambani</option>
              <option value="Manoj Badale">Manoj Badale</option>
              <option value="Prathmesh Mishra">Prathmesh Mishra</option>
              <option value="Shah Rukh Khan">Shah Rukh Khan</option>
              <option value="Mohit Burman">Mohit Burman</option>
              <option value="Kiran Kumar Grandhi">Kiran Kumar Grandhi</option>
              <option value="Kalanithi Maran">Kalanithi Maran</option>
            </select></div>
            <button type="submit">Submit</button>
            </form>
            </div>
        </div>

      
    </div>
    </>
  )
}

export default AddTeams