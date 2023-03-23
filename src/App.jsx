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
  }

  //API Url
  const apiEndPoint = `https://api.github.com/search/repositories?q=language:{language}`;

  //Request header with my token
  const headers = {
    Authorization: `token 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`
  }


  return (
    <div>
    </div>
  );
}

export default App;
