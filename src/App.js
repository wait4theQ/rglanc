import React from 'react';
import Slider from 'react-slick';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './App.css';
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import Footer from './footer';
import sobre from './img/avatar1.png';
import rita from './img/rita.png';
//import mark from './img/mark.png';
import logo1 from './img/Logo.png';
import logo2 from './img/logo2.png';
import banner from './img/terno.png';
import avatar1 from './img/avatar1.png';
import avatar2 from './img/avatar2.png';
import avatar3 from './img/avatar3.png';
import avatar4 from './img/avatar4.png';
//import image from './img/picture.jpeg';
//import cutout from './img/cutout.png';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  // Nomes aleatórios para os clientes
  const names = [
    "Felipe Cordeiro",
    "Isabela Mendes",
    "Lucas Oliveira",
    "Camila Santos",
  ];

  const testimonialsData = [
    { id: 1, text: '"Curso incrível! Recomendo a todos."', avatar: avatar1, name: names[0] },
    { id: 2, text: '"Ótimo suporte e conteúdo de alta qualidade."', avatar: avatar2, name: names[1] },
    { id: 3, text: '"Estou muito satisfeito com o curso!"', avatar: avatar3, name: names[2] },
    { id: 4, text: '"Excelente curso e equipe dedicada."', avatar: avatar4, name: names[3] },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (<div className="App">
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
      {/*<div className="banner-text"></div>*/}
      <div className="banner-content">
        <div className="corretor-section">
          <h2>Conheça o curso:
            <p className="creci-tti">
              CORRETOR CRECI TTI
            </p>
            Uma parceria autorizada de vendas do
            Instituto Monitor. <br/>Matrículas
            abertas!
          </h2>
          {/*<a href="/pagina-de-matricula" className="matricule-se-button">*/}
          {/*  Matricule-se*/}
          {/*</a>*/}
          {/*<h2>CORRETOR CRECI TTI</h2>*/}
          <p>✔️Duração de 6 meses</p>
          <p>✔️Nível técnico com diploma reconhecido em todo Brasil</p>
          <p>✔️Carteira de estágio para início imediato</p>
          <p>✔️Aulas 100% online e provas presenciais no Polo de sua cidade</p>
          <br/>
          <div className='corretor-section2'>
            <p>Somos uma empresa parceira/autorizada de vendas do INSTITUTO
MONITOR. Compre com segurança e pague o MENOR PREÇO. Em caso
de dúvidas confira nosso cadastro diretamente no sit e ofiicial do
Instituto Monitor através do telefone Atendimento/vendas.
Meu código de convênio é C1131C.
</p>
          </div>
          <a href="/saiba-mais" className="saiba-mais-button">
            Saiba mais
          </a>
          <button className="matricule-se-button"  onClick={() => window.location.href = 'https://www.alboompay.com/RitaLeite/button/65306fc07b503d0026e77449'}>
            Matricule-se
          </button>
        </div>
      </div>
    </div>
    <div className="syllabus-section" style={{background: '#133855', color: '#e3e2e2'}}>
      <h1>PROGRAMA DO CURSO</h1>
        <div className="syllabus-section-content">
          <div className="module 1">
          <h5>Módulo I - Básico</h5>
          <ul>
            <li>Comunicação Empresarial</li>
            <li>Fundamentos de Gestão</li>
              <li>Legislação e Ética</li>
                <li>Informática Aplicada</li>
                  <li>Comportamento Organizacional</li>
          </ul>
          </div>
          
          <div className="module 2">
          <h5>Módulo II - Qualificação Profissional de Assistente em Transações Imobiliárias</h5>
            <ul>
              <li>Matemática Financeira</li>
              <li>Desenho Arquitetônico e Noções de Construção Civil</li>
              <li>Economia e Estrutura de Mercados</li>
              <li>Gestão de Marketing e Vendas</li>
              <li>Operações Imobiliárias</li>
            </ul>
          </div>
        </div>
    </div>
    <div className="sobre-o-curso-section" style={{ background: '#f5f5f5', padding: '20px 0' }}>
    <div className="sobre-o-curso-image">
      {/* Adicione o caminho da imagem que deseja exibir */}
      <img src={sobre} alt="Imagem do Curso" style={{ maxWidth: '100%', width: '200px' }} />
    </div>
  <h3>Requisitos para Matrícula:</h3>
  <div className="sobre-o-curso-content">
   
    <div className="sobre-o-curso-info">
      
      <ul>
        <p>Mínimo 18 anos</p>
        <p>Cópia da Certidão de Nascimento ou Casamento</p>
        <p>Cópia do RG e CPF</p>
        <p>Foto</p>
        <p>Cópia autenticada do Certificado de Conclusão do Ensino Médio (antigo 2º Grau) e Histórico Escolar (com lauda ou visto-confere) ou comprovante de que está cursando o ensino médio</p>
      </ul>
    </div>
  </div>
</div>
    <div className="testimonials-section" style={{background: ''}}>
      <h2>Depoimentos de Clientes</h2>
      <Slider {...settings}>
        {testimonialsData.map((testimonial) => (<div key={testimonial.id} className="testimonial">
          <img src={testimonial.avatar} alt={`Cliente ${testimonial.id}`} className="client-image"/>
          <p style={{color: 'black'}}>{`${testimonial.name} - ${testimonial.text}`}</p>
        </div>))}
      </Slider>
    </div>
    <div className="map-section">
      
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
    <FloatingWhatsApp
        phoneNumber="(11) 997075-3810" 
        accountName="Ana Rita corretora de lançamentos" 
        avatar={rita} 
        chatMessage="Olá, como posso ajudar?" 
        statusMessage="RG Lançamentos"
        avatarStyle={{ width: '50px', height: '50px' }}
      />
    <Footer></Footer>
    
  </div>);
}

export default App;
