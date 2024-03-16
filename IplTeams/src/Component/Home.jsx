import { useEffect,useState } from "react"
import {Link} from "react-router-dom"
import axios from 'axios'
import WelcomeUser from "./SubComponent/WelcomeUser";

function Home() {
    const [data,setData] = useState([]);
    const [filter,setFilter] = useState("All");
    useEffect(()=>{
        const iplteamdata = async()=>{
        try{
            const response = await axios.get('https://s51-ipl-team.onrender.com/api/getalliplteam')
            setData(response.data)
            console.log(response.data);
        }catch(err){
            console.error(err)
        }
    }
    iplteamdata()
},[])
const deleteData = (id) =>{
  axios.delete(`https://s51-ipl-team.onrender.com/api/deleteiplteam/${id}`)
 .then((response) =>{ console.log(response.data);
  window.location.reload();})
  .catch((error) => console.error(error))
}
const filteredData = data.filter((item)=>{
  if(filter === "All"){
    return item
  }
  else if(item.OwnedBy.includes(filter)){
    return item
  }
})
  return (
    <> <div id='Body'>
    <div id='Navbar'>
        <div id='Navbar-left'>
            <Link to='/'><h1>IPL Teams</h1></Link>
        </div>
        <div id='Navbar-right'>
            <WelcomeUser/>
        </div>
    </div>
    {(data.length > 1) ?
    <div id='Body-content'>
      <div id="add">
      <div id="createdBy">
      <p> Created By :   </p> 
      <select name="createdBy" id="CreatedBy" onChange={(e)=>{setFilter(e.target.value)}}>
              <option value="All">All</option>
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
            </select>
      </div>
      
      
        <Link to='/add'><button>Add</button></Link>
      </div>
    <table>
      <thead>
        <tr>
          <th>Team Id</th>
          <th>Team Name</th>
          <th>Ranking</th>
          <th>M</th>
          <th>W</th>
          <th>L</th>
          <th>T</th>
          <th>NR</th>
          <th>PT</th>
          <th>NRR</th>
          <th>For</th>
          <th>Against</th>
          <th>Update </th>
          <th>Delete </th>
          <th>Owned By</th>
          </tr>
        </thead>
        <tbody>
        {filteredData.map((item,index)=>{
          return (
            <tr key={index}>
              <td>{item.Id}</td>
              <td>{item.Teams}</td>
              <td>{item.Ranking}</td>
              <td>{item.M}</td>
              <td>{item.W}</td>
              <td>{item.L}</td>
              <td>{item.T}</td>
              <td>{item.NR}</td>
              <td>{item.PT}</td>
              <td>{item.NRR}</td>
              <td>{item.For}</td>
              <td>{item.Against}</td>
              <td><Link to={`/update/${item.ClubId}`} state={item}><button id="update">Update</button></Link></td>
              <td><button onClick={()=>deleteData(item.ClubId)} id="delete">Delete</button></td>
              <td>{item.OwnedBy}</td>
            </tr>
          )
        })}
        </tbody>
    </table>
    </div>
    :<div id='Body-content'>
      <div id="login">
      <h1>Please Login To Continue</h1>
      <Link to="/login"><button id='Navbar-button' style={{backgroundColor : 'rgb(34, 255, 0)',height:'10vh',width:'19vw',fontSize:'30px',textAlign:'center',marginBottom:'20px'}}>Login</button></Link>
      </div>
    </div>
}
  
</div>
    </>
  )
}

export default Home