import BtnLikeLink from "../components/BtnLikeLink/BtnLikeLink"

export default function HomePage(){
    return(
         <section className="home-page">
            <h1 className="home-title">You got the travel plans, we got the travel vans.</h1>
            <p className="home-paragraph">
              Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.
            </p>
            <BtnLikeLink variant="primary-btn" path="/vans" >Find your van</BtnLikeLink>
          </section>
    )
}