import 'bootstrap/dist/css/bootstrap.min.css';
import Input from './Components/Input.jsx'
import Div from './Components/Div.jsx'
import Button from './Components/Button.jsx'
import Search from './Components/Search.jsx'
import { useState } from "react";
import ImageBoard from './Components/Image_Board.jsx';
import './index.css'

const Access_ID = import.meta.env.VITE_UNSPLASH_KEY;
function App() {
  const [images, setImages] = useState([]);
  const fetchImage = async (query)=>{
    const res = await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${Access_ID}`);
    const data = await res.json();
    setImages(data.results);
  }
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
    <ImageBoard images={images}></ImageBoard> 
  </Div>
 </Div>
 </>)
}

export default App
