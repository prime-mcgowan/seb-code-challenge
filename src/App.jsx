
import { useState } from 'react';

function TopFive() {
  const [language, setLanguage] = useState("");
  const [repos, setRepos] = useState([]);


  //Handles the language input
  const handleLanguageInput = (event) => {
    setLanguage(event.target.value);
  }

  //Hadles the submit button
  const handleSubmitButton = (event) => {
    event.preventDefault();

  //API Url (includes a sort by stars and desc order)
  const apiEndPoint = `https://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc`;

  //Request and Response
  fetch(apiEndPoint)
    .then(response => response.json()) 
    .then(data => {
      //top 5 will be sent back
      const topFiveRepos = data.items.slice(0, 5);
      // console.log(topFiveRepos)
      setRepos(topFiveRepos);
    })
    .catch(error => console.log('Error in fetching top 5 repos', error))
  }//end handleSubmitButton function



  return (
    <div>
{/* Start Header Section */}
      <header className="flex-shrink-0" style={{marginTop:"-100px"}}>
        <div className="container col-xxl-8 px-4 py-5">
          <div className="row g-5 py-5 row-cols-1 row-cols-lg-2">
            <div className="col order-last order-lg-first">
                <h1 className="display-5 fw-bold 1h-1 mb-3"
                    style={{color:"#431399", marginTop:"30px"}}>Top 5: An SEB Code Challenge
                </h1>
                <h4 className="lead" style={{color:"#4D23A4"}}>Build an application that uses Github's API to return the top 5 starred repositories for a user-supplied programming language.</h4>
                <h4 style={{marginTop:"20px", color:"#4D23A4"}}>Built using:</h4>
                <h5 className="fw-bold mt-5">
                  <div className="d-flex">
                    <div className="row" style={{marginTop:"-30px"}}>
                        <div className="col"><i className="fab fa-html5 fa-3x html5icon"></i></div>
                        <div className="col"><i className="fab fa-css3-alt fa-3x cssicon"></i></div>
                        <div className="col"><i className="fab fa-js-square fa-3x jsicon"></i></div>
                        <div className="col"><i className="fab fa-react fa-3x reacticon"></i></div>
                        <div className="col"><i className="fab fa-bootstrap fa-3x bsicon"></i></div>
                    </div>
                  </div>
                </h5>
            </div>

            <div className="col">
                 <img src="./images/topfive.png" className="img-fluid center-block d-block mx-auto" alt="App Logo" width="250" height="200" style={{marginTop:"30px"}}/>
               
                 <button 
                  type="button" 
                  className="btn btn-warning"
                  style={{display:"block", margin:"auto", marginTop:"20px"}}
                  >
                  Click here to see the code!
                 </button>
            </div>
           </div>
        </div>
      </header>
{/* End Header Section */}


{/* End Main Section */}
    <main style={{marginTop:"-80px"}}>
        <form 
          onSubmit={handleSubmitButton}
        >
          <label 
            style={{marginLeft:"50px", marginTop:"20px", fontSize:"20px"}}>Show me the current TOP 5 Github repositories for:
          </label>
          <input 
            type="text" 
            placeholder="programming language"
            value={language}
            style={{marginLeft:"5px"}}
            onChange={handleLanguageInput}
          /> 
          <button 
            type="submit"
            style={{marginLeft:"10px"}}
            className="btn btn-danger"
          >Submit
          </button>
        </form> 

        <ul 
          style={{paddingTop:"10px"}}>
            {repos.map(repo => (
              <li key={repo.id}>
                <a target="_blank" href={repo.html_url}>{repo.full_name}</a> - {repo.stargazers_count} stars
              </li>
            ))}
        </ul>
  
    
{/* End Main Section */}
          

{/*  Start Footer Section */}
    <footer 
      className="footer mt-auto py-3" >
        <div className="container-fluid" style={{position:"relative", bottom:"0"}}>
            <div className="text-muted d-flex align-items-center justify-content-start justify-content-lg-center"
                 > Laura McGowan | mcgowancodes@gmail.com</div>
          </div>
    </footer>
{/* End Footer Section */}
</main>
    </div> 
  ); //end return 
} //end App Function

export default TopFive;
