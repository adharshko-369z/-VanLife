import BtnLikeLink from "../components/BtnLikeLink";
import aboutImg from "../assets/image-55.png"

export default function About(){
    return(
        <section className="about-page">
            <img className="about-image" src={aboutImg} alt="A guy enjoying vanlife" />
            <div className="about-text-contanier">
              <h1 className="about-title">Don’t squeeze in a sedan when you could relax in a van.</h1>
              <p className="about-paragraph">
                Our mission is to enliven your road trip with the perfect travel van rental.
                Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                (Hitch costs extra 😉)
              </p>
              <p className="about-paragraph">
                Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
              </p>
              <div className="about-card">
                <h2>Your destination is waiting.</h2>
                <h2>Your van is ready.</h2>
                <BtnLikeLink variant="secondary-btn" path="/vans">Explore our vans</BtnLikeLink>
              </div>
            </div>
          </section>  
    )
}