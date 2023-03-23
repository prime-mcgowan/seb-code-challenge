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
          

     
    </div>
  );
}

export default App;
