
import { useState } from 'react';

function App() {
  const [language, setLanguage] = useState("");
  const [repos, setRepos] = useState([]);


  //Handle the language provided by the user
  const handleLanguageInput = (event) => {
    setLanguage(event.target.value);
  }

  //Hadle the submit button
  const handleSubmitButton = (event) => {
    event.preventDefault();

  //API Url
  const apiEndPoint = `https://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc`;

  //Request header with my token
  const headers = {
    Authorization: `token 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`
  }

  //Request and Response
  fetch(apiEndPoint)
    .then(response => response.json())
    .then(data => {
      // if (data && data.items) {
      //top 5 will be sent back
      const topFiveRepos = data.items.slice(0, 5);
      // console.log(topFiveRepos)
      // } else {
      //   console.log('Data is missing');
      // }
      setRepos(topFiveRepos);
    })
    .catch(error => console.log('Error in fetching top 5 repos', error))

  }//end handleSubmitButton

  return (
    <div>

<main className="flex-shrink-0">
       <div className="container col-xxl-8 px-4 py-5">
           <div className="row g-5 py-5 row-cols-1 row-cols-lg-2">
            <div className="col order-last order-lg-first">
                <h1 className="display-5 fw-bold 1h-1 mb-3">APP NAME: A CODING PROJECT</h1>
            <h4 className="lead">Project Description Goes Here</h4>
            <ul className="fa-ul pt-2 checklist">
                <li><span className="fa-li"><i className="fas fa-check-square"></i></span>CSS and Bootstrap Layout</li>
                <li><span className="fa-li"><i className="fas fa-check-square"></i></span>Javasript Fundamentals</li>
                <li><span className="fa-li"><i className="fas fa-check-square"></i></span>Javascript Loops</li>
                <li><span className="fa-li"><i className="fas fa-check-square"></i></span>Javascript Functions</li>
                <li><span className="fa-li"><i className="fas fa-check-square"></i></span>Dom Manipulation</li>
                <li><span className="fa-li"><i className="fas fa-check-square"></i></span>If/Then/Else Logic</li>
                <li><span className="fa-li"><i className="fas fa-check-square"></i></span>Boolean Logic</li>
            </ul>
            <div>
                <a type="button" className="btn btn-outline-dark btn-lg px-4 me-md-2" href="app.html">Try It Out!</a>
            </div>
            <h5 className="fw-bold mt-5">
                <div className="d-flex">
                    <div className="row">
                        <div className="col"><i className="fab fa-bootstrap fa-3x bsicon"></i></div>
                        <div className="col"><i className="fab fa-html5 fa-3x html5icon"></i></div>
                        <div className="col"><i className="fab fa-css3-alt fa-3x cssicon"></i></div>
                        <div className="col"><i className="fab fa-js-square fa-3x jsicon"></i></div>
                    </div>
                </div>
            </h5>
            </div>
            <div className="col">
                 {/* <img src="app logo" class="img-fluid center-block d-block mx-auto" alt="App Logo" width="700" height="500" */}
            </div>
           </div>
       </div>
 </main>





<main>
      <form onSubmit={handleSubmitButton}>
        <label>What are the current TOP 5 Github repositories for:</label>
        <input type="text" 
               placeholder="enter programming language"
               value={language}
               onChange={handleLanguageInput}
        /> 
        <button type="submit">Submit</button>
      </form>

        <ul>
          {repos.map(repo => (
            <li key={repo.id}>
              <a href={repo.html_url}>{repo.full_name}</a> - {repo.stargazers_count} stars
            </li>
          ))}
        </ul>
</main>
          













        {/* <!-- Footer Section --> */}
<footer className="footer mt-auto py-3">
  <div className="container-fluid">
      <div className="row row-cols-1 row-cols-lg-3 gy-2">
          <div className="col order-last order-lg-first text-light">
              <div><span className="text-muted">&copy;2023</span> Laura McGowan | mcgowancodes@gmail.com</div>
          </div>
          <div className="col d-flex align-items-center justify-content-start justify-content-lg-center">
              <img src="..." alt="..." height="24"/>
          </div>
          <div className="col d-flex align-items-center justify-content-start justify-content-lg-end">
              <div className="row">
                  <div className="col social"><a href="#" target="_blank"><i className="fab fa-github fa-2x"></i></a></div>
                  <div className="col social"><a href="#" target="_blank"><i className="fab fa-linkedin fa-2x"></i></a></div>
                  <div className="col social"><a href="#" target="_blank"><i className="fab fa-google fa-2x"></i></a></div>

              </div>
          </div>
      </div>
  </div>
</footer>





     
    </div>
    
  );
}

export default App;
