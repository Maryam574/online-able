import React from "react";
import "./Home.css";
import Product from "./Product";


function Home() {
    return (
        <div className="home">
        <div className="home__container">
          <img
            className="home__image"
            src="./images/home.PNG"
            alt=""
          />
          <div className="home__row">
          <Product
            id="12321341"
            title="Maybelline New York Fit Me Liquid Foundation Matte & Poreless Tube 120 Classic Ivory 18 ml."
            price={1000}
            rating={5}
            image="./images/1st.png"
          />
          <Product
            id="49538094"
            title="VOLUME' EXPRESS THE COLOSSAL WASHABLE MASCARA."
            price={800}
            rating={4}
            image="./images/2nd.png"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="LASTING FIX BANANA POWDER, LOOSE SETTING POWDER MAKEUP."
            price={1190}
            rating={3}
            image="./images/3rd.jpg"
          />
          <Product
            id="23445930"
            title="Satisfy all your beauty cravings! Get irresistible in an instant with this complete makeup kit for brows, face, lips & lashes!"
            price={390}
            rating={5}
            image="./images/4th.jpg"
          />
          <Product
            id="3254354345"
            title="BROW ULTRA SLIM DEFINING EYEBROW PENCIL."
            price={598.99}
            rating={4}
            image="./images/5th.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Finding the right shade of pink blush is a game-changer. It recreates the natural flush you get from a brisk walk and brings a glowing radiance to your whole face."
            price={1094.98}
            rating={4}
            image="./images/6th.jpg"
          />
        </div>
        </div>
      </div>
      );  
    
}

export default Home;
