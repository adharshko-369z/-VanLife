import Home from "../components/Home/Home"
import BtnLikeLink from "../components/BtnLikeLink/BtnLikeLink"

export default function HomePage(){
    return(
         <Home>
            <Home.Title>You got the travel plans, we got the travel vans.</Home.Title>
            <Home.Paragraph>
              Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.
            </Home.Paragraph>
            <BtnLikeLink variant="primary-btn" path="/vans" >Find your van</BtnLikeLink>
          </Home>
    )
}