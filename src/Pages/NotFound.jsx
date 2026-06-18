import BtnLikeLink from "../components/BtnLikeLink"

export default function NotFound(){
    return(
        <div className="not-found-page">
            <h1>Sorry, the page you were looking for was not found.</h1>
            <BtnLikeLink variant="secondary-btn" path="/">Return to home</BtnLikeLink>

        </div>
    )
}