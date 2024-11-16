'use client'

import Image from 'next/image'
import styled from 'styled-components'
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaGitlab,
  FaTrello,
  FaLinkedin,
  FaWhatsapp,
  FaInstagram,
  FaTwitter
} from 'react-icons/fa'
import {
  SiTypescript,
  SiNextdotjs,
  SiStyledcomponents,
  SiTailwindcss
} from 'react-icons/si'
import { MdEmail } from 'react-icons/md'

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  color: #f0f0f0;
  background: #0a001b;
  font-family: 'Montserrat', sans-serif;
  width: 100%;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: #0a001b;
  position: sticky;
  top: 0;
  z-index: 10;
  width: 100%;
  height: auto;
  min-height: 4rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

  @media (min-width: 768px) {
    padding: 1rem 2rem;
    height: 5rem;
  }
`

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 768px) {
    gap: 4rem;
  }

  @media (min-width: 1024px) {
    gap: 8rem;
  }

  a {
    color: #ffffff;
    text-decoration: none;
    font-size: 1rem;
    font-weight: bold;
    transition: color 0.3s;
    padding: 0.5rem;

    &:hover {
      color: #0070f3;
    }

    @media (min-width: 768px) {
      font-size: 1.1rem;
    }
  }
`

const Section = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 3rem 0;
  padding: 0 1rem;

  @media (min-width: 768px) {
    margin: 5rem 0;
    padding: 0 2rem;
  }
`

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }
`

const Title = styled.h2`
  font-size: 2rem;
  color: #ffffff;
  text-align: center;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    font-size: 2.5rem;
    text-align: left;
  }
`

const TextContainer = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1024px) {
    align-items: flex-start;
  }
`

const Text = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #f0f0f0;
  text-align: center;
  margin: 1rem 0;

  @media (min-width: 768px) {
    font-size: 1.1rem;
    text-align: left;
  }
`

const HeroImageContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 2rem auto;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  @media (min-width: 1024px) {
    margin: 0;
  }
`

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;

  @media (min-width: 768px) {
    transform: translateX(15%);
  }
  @media (min-width: 1024px) {
    transform: translateX(60%);
  }
`

const RoundedImage = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  border: 5px solid rgb(38, 38, 38);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);

  @media (min-width: 768px) {
    width: 200px;
    height: 200px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const DownloadButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #17172f;
  color: #ffffff;
  text-decoration: none;
  padding: 1rem 2rem;
  border: 1px solid white;
  border-radius: 8px;
  margin-top: 2rem;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.3s ease;
  width: 100%;
  max-width: 300px;
  cursor: pointer;

  &:hover {
    background-color: #005bb5;
  }

  @media (min-width: 768px) {
    padding: 1.5rem 5rem;
    font-size: 1.1rem;
  }
`

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

const Skill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #0a001b;
  color: #ffffff;
  padding: 1rem;
  border-radius: 12px;
  border: 1px solid #bdc0c4;
  aspect-ratio: 1;
  width: 100%;
  max-width: 175px;
  margin: 0 auto;
`

const SkillName = styled.span`
  margin-top: 0.5rem;
  font-size: 0.9rem;
  text-align: center;
`

const ContactSkill = styled(Skill)`
  max-width: 150px;
  gap: 0.5rem;
  font-size: 1rem;

  svg {
    font-size: 2rem;
    color: #f8f8f8;

    @media (min-width: 768px) {
      font-size: 2.5rem;
    }

    &:hover {
      color: #0070f3;
    }
  }

  &:hover {
    color: #0070f3;
  }
`

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(6, 1fr);
  }
`

const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 0 1rem;
  margin-top: 3rem;

  @media (min-width: 768px) {
    gap: 3rem;
  }
`

const ExperienceItem = styled.div`
  border-left: 3px solid #0070f3;
  padding-left: 1rem;

  h3 {
    color: #0070f3;
    margin-bottom: 0.5rem;
  }
`

interface ContactItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;

}
const ContactItem: React.FC<ContactItemProps> = ({ href, icon, label }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <ContactSkill>
      {icon}
      <SkillName>{label}</SkillName>
    </ContactSkill>
  </a>
)
export default function Home() {
  return (
    <>
      <Header>
        <Nav>
          <a href="#top">Início</a>
          <a href="#skills">Habilidades</a>
          <a href="#experience">Experiência</a>
          <a href="#contact">Contatos</a>
        </Nav>
      </Header>
      <Main>
        <Section id="top">
          <IntroContainer>
            <TextContainer>
              <Title>&lt;Bem-vindos /&gt;</Title>
              <ImageContainer>
                <RoundedImage>
                  <Image
                    src="/assets/image.png"
                    alt="Logo"
                    width={200}
                    height={200}
                    priority
                  />
                </RoundedImage>
              </ImageContainer>
              <Text>
                Olá, sou Everton Wolff, desenvolvedor de software com
                experiência em tecnologias como JavaScript, React, Next.js,
                TypeScript, AWS e Firebase. Busco sempre aplicar meus
                conhecimentos para entregar soluções de qualidade, adaptando-me
                às demandas de cada projeto.
              </Text>
              <DownloadButton
                href="/cv-EvertonHWolff.pdf"
                download="EvertonWolff_CV.pdf"
              >
                Download Currículo
              </DownloadButton>
            </TextContainer>

            <HeroImageContainer>
              <Image
                src="/assets/hero_setup.avif"
                alt="Hero Setup"
                width={400}
                height={400}
                priority
              />
            </HeroImageContainer>
          </IntroContainer>
        </Section>

        <Section id="skills">
          <Title>Habilidades</Title>
          <SkillsContainer>
            <Skill>
              <FaHtml5 size={40} />
              <SkillName>HTML</SkillName>
            </Skill>
            <Skill>
              <FaCss3Alt size={40} />
              <SkillName>CSS</SkillName>
            </Skill>
            <Skill>
              <FaJsSquare size={40} />
              <SkillName>JavaScript</SkillName>
            </Skill>
            <Skill>
              <SiTypescript size={35} />
              <SkillName>TypeScript</SkillName>
            </Skill>
            <Skill>
              <FaReact size={35} />
              <SkillName>React JS</SkillName>
            </Skill>
            <Skill>
              <SiNextdotjs size={35} />
              <SkillName>Next JS</SkillName>
            </Skill>
            <Skill>
              <SiStyledcomponents size={50} />
              <SkillName>Styled Components</SkillName>
            </Skill>
            <Skill>
              <SiTailwindcss size={35} />
              <SkillName>Tailwind CSS</SkillName>
            </Skill>
            <Skill>
              <FaGitAlt size={35} />
              <SkillName>Git</SkillName>
            </Skill>
            <Skill>
              <FaGithub size={35} />
              <SkillName>Github</SkillName>
            </Skill>
            <Skill>
              <FaGitlab size={35} />
              <SkillName>Gitlab</SkillName>
            </Skill>
            <Skill>
              <FaTrello size={35} />
              <SkillName>Trello</SkillName>
            </Skill>
          </SkillsContainer>
        </Section>

        <Section id="experience">
          <Title>Experiência</Title>
          <ExperienceContainer>
            <ExperienceItem>
              <h3>Live Commerce</h3>
              <Text>
                Desenvolvi funcionalidades personalizadas para plataformas de
                live commerce, otimizando a experiência de compra ao vivo.
              </Text>
            </ExperienceItem>
            <ExperienceItem>
              <h3>Imobiliário</h3>
              <Text>
                Atuei em projetos do setor imobiliário, criando soluções para a
                visualização de imóveis e gerenciamento de clientes.
              </Text>
            </ExperienceItem>
            <ExperienceItem>
              <h3>Calçadista</h3>
              <Text>
                Participei do desenvolvimento de soluções para o setor
                calçadista, focando na automação de processos e melhorias de
                interface.
              </Text>
            </ExperienceItem>
          </ExperienceContainer>
        </Section>

        <Section id="contact">
          <Title>Contatos</Title>
          <ContactContainer>
            <ContactItem
              href="mailto:everton2211@gmail.com"
              icon={<MdEmail />}
              label="E-mail"
            />
            <ContactItem
              href="https://www.linkedin.com/in/everton-wolff-822a3b224"
              icon={<FaLinkedin />}
              label="LinkedIn"
            />
            <ContactItem
              href="https://wa.me/5551991966780"
              icon={<FaWhatsapp />}
              label="WhatsApp"
            />
            <ContactItem
              href="https://github.com/EvertonWolff"
              icon={<FaGithub />}
              label="GitHub"
            />
            <ContactItem
              href="https://instagram.com/everton_wolff"
              icon={<FaInstagram />}
              label="Instagram"
            />
            <ContactItem
              href="https://x.com/EvertonHPW"
              icon={<FaTwitter />}
              label="Twitter"
            />
          </ContactContainer>
        </Section>
      </Main>
    </>
  )
}
