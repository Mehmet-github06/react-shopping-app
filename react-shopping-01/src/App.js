import Main from "./pages/Main";
import NewProduct from "./pages/NewProduct";
import ProductList from "./pages/ProductList";
import About from "./pages/About";
import Navs from "./components/Navs";
import { Routes ,Route} from "react-router-dom";




function App() {

  

  return (
   
    <div className=" app">

      
      <Navs/>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/newproduct" element={<NewProduct/>} />
        <Route path="/productlist" element={<ProductList/>}/>
        <Route path="/about" element={<About/>} />
      
      
    

      </Routes>
   

      
    </div>
  );
}

export default App;