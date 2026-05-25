export default function About({children}){
    return <section className="about-page">{children}</section>
}

About.Image = function AboutImage({src,alt}){
    return <img  className="about-image" src={src} alt={alt} />
}

About.TextContainer = function AboutTextContainer({children}){
    return <div className="about-text-contanier">{children}</div>
}

About.Title = function AboutTitle({children}){
    return <h1 className="about-title">{children}</h1>
}

About.Paragraph = function AboutParagraph({children}){
    return <p className="about-paragraph">{children}</p>
}