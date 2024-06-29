import bannerImg from "../../assets/imagens/banner.png";
import "./Banner.css"

export const Banner = () =>{
    
    return (
        <header className="banner">
            <img src={bannerImg}  alt='banner'/>
        </header>
    )
}

