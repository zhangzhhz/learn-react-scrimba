import React, { useState, useEffect } from 'react';

/**
 * Initialize state to save the following data:
 *      top text
 *      bottom text
 *      random image (intialize with "http://i.imgflip.com/1bij.jpg")
 */
/**
 * We'll be using an API that provides a bunch of meme images.
 * 
 * Your task:
 * make an API call to "https://api.imgflip.com/get_memes" and save the 
 * data that comes back (`response.data.memes`) to a new state property
 * called `allMemeImgs`. (The data that comes back is an array)
 */
function MemeGenerator(props) {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [randomImg, setRandomImg] = useState('http://i.imgflip.com/1bij.jpg');
  const [allMemeImgs, setAllMemeImgs] = useState([]);

  useEffect(() => {
    const uri = 'https://api.imgflip.com/get_memes';
    fetch(uri)
      .then(resp => resp.json())
      .then(json => {
        setAllMemeImgs(json.data.memes);
        return json.data.memes;
      })
      .then(memes => console.log(memes[0]))
      .catch(err => console.error(err));
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    const funcMap = {
      topText: setTopText,
      bottomText: setBottomText,
    };
    funcMap[name](value);
  }

  function onSubmit(e) {
    e.preventDefault();
    const randomIdx =  Math.floor((Math.random() * allMemeImgs.length))
    setRandomImg(allMemeImgs[randomIdx].url);
  }


  return (
    <div>
      <form className="meme-form" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Top Text"
          value={topText}
          name="topText"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Bottom Text"
          value={bottomText}
          name="bottomText"
          onChange={handleChange}
        />
        <button>Gen</button>
      </form>
      <div className="meme">
        <img src={randomImg} alt="" />
        <h2 className="top">{topText}</h2>
        <h2 className="bottom">{bottomText}</h2>
      </div>
    </div>
  );
}

export default MemeGenerator;

