import { Routes,Route } from "react-router-dom";
import Navigation from "./components/navigation/navigation";
import Home from "./components/home";
import Products from "./data";
import Discription from "./components/productdetails/discription";
import Cart from  "./components/cart/cart"
import Placedorder from "./components/placedorder";

const App=()=>{
 
  return(
    <Routes>
      <Route path="/" element={<Navigation/>}>
          <Route path="/" element={<Home Products={Products}/>}/>
          <Route path="/discription/" element={<Discription/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/oderplaced" element={<Placedorder/>}/>
      </Route>
    </Routes>
  )
}



export default App;

/*
class App extends Component
{
  render()
{
  return(
    <Routes>
      <Route path='' element={<Navigation/>}>
      <Route path='/' element={<Home Products={Products}/> }/>
      <Route path='/cart' element={<Cart/>}/>;
      <Route path='/success' element={<Placedorder/>}/>
      <Route path='/discription' element={<Discription/>}/>
      </Route>
    </Routes>
    
  );
}

};
<Route path='/products/:id' element={<Discription/>}/>*/