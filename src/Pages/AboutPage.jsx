import About from "../components/About/About";
import BtnLikeLink from "../components/BtnLikeLink/BtnLikeLink";
import  Card  from "../components/Card/Card";
import aboutImg from "../assets/image-55.png"

export default function Aboutpage(){
    return(
        <About>
            <About.Image src={aboutImg} alt="A guy enjoying vanlife" />
            <About.TextContainer>
              <About.Title>Don’t squeeze in a sedan when you could relax in a van.</About.Title>
              <About.Paragraph>
                Our mission is to enliven your road trip with the perfect travel van rental.
                Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                (Hitch costs extra 😉)
              </About.Paragraph>
              <About.Paragraph>
                Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
              </About.Paragraph>
              <Card>
                <Card.Title>Your destination is waiting.</Card.Title>
                <Card.Title>Your van is ready.</Card.Title>
                <BtnLikeLink variant="secondary-btn" path="/vans">Explore our vans</BtnLikeLink>
              </Card>
            </About.TextContainer>
          </About>  
    )
}