import { HomeContainer } from "./index.styles";
import Header from '../Header'
import { useEffect } from "react";
import { useState } from "react";
import {HomeMainContainer,CartContainer,ItemsContainer} from "./index.styles";
import Cart from '../Cart'
import CategorySection from '../CategorySection'
import ItemsSections from '../ItemsSections'
const Home=()=>
{
    const [cartItems, setCartItems] = useState([]);
      useEffect(() => {
        const fetchingData = async () => {
          const Url="https://apis2.ccbp.in/nxt-mart/category-list-details";
          const fetchingresponse=await fetch(Url);
          const data=await fetchingresponse.json();
          console.log(data);
          // {data.categories.map((item) =>console.log(item.name) )}
         
          setCartItems(data.categories);
      }
      fetchingData();
      
    },[]);
    return(
        <HomeContainer>
            <Header />
            <HomeMainContainer>
              <CartContainer>
                <ul>
                  {cartItems.map((item) => (
                    
                    <CategorySection key={item.name} item={item.name} />
                  ))}
                  
                </ul>
              </CartContainer>
              <ItemsContainer>
                   <ul>
                    {cartItems.map((item) => (
                      <ItemsSections key={item.name} item={item.products} />
                    ))}
                   </ul>
              </ItemsContainer>
            </HomeMainContainer>
        </HomeContainer>
    )
}
export default Home;