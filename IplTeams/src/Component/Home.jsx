import { useEffect,useState } from "react"
import {Link} from "react-router-dom"
import axios from 'axios'

function Home() {
    const [data,setData] = useState([]);
    // const [filter,setFilter] = useState("All");
    useEffect(()=>{
        const iplteamdata = async()=>{
        try{
            const response = await axios.get('http://localhost:3000/api/getalliplteam')
            setData(response.data)
            console.log(response.data);
        }catch(err){
            console.error(err)
        }
    }
    iplteamdata()
},[])
  return (
    <> <div id='Body'>
    <div id='Navbar'>
        <div id='Navbar-left'>
            <Link to='/'><h1>IPL Teams</h1></Link>
        </div>
        <div id='Navbar-right'>
            {/* <WelcomeUser/> */}
        </div>
    </div>
    {/* {(data.length > 1) ? */}
    <div id='Body-content'>
      <div id="add">
      {/* <div id="createdBy">
      <p> Created By :   </p> 
        <select name="createdBy" id="CreatedBy" onChange={(e)=>{setFilter(e.target.value)}}>
          <option value="All">All</option>
          <option value="Anna Connel">Anna Connel</option>
          <option value="John Houlding">John Houlding</option>
          <option value="Gus Mears">Gus Mears</option>
          <option value="Jack Hughes">Jack Hughes</option>
        </select>
      </div> */}
      
      
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
          {/* <th>Update </th>
          <th>Delete </th>
          <th>Created By</th> */}
          </tr>
        </thead>
        <tbody>
        {data.map((item,index)=>{
          return (
            <tr key={index}>
              <td>{item.Id}</td>
              <td>{item.TEAMS}</td>
              <td>{item.Id}</td>
              <td>{item.M}</td>
              <td>{item.W}</td>
              <td>{item.L}</td>
              <td>{item.T}</td>
              <td>{item.NR}</td>
              <td>{item.PT}</td>
              <td>{item.NRR}</td>
              <td>{item.For}</td>
              <td>{item.Against}</td>
              {/* <td>{item.GoalsConceded}</td>
              <td>{item.CleanSheets}</td>
              <td>{item.Shots}</td>
              <td>{item.Shotsontarget}</td> */}
{/*               
              <td><Link to={`/update/${item.ClubId}`} state={item}><button id="update">Update</button></Link></td>
              <td><button onClick={()=>deleteData(item.ClubId)} id="delete">Delete</button></td>
              <td>{item.created_by}</td> */}
            </tr>
          )
        })}
        </tbody>
    </table>
    </div>
    {/* :<div id='Body-content'>
      <div id="login">
      <h1>Please Login To Continue</h1>
      <Link to="/login"><button id='Navbar-button' style={{backgroundColor : 'rgb(34, 255, 0)',height:'10vh',width:'19vw',fontSize:'30px',textAlign:'center',marginBottom:'20px'}}>Login</button></Link>
      </div>
    </div>
} */}
  
</div>
    </>
  )
}

export default Home