import one from "../images/one.jpg"
import two from "../images/two.jpg"
import three from "../images/three.jpg"

function Productlist()
{
  return( <div className="products"> 
  <div class="box">
              <img src={one}/>
              <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>    
  </div>
  <div className="box">
      <img src={two} alt="villain"/>
      <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p> 
  </div>
  <div className="box">
      <img src={three} alt="Designs Club"/>
      <p>Designer Club-Be Spoke by Perfume Lounge Men's Perfume | Premium Long Lasting Perfume</p>
  </div>
</div>);
}

export default Productlist