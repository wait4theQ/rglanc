import React from 'react';
import Slider from 'react-slick';
import {MapContainer, TileLayer, Marker, Popup, CircleMarker} from 'react-leaflet';
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';
import './App.css';
import {FloatingWhatsApp} from 'react-floating-whatsapp'
import Footer from './footer';
//import sobre from './img/avatar1.png';
import rita from './img/rita.png';
//import mark from './img/mark.png';
import logo1 from './img/logo-dark.png';
import logo2 from './img/logo2.png';
import banner from './img/terno.png';
import avatar1 from './img/avatar1.png';
import avatar2 from './img/avatar2.png';
import avatar3 from './img/avatar3.png';
import avatar4 from './img/avatar4.png';
import image from './img/picture.jpeg';
//import cutout from './img/cutout.png';
import requirements from './img/requirements.png';
import demanda from './img/demanda.png';
import time from './img/time.png';
import money from './img/money.png';
import carreira from './img/carreira.png';


import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function App () {
	const customIcon = new L.Icon({
		iconUrl: require('./img/mark.png'),
		iconSize: [32, 32], 
		iconAnchor: [16, 32], 
		popupAnchor: [0, -32], 
	  });
		
		const names = ["Felipe Cordeiro", "Isabela Mendes", "Lucas Oliveira", "Camila Santos",];

		const testimonialsData = [{id: 1, text: '"Curso incrível! Recomendo a todos."', avatar: avatar1, name: names[0]},
				{id: 2, text: '"Ótimo suporte e conteúdo de alta qualidade."', avatar: avatar2, name: names[1]},
				{id: 3, text: '"Estou muito satisfeito com o curso!"', avatar: avatar3, name: names[2]},
				{id: 4, text: '"Excelente curso e equipe dedicada."', avatar: avatar4, name: names[3]},];

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
						<link
								href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
								rel="stylesheet"/>
						<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
						<link
								href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
								rel="stylesheet"/>
						<div className="logos-container">
								<div className="logo-container">
								<a href="/">
										<img
												src={logo1}
												alt="Logo 1"
												className="logo1"
										/>
								</a>
								<h1>RG Lançamentos</h1>
								</div>
								<a href="https://www.institutomonitor.com.br">
										<img
												src={logo2}
												alt="Logo 2"
												className="logo2"
										/>
								</a>
						</div>


						<nav className="navigation">

								<ul>
										<li><a href="#home">Home</a></li>
										<li><a href="#sobre">Sobre</a></li>
										<li><a href="#vantagens">Vantagens</a></li>
								</ul>


						</nav>
						
				</header>
				<div className="banner" id='home'>
						<div className="banner-content">
								<img
								src={banner}
								alt="Banner"
								className="banner-image"
						    />
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
										<p>✔️ Duração de 6 meses</p>
										<p>✔️ Nível técnico com diploma reconhecido em todo Brasil</p>
										<p>✔️ Carteira de estágio para início imediato</p>
										<p>✔️ Aulas 100% online e provas presenciais no Polo de sua cidade</p>
										<br/>

										{/*<a href="/saiba-mais" className="saiba-mais-button">*/}
										{/*		Saiba mais*/}
										{/*</a>*/}
										<button className="matricule-se-button"
										        onClick={() => window.location.href = 'https://www.alboompay.com/RitaLeite/button/65306fc07b503d0026e77449'}>
												Matricule-se
										</button>
										<div className='corretor-section2'>
												<p>Somos uma empresa parceira/autorizada de vendas do
														<b> INSTITUTO MONITOR</b>. Compre com segurança e pague o MENOR PREÇO. Em caso
														de dúvidas confira nosso cadastro diretamente no site oficial do
														Instituto Monitor através do telefone Atendimento/vendas.
														Meu código de convênio é C1131C.
												</p>
										</div>
								</div>
								<div className="aboutus-section">
										<img src={image} alt="About Us" className="aboutus-section-image"/>
										<div className="aboutus-text">
										<h2> Quem sou eu?</h2>
												<h4>Rita Leite</h4>
										<p>Eu sou especialista em lançamentos imobiliários, estou trazendo essa oportunidade em parceria com
												Instituto Monitor para você.
										</p>
										<p>10 anos no mercado</p>
                                        <p>+ de 250 unidades vendidas</p>
								</div>
								<div className="social-media" style={{marginLeft: '-1px'}}>
            <div className="instagram">
                <a
                    href="https://www.instagram.com/ritaleitecorretora/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={require('./img/instagram.png')} alt="Instagram2"/>
                </a>
                </div>
                <div className="facebook">
                <a
                    href="https://www.facebook.com/RGlancamentosimobiliarios?mibextid=ZbWKwL"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={require('./img/fb.png')} alt="Facebook2"/>
                </a>
            </div>
						</div>
								</div>
						</div>

				</div>
				<div className="syllabus-section" id='sobre' style={{background: '#133855', color: '#e3e2e2'}}>
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
										<h5>Módulo II - Qualificação Profissional de Assistente em Transações Imobiliárias</h5>
										<ul>
												<li> Matemática Financeira</li>
												<li> Desenho Arquitetônico e Noções de Construção Civil</li>
												<li> Economia e Estrutura de Mercados</li>
												<li> Gestão de Marketing e Vendas</li>
												<li> Operações Imobiliárias</li>
										</ul>
								</div>
						</div>
				</div>
				<div className="vantagens-curso" id='vantagens' style={{background: '#133855', padding: '20px 0'}}>
						<h1>VANTAGENS</h1>

						<div className="vantagens-content">
								<img src={demanda} alt="vantagem 1"/>
								<h3>ALTA DEMANDA NO MERCADO</h3>
								<p>Segundo o COEFI, para atender a demanda do mercado, o número de corretores deveria ser pelo menos o
										dobro.</p>
						</div>
						<div className="vantagens-content">
								<img src={time} alt='vantagem 2'/>
								<h3>FLEXIBILIDADE DE HORÁRIO</h3>
								<p>O corretor de imóveis tem uma agenda flexível com horários alternativos e com isso ganha tempo para
										dar atenção a outras atividades econômicas.</p>
						</div>
						<div className="vantagens-content">
								<img src={money} alt='vantagem 3'/>
								<h3>REMUNERAÇÃO ALTA</h3>
								<p>A comissão do corretor pode chegar a 6% do valor do imóvel. se vender um imóvel de 360 mil reais, sua
										comissão será de R$ 21.600,00 ao atuar de forma autônoma e em parceria com uma imobiliária, a
										comissão pode ser de R$ 10.800,00.</p>
						</div>
						<div className="separator"></div>
						<div className="vantagens-content">
								<img src={carreira} alt='vantagem 4'/>
								<h3>UMA CARREIRA SÓLIDA</h3>
								<p>O mercado imobiliário é cheio de oportunidades de crescimento. Se o profissional se dedicar ele
										consegue construir uma carreira de sucesso no segmento imobiliário.</p>
						</div>
				</div>

				<div className="sobre-o-curso-section" >
						<div className="sobre-o-curso-box">
						<div className="sobre-o-curso-image">
								{/* Adicione o caminho da imagem que deseja exibir */}
								<img src={requirements} alt="Imagem do Curso" />
						</div>

						<div className="sobre-o-curso-content">
								<h2>Requisitos para Matrícula:</h2>
								<div className="sobre-o-curso-info">

										<ul>
												<p>✔️ Mínimo 18 anos</p>
												<p>✔️ Cópia da Certidão de Nascimento ou Casamento</p>
												<p>✔️ Cópia do RG e CPF</p>
												<p>✔️ Foto</p>
												<p>✔️ Cópia autenticada do Certificado de Conclusão do Ensino Médio (antigo 2º Grau) e Histórico
														Escolar (com lauda ou visto-confere) ou comprovante de que está cursando o ensino médio</p>
										</ul>
								</div>
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

				<MapContainer center={[-23.546251771783243, -46.62364273558242]} zoom={15} style={{ height: '300px', width: '80%', margin: '20px auto' }}>
  <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  />
  <Marker position={[-23.546251771783243, -46.62364273558242]} icon={customIcon}>
   
  </Marker>
</MapContainer>
				</div>
				<FloatingWhatsApp
						phoneNumber="(11) 997075-3810"
						accountName="Ana Rita corretora de lançamentos"
						avatar={rita}
						chatMessage="Olá, como posso ajudar?"
						statusMessage="RG Lançamentos"
						avatarStyle={{width: '50px', height: '50px'}}
				/>
				<Footer></Footer>

		</div>);
}

export default App;
