export default function Home({children}){
    return <section className="home-page">{children}</section>
}

Home.Title = function HomeTitle({children}){
    return <h1 className="home-title">{children}</h1>
}

Home.Paragraph = function HomeParagraph({children}){
    return <p className="home-paragraph">{children}</p>
}