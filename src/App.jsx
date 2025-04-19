import 'bootstrap/dist/css/bootstrap.min.css';
import Input from './Components/Input.jsx'
import Div from './Components/Div.jsx'
import Button from './Components/Button.jsx'
import Search from './Components/Search.jsx'
import { useState, useEffect } from "react";
import ImageBoard from './Components/Image_Board.jsx';
import './index.css'
import Moodboard from './Components/MoodBoard.jsx';


const Access_ID = import.meta.env.VITE_UNSPLASH_KEY;
function App() {
  const [images, setImages] = useState([]);
  const [moodboard, setMoodboard] = useState(() => {
    const saved = localStorage.getItem('moodboard');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('moodboard', JSON.stringify(moodboard));
  }, [moodboard]);
  
  const fetchImage = async (query)=>{
    const res = await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${Access_ID}`);
    const data = await res.json();
    setImages(data.results);
  }

  const addToMoodboard = (img) => {
    if (!moodboard.find((item) => item.id === img.id)) {
      setMoodboard([...moodboard, img]);
    }
  };
 return (<>
 <Div cn="container-fluid bg-dark vw-100 vh-100 p-3 m-0 overflow-auto">
  <Div cn="row mb-2 m-0">
    <Div cn="col-12 text-center text-warning name">
      VisionBoard-AI
    </Div>
  </Div>
  <Div cn="row justify-content-center align-items-center p-0 m-0 ">  
    <Search onSearch={fetchImage}></Search>
  </Div>
  <Div cn="row justify-content-center align-items-center p-0 m-0 ">
    <ImageBoard images={images} onAdd={addToMoodboard}></ImageBoard> 
  </Div>
  <Div>
    <Moodboard moodboard={moodboard} setMoodboard={setMoodboard} />
  </Div>
 </Div>
 </>)
}

export default App
