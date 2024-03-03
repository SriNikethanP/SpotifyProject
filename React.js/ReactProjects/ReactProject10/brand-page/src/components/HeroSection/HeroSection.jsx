import "../HeroSection/HeroSection.css";
export default function Hero() {
  return (
    <main>
      <div className="heroContent">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="heroBtn">
          <button className="shopNow">Shop Now</button>
          <button className="category">Category</button>
        </div>
        <div className="shopping">
          <p>Also Available On</p>
          <div className="shoppingLogos">
            <img src="/images/flipkart.png" alt="flipkart" />
            <img src="/images/amazon.png" alt="amazon" />
          </div>
        </div>
      </div>
      <div className="heroImage">
        <img src="/images/shoe_image.png" alt="HeroImage" />
      </div>
    </main>
  );
}
