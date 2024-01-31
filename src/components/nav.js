import { NavLink, useNavigate} from "react-router-dom"

import "../styles/nav.css"

export default function Nav() {

    const navigate = useNavigate();
    console.log('nav')

    return (
        <div>
            {
                localStorage.getItem('token') ? <nav style={{display:'flex', justifyContent:'space-between', width:'100%', padding:'0.5rem 2rem' }} class="navbar navbar-expand-lg navbar-light bg-light">

                <div style={{display:'flex',justifyContent:'space-between',width:'100%', }}> <a style={{fontFamily:'cursive', fontSize:'2rem', fontWeight:'600', color:'teal'}}class="navbar-brand" href="#">Connect Well</a>
                <div>
                <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
                </div>
               </div>
               
                
                <div style={{width:'70%'}}>
                <div   class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul style={{
                    display:'flex',
                    gap:'1rem',
                   
                  }} class="navbar-nav ml-auto">
                    <li class="nav-item " >
                      <a class="nav-link" href="/">Chat <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/friends">Friends</a>
                    </li>
                    
                    <li class="nav-item">
                      <a class="nav-link" onClick={()=>{localStorage.removeItem('token');
                      localStorage.setItem('logoutFlag',true)} }
                      href='/'>Logout</a>
                    </li>
                    
                   
                  </ul>
                  
                </div>
                </div>
                
              </nav>: <div></div>
}

            
        </div>

        


    )
}