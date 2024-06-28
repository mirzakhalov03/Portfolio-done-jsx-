import React, { useState, useEffect } from 'react';
import { uzbekJokes } from './uzbekJokes';
import { memeJokes } from './memeJokes';
import './game.scss';

const Game = () => {
  const [joke, setJoke] = useState('');
  const [language, setLanguage] = useState('eng');
  const [shownUzbekJokes, setShownUzbekJokes] = useState([]);
  const [shownMemeJokes, setShownMemeJokes] = useState([]);
  const [shownEngJokes, setShownEngJokes] = useState([]);

  const url = 'https://icanhazdadjoke.com';
  const options = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
    },
  };

  const getRandomJoke = (jokesArray, shownJokes) => {
    if (shownJokes.length === jokesArray.length) {
      shownJokes.length = 0; 
    }
    let randomJoke;
    do {
      randomJoke = jokesArray[Math.floor(Math.random() * jokesArray.length)];
    } while (shownJokes.includes(randomJoke.id));
    shownJokes.push(randomJoke.id);
    return randomJoke;
  };

  const fetchJoke = () => {
    if (language === 'uzb') {
      const joke = getRandomJoke(uzbekJokes, shownUzbekJokes);
      setShownUzbekJokes([...shownUzbekJokes, joke.id]);
      setJoke(joke.joke);
    } else if (language === 'eng') {
      fetch(url, options)
        .then((response) => response.json())
        .then((result) => {
          setJoke(result.joke);
          setShownEngJokes([...shownEngJokes, result.id]);
        })
        .catch((error) => console.error(error));
    } else if (language === 'meme') {
      const joke = getRandomJoke(memeJokes, shownMemeJokes);
      setShownMemeJokes([...shownMemeJokes, joke.id]);
      setJoke(<img className="joke__image" src={joke.imageUrl} alt="Sorry, teacher! It's under Development yet" />);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, [language]);

  return (
    <div className='game'> 
      <div className="container">
        <div className="joke__wrapper">
          <div className="hug">
            <div className="joke_title">
              <h1>Joke Generator</h1>
              <select className="language" value={language} onChange={(e) => setLanguage(e.target.value)}>
                <option value="eng">English</option>
                <option value="uzb">Uzbek</option>
                <option value="meme">Meme</option>
              </select>
            </div>
            <div className="joke__text">{joke}</div>
            <div className="forBtn">
              <button className="nextBtn" onClick={fetchJoke}>One more? Click</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
