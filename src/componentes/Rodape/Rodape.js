import './rodape.css'
import facebook from "../../assets/imagens/fb.png";
import twitter from "../../assets/imagens/tw.png";
import instagram from "../../assets/imagens/ig.png";
import logo from "../../assets/imagens/logo.png";

export const Rodape = () => {
    return (
    <footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="facebook.com" target="_blank">
                        <img src={facebook} alt="" />
                    </a>
                </li>
                <li>
                    <a href="twitter.com" target="_blank">
                        <img src={twitter} alt="" />
                    </a>
                </li>
                <li>
                    <a href="instagram.com" target="_blank">
                        <img src={instagram} alt="" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src={logo} alt="" />
        </section>
        <section>
            <p>
                Desenvolvido por Alura.
            </p>
        </section>
    </footer>)
}
