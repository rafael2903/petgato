import Main from "../../components/Main";
import cintia from "../../assets/cintia_lorenzzo.jpg";
import mandragora from "../../assets/mandragora.jpg";
import floquinho from "../../assets/floquinho.jpg";
import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import TitlesContainer from "../../components/TitlesContainer";

import { ImagesContainer, TextContainer, Wrapper } from './styles';

const About = () => {

    return(
        <Main centered>
            <Wrapper>
                <ImagesContainer>
                    <figure>
                        <img className='cintia' src={cintia} />
                        <img className='mandragora' src={mandragora} />
                        <img className='floquinho' src={floquinho} />
                    </figure>
                </ImagesContainer>
                <TextContainer>
                    <TitlesContainer>
                        <h2>sobre nós</h2>
                        <h1>O que é o Pet Gatô?</h1>
                    </TitlesContainer>
                    <p>O Pet Gatô surgiu em 2013, como um trabalho de faculdade. Estava cursando Medicina Veterinária e resolvi pegar uma disciplina de jornalismo, em que tive que escrever para um blog fictício. Dei o nome de Pet Gatô, como um trocadilho infame que minha professora adorou. Foi quando descobri minha paixão por escrever e resolvi unir o útil ao agradável e criar este blog.</p>
                    <p>Desde então, utilizei deste meio para informar pais de pets do Brasil inteiro, estendendo os cuidados da minha profissão através da Internet. Além disso, compartilho histórias engraçadas, descobertas do meu cotidiano e fotos dos meus dois amores, o Floquinho, meu cão samoieda e a Mandrágora, minha cacatua.</p>
                    <p>Meu nome é Cíntia Lorenzzo e sou veterinária há 5 anos, apaixonada pelo mundo animal, principalmente os que estão sempre presentes no nosso dia a dia. Além de escrever, gosto de correr no Parque do Ibirapuera com o Floquinho e cantar com a Mands, uma berradora nata.</p>
                    <p>Quer conhecer mais sobre mim? Me siga nas minhas redes sociais:</p>
                    <div className="social-medias">
                        <a href="https://www.facebook.com/"><FaFacebookSquare size={32} color="#ba66a3"/></a>
                        <a href="https://instagram.com/"><FaInstagram size={32} color="#ba66a3"/></a>
                        <a href="https://twitter.com/"><FaTwitterSquare size={32} color="#ba66a3"/></a>
                    </div>
                </TextContainer>
            </Wrapper>
        </Main>
    );
}

export default About;