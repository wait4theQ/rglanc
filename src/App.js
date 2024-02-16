import React from 'react';
import Slider from 'react-slick';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './App.css';
import logo1 from './img/Logo.png';
import logo2 from './img/logo2.png';
import banner from './img/Features.png';
import avatar1 from './img/avatar1.png';
import avatar2 from './img/avatar2.png';
import avatar3 from './img/avatar3.png';
import avatar4 from './img/avatar4.png';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  const testimonialsData = [
    { id: 1, text: "Curso incrível! Recomendo a todos.", avatar: avatar1 },
    { id: 2, text: "Ótimo suporte e conteúdo de alta qualidade.", avatar: avatar2 },
    { id: 3, text: "Estou satisfeito com minha compra.", avatar: avatar3 },
    { id: 4, text: "Excelente curso e equipe dedicada.", avatar: avatar4 },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="App">
      <header className="App-header">
        <link
            href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
            rel="stylesheet"/>
        <div className="logo-container">
          <a href="/">
            <img
                src={logo1}
                alt="Logo 1"
                className="logo1"
            />
          </a>
          <a href="/">
            <img
                src={logo2}
                alt="Logo 2"
                className="logo2"
            />
          </a>
        </div>
        <nav className="navigation">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/sobre">Sobre</a></li>
            <li><a href="/duvidas">Dúvidas</a></li>
          </ul>
        </nav>
      </header>
      <div className="banner">
        <img
            src={banner}
            alt="Banner"
            className="banner-image"
        />
        <div className="banner-content">
          <button className="matricule-se-button" onClick={() => window.location.href = '/pagina-de-matricula'}>
            Matricule-se
          </button>
        </div>
      </div>
      {/*<div className="course-section">*/}
      {/*  <h2>Conheça o curso CRECI TTI, uma parceria autorizada de vendas do Instituto Monitor. Matrículas abertas!</h2>*/}
      {/*  <a href="/pagina-de-matricula" className="matricule-se-button">*/}
      {/*    Matricule-se*/}
      {/*  </a>*/}
      {/*</div>*/}
      <div className="corretor-section">
        <h2>Conheça o curso CORRETOR CRECI TTI, uma parceria autorizada de vendas do Instituto Monitor. <br/>Matrículas abertas!</h2>
        {/*<a href="/pagina-de-matricula" className="matricule-se-button">*/}
        {/*  Matricule-se*/}
        {/*</a>*/}
        {/*<h2>CORRETOR CRECI TTI</h2>*/}
        <br/>
        <p>Duração de 6 meses</p>
        <p>Nível técnico com diploma reconhecido em todo Brasil</p>
        <p>Carteira de estágio para início imediato</p>
        <p>Aulas 100% online e provas presenciais no Polo de sua cidade</p>
        <br/>
        <a href="/saiba-mais" className="saiba-mais-button">
          Saiba mais
        </a>
      </div>
      <div className="testimonials-section" style={{background: 'white'}}>
        <h2>Depoimentos de Clientes</h2>
        <Slider {...settings}>
          {testimonialsData.map((testimonial) => (<div key={testimonial.id} className="testimonial">
              <img src={testimonial.avatar} alt={`Cliente ${testimonial.id}`} className="client-image" />
              <p style={{ color: 'black' }}>{`"${testimonial.text}"`}</p>
            </div>
          ))}
        </Slider>
      </div>
      <div className="map-section">
        <h2>Localização</h2>
        <MapContainer center={[-23.545698669709832, -46.623473980967006]} zoom={15} style={{ height: '300px', width: '80%', margin: '20px auto' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[-23.545698669709832, -46.623473980967006]}>
            <Popup>
              <img src={require('./img/mark.png')} alt="Imagem do Marcador" style={{ maxWidth: '100%' }} />
            </Popup>
          </Marker>
        </MapContainer>
      </div>
      <footer className="footer">
        <div className="payment-options">
          <h3>Formas de Pagamento</h3>
          {/* Adicione os ícones ou imagens dos métodos de pagamento aceitos */}
          <img src={require('./img/visa.png')} alt="Visa" />
          <img src={require('./img/master.png')} alt="Mastercard" />
          <img src={require('./img/hiper.png')} alt="PayPal" />
          {/* Adicione mais imagens conforme necessário */}
        </div>
        <div className="social-media">
          <h3>Redes Sociais</h3>
          
          <a href="https://www.instagram.com/seu-instagram" target="_blank" rel="noopener noreferrer">
            <img src={require('./img/instagram.png')} alt="Instagram" />
          </a>
          <a href="https://www.facebook.com/seu-facebook" target="_blank" rel="noopener noreferrer">
            <img src={require('./img/instagram.png')} alt="Facebook" />
          </a>
        </div>
        <div className="navigation-links">
          <h3>Navegação</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/sobre">Sobre</a></li>
            <li><a href="/duvidas">Dúvidas</a></li>
          </ul>
        </div>
        <div className="rights">
          <p>RG Lançamentos - 2023 &copy; Todos os direitos reservados &#174;</p>
          <p>Desenvolvido por: <a href="https://www.seusite.com" target="_blank" rel="noopener noreferrer">Seu Nome</a></p>
        </div>
      </footer>
    </div>
  );
}

export default App;
