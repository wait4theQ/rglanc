import React from "react";
import './App.css';


function Footer() {
    return (<footer className="Footer">
        
            <div className="links">
                <a href="/">Home</a>
                <a href="/contato">Sobre</a>
                <a href="/menu">Dúvidas</a>
                
            </div>
     
            <div className="instagram">
                <a
                    href="https://www.instagram.com/ritaleitecorretora/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={require('./img/instagram.png')} alt="Instagram"/>
                </a>
            </div>
            <div className="facebook">
                <a
                    href="https://www.facebook.com/RGlancamentosimobiliarios?mibextid=ZbWKwL"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={require('./img/fb.png')} alt="Facebook"/>
                </a>
            </div>
            <div className="direitos">
                Todos os direitos reservados &copy;RG Lançamentos. 2024  RG Lançamentos - CNPJ: 43.485.966/0001-79
            </div>
            <div className="border"></div>
            <div className="CreatedBy">
            Desenvolvido por:  <a href="/public" target="_blank"></a>
            </div>
        </footer>);
}

export default Footer;