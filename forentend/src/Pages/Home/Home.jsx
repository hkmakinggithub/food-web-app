
import Header from '../../Components/Header/Header'
import Explore from '../../Components/ExploreMenu/Explore'
import { useState } from 'react'
import Fooddisplay from '../../Components/Display/Fooddisplay'
import Appmedia from '../../Components/App-media/Appmedia'

const Home = (props) => {
  const [category, setcategory] = useState("All")
  return (
    <div>
      <Header/>
      <Explore category={category} setcategory={setcategory}/>
      <Fooddisplay category={category}/>
      <Appmedia name="tomato"  title="fro better exprience download"/>
    </div>
  )
}


export default Home