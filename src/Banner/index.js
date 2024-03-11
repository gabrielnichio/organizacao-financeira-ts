import org from "./images/Organização-Financeira.jpg";
import linkedin from "./images/linkedin.png";
import github from "./images/github.png";
import instagram from "./images/instagram.png";
import "./Banner.css"


const Banner = () => {
    return (
        <section className="banner">
            <div className="banner-main">
                <div className="banner-apresentacao">
                    <p>
                        Meu nome é Gabriel Favoretti Nichio. Estou começando a minha carreira de DEV Front End e decidi aprender um pouco mais sobre React.
                    </p>
                    <p>
                        Além de DEV, eu também sou investidor. Nos investimentos é importante ter organização. Por isso eu comecei esse projeto com o objetivo de montar uma site que ajude investidores do mundo inteiro a se organizarem financeiramente
                    </p>
                </div>
                <div className="banner-links">
                    <a href="https://www.linkedin.com/in/gabriel-fav/">
                        <img src={linkedin} alt="linkedin"></img>
                            Linkedin
                    </a>
                    <a href="https://github.com/gabrielnichio">
                        <img src={github} alt="github"></img>
                            Github
                    </a>
                    <a href="https://instagram.com/">
                        <img src={instagram} alt="instagram"></img>
                            Instagram
                    </a>
                </div>
            </div>
            <img src={org} alt="imagem-organizacao"></img>
        </section>
    )
}

export default Banner;