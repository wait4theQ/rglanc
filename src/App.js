import React, {useState} from "react";
import Slider from "react-slick";
//import { MapContainer, TileLayer,  LayerGroup, Marker, Popup, } from 'react-leaflet';
//import L from 'leaflet';
import Navbar from './components/navbar/index.js'
import Banner from "./components/banner/index.js";
import Location from "./components/location/index.js";
import "leaflet/dist/leaflet.css";
import "./App.css";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import Footer from "./footer";
import rita from "./img/picture.jpeg";
import avatar1 from "./img/avatar1.png";
import avatar2 from "./img/avatar2.png";
import avatar3 from "./img/avatar3.png";
import avatar4 from "./img/avatar4.png";
import requirements from "./img/requirements.png";
import demanda from "./img/demanda.png";
import time from "./img/time.png";
import money from "./img/money.png";
import carreira from "./img/carreira.png";
import Polos from "./polos.js";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const names = [
    "Felipe Cordeiro",
    "Isabela Mendes",
    "Lucas Oliveira",
    "Camila Santos",
  ];

  const testimonialsData = [
    {
      id: 1,
      text: '"Curso incrível! Recomendo a todos."',
      avatar: avatar1,
      name: names[0],
    },
    {
      id: 2,
      text: '"Ótimo suporte e conteúdo de alta qualidade."',
      avatar: avatar2,
      name: names[1],
    },
    {
      id: 3,
      text: '"Estou muito satisfeito com o curso!"',
      avatar: avatar3,
      name: names[2],
    },
    {
      id: 4,
      text: '"Excelente curso e equipe dedicada."',
      avatar: avatar4,
      name: names[3],
    },
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
    <Navbar/>
        <Banner></Banner>

        <div className="syllabus-section">
          <h1>PROGRAMA DO CURSO</h1>
          <div className="syllabus-section-content">
            <div className="module 1">
              <h5>Módulo I - Básico</h5>
              <ul>
                <li> Comunicação Empresarial</li>
                <li> Fundamentos de Gestão</li>
                <li> Legislação e Ética</li>
                <li> Informática Aplicada</li>
                <li> Comportamento Organizacional</li>
              </ul>
            </div>

            <div className="module 2">
              <h5>Módulo II - Qualificação Profissional </h5>
              <ul>
                <li> Matemática Financeira</li>
                <li> Desenho Arquitetônico e Noções de Construção Civil</li>
                <li> Economia e Estrutura de Mercados</li>
                <li> Gestão de Marketing e Vendas</li>
                <li> Operações Imobiliárias</li>
              </ul>
            </div>
            <div className="course-numbers">
              <h5>Mais Informações</h5>
              <p>
                "Após a confirmação de pagamento você receberá um e-mail do
                instituto monitor para realizar a matrícula, escolher o polo e
                enviar documentos exigidos para dar início no curso!"
              </p>
              <ul>
                <li>
                  <b>Carga horária:</b> 800 horas
                </li>
                <li>
                  <b>Estágio Profissional:</b> 150 horas
                </li>
                <li>
                  <b>Carga horária total:</b> 950 horas
                </li>
                <li>
                  <b>Total de avaliações:</b> 10 Provas Presenciais
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
            className="vantagens-curso"
            id="vantagens"
            style={{background: "#133855", padding: "20px 0"}}
        >
          <h1>VANTAGENS</h1>

          <div className="vantagens-section">
            <div className="vantagens-content">
              <img src={demanda} alt="vantagem 1"/>
              <h3>ALTA DEMANDA NO MERCADO</h3>
              <p>
                Segundo o COEFI, para atender a demanda do mercado, o número de
                corretores deveria ser pelo menos o dobro.
              </p>
            </div>
            <div className="vantagens-content">
              <img src={time} alt="vantagem 2"/>
              <h3>FLEXIBILIDADE DE HORÁRIO</h3>
              <p>
                O corretor de imóveis tem uma agenda flexível com horários
                alternativos e com isso ganha tempo para dar atenção a outras
                atividades econômicas.
              </p>
            </div>
            <div className="vantagens-content">
              <img src={money} alt="vantagem 3"/>
              <h3>REMUNERAÇÃO ALTA</h3>
              <p>
                A comissão do corretor pode chegar a 6% do valor do imóvel. se
                vender um imóvel de 360 mil reais, sua comissão será de R$
                21.600,00 ao atuar de forma autônoma e em parceria com uma
                imobiliária, a comissão pode ser de R$ 10.800,00.
              </p>
            </div>
            <div className="separator"></div>
            <div className="vantagens-content">
              <img src={carreira} alt="vantagem 4"/>
              <h3>UMA CARREIRA SÓLIDA</h3>
              <p>
                O mercado imobiliário é cheio de oportunidades de crescimento. Se
                o profissional se dedicar ele consegue construir uma carreira de
                sucesso no segmento imobiliário.
              </p>
            </div>
          </div>
        </div>

        <div className="sobre-o-curso-section">
          <div className="quem-sou-section" id="sobre">
            <div className="quem-sou-box">
              <div className="quem-sou-image">
                <img src={rita} alt="rita png"/>
              </div>
              <div className="quem-sou-content">
                <h2>Quem sou?</h2>
                <p>Rita Leite</p>
              </div>
              <div className="quem-sou-info">
                <p>
                  Especialista em lançamentos imobiliários, tenho 13 anos no
                  mercado e sou Proprietária da RG Lançamentos.
                </p>
              </div>
              <div className="chamada-instagram">
                <p>
                  Explore o fascinante mundo dos imóveis e aprimore sua carreira!
                  🏡✨ Me siga no Instagram para dicas, oportunidades e cursos
                  exclusivos
                </p>
              </div>
              <div className="social-media">
                <div className="instagram-sobre">
                  <a
                      href="https://www.instagram.com/ritaleitecorretora/"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                    <img src={require("./img/instagram.png")} alt="Instagram"/>
                    ritaleitecorretora
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="sobre-o-curso-box">
            <div className="sobre-o-curso-image">
              {/* Adicione o caminho da imagem que deseja exibir */}
              <img src={requirements} alt="Imagem do Curso"/>
            </div>

            <div className="sobre-o-curso-content">
              <h2>Requisitos:</h2>
              <div className="sobre-o-curso-info">
                <ul>
                  <p>✔️ Mínimo 18 anos</p>
                  <p>✔️ Cópia da Certidão de Nascimento ou Casamento</p>
                  <p>✔️ Cópia do RG e CPF</p>
                  <p>✔️ Foto</p>
                  <p>
                    ✔️ Cópia autenticada do Certificado de Conclusão do Ensino
                    Médio (antigo 2º Grau) e Histórico Escolar (com lauda ou
                    visto-confere) ou comprovante de que está cursando o ensino
                    médio
                  </p>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonials-section">
          <h2>Depoimentos de Clientes</h2>
          <Slider {...settings}>
            {testimonialsData.map((testimonial) => (<div key={testimonial.id} className="testimonial">
                  <img
                      src={testimonial.avatar}
                      alt={`Cliente ${testimonial.id}`}
                      className="client-image"
                  />
                  <p
                      style={{color: "black"}}
                  >{`${testimonial.name} - ${testimonial.text}`}</p>
                </div>))}
          </Slider>
        </div>
        <div className="map-sec" id="unidades">
          <h1>Unidades</h1>
          <p>
            Como instituição de educação a distância que quer acompanhar de perto
            o desenvolvimento dos alunos, oferecemos a melhor estrutura e diversas
            unidades para que você tenha mais opções nos seus estudos.
          </p>
          <p>
            Confira abaixo o endereço de nossas Unidades e Polos da cidade de São
            Paulo
          </p>

          <Location/>
        </div>
        <FloatingWhatsApp
            phoneNumber="(11) 997075-3810"
            accountName="Ana Rita corretora de lançamentos"
            avatar={rita}
            chatMessage="Olá, como posso ajudar?"
            statusMessage="RG Lançamentos"
            avatarStyle={{width: "50px", height: "50px"}}
            allowClickAway="true"
            buttonStyle={{position: "fixed", left: "20px", bottom: "30px"}}
            chatboxStyle={{position: "fixed", left: "20px", bottom: "120px"}}
        />
        <Footer></Footer>
      </div>);
}

export default App;
