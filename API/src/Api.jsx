import {useState,React} from 'react'
import './Api.css';
import axios from 'axios';

const Api = () => {
    const [Image, setImage] = useState([])
    const getImages= async ()=>{
        try{
            const getimage=await axios.get("https://picsum.photos/v2/list")
            const data=getimage.data;
            setImage(data)
        console.log(Image)
        
        }
        catch(error){
            console.log('Error in Fetching Images')
        }
        
    }
  return (
    <div>
      <button onClick={()=>{getImages()} }className='btn'>Get Images</button>

      <div className='imgg'>
        {Image.map((elem,i)=>{
            return <img key={i} src={elem.download_url} width={300} height={300}/>
        })}
      </div>
    </div>
  )
}

export default Api
