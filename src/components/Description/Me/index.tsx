import Link from "next/link";
import Image from "next/image";
import ToqueMedia from "../../../assets/toquemedia.webp";
import ME from "../../../assets/me.png";
import MacAir from "../../../assets/mac-air-apple.png";
import TechReactImg from "../../../assets/Tech/reactjs.svg";
import TechNextImg from "../../../assets/Tech/nextjs.svg";
import TechTypescriptImg from "../../../assets/Tech/typescript.svg";
import {
  MeContainer,
  AboutMe,
  ExperienceMe,
  ContentHype,
  Company,
  CompanyDetails,
  MySetup,
  MacBookDetails,
  SpaceBottomContainer,
  Tech,
} from "./styles";
import { GithubLogo, LinkedinLogo } from "phosphor-react";

const images = [
  {
    slug: "reactjs",
    img: TechReactImg,
  },
  {
    slug: "nextjs",
    img: TechNextImg,
  },
  {
    slug: "typescript",
    img: TechTypescriptImg,
  },
];

export function Me() {
  return (
    <MeContainer>
      <AboutMe>
        <Image src={ME} alt="me" width={1000} height={1000} className="me" />
        <div>
          <h1>Sobre mim</h1>
          <Tech>
            {images.map(({ slug, img }) => (
              <Image src={img} alt={slug} key={slug} />
            ))}
          </Tech>
          <p>Prazer, meu nome é Bernardo, e tenho 20 anos.</p>
          <p>
            Sou programador Front-End, apaixonado por tecnologia, busco combinar
            o que aprendo para criar códigos inovadores para resolver problemas,
            tenho 2 anos de experiência desenvolvendo projectos com essas
            tecnologias: Nextjs, TypeScript, TailwindCSS, .
          </p>

          <section>
            <Link href="https://github.com/bernardojru" target="_blank">
              <GithubLogo size={15} weight="fill" /> GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/bernardo-jos%C3%A9-aa2159225/"
              target="_blank"
            >
              <LinkedinLogo size={15} weight="fill" /> Linkedin
            </Link>
          </section>
        </div>
      </AboutMe>
      <ExperienceMe>
        <div className="elementals">
          <div className="point"></div>
          <div className="line"></div>
        </div>
        <ContentHype>
          <h1>Experiência</h1>
          <Company>
            <Link
              href="https://toqueplay.com"
              title="Ver o site original"
              target="__blank"
            >
              <Image
                src={ToqueMedia}
                width={500}
                height={500}
                alt="Empresa ToqueMedia"
              />
            </Link>
            <CompanyDetails>
              <h2>ToquePlay</h2>

              <small>Presencial · 2023 · 6 meses</small>
              <span>Estagiário como Desenvolvedor de Software Júnior</span>
            </CompanyDetails>
          </Company>
          <p>
            Desenvolvimento de interfaces usando Reactjs, Typescript, Chakra UI,
            Firebase. Eu fui responsável pelo desenvolvimento de algumas
            interfaces onde era usado Reactjs com Typescript, Chakra UI na parte
            da estilização. As minhas responsabilidades giravam em torno da
            criação de modals com interatividade e as telas de registro, fazendo
            a conexão com o firebase em alguns casos.
          </p>
          <p>
            Fiz a Documentação de algumas bibliotecas internas da empresa no
            GitHub.
          </p>
          <p>
            Nesse mesmo ano a empresa participou do MEP Challenge com um
            projecto inovador de restaurante chamado MoMenu, tive a
            responsabilidade de criar algumas interfaces e funcionalidades na
            aplicação, e chegamos a ser os vencedores do MEP Challenge.
          </p>
          <p>
            O projeto{" "}
            <Link
              href="https://www.menosfios.com/angola-startup-summit-2023-momenu-vencedora-do-mep-challenge/"
              title="Ver a notícia"
              target="__blank"
            >
              MoMenu
            </Link>{" "}
            consiste numa solução tecnológica para o sector de serviços de
            restauração, onde a ideia central é transformar o modo como os
            clientes interagem com os cardápios dos estabelecimentos, oferecendo
            uma experiência mais intuitiva, personalizada e tecnologicamente
            avançada. Por intermédio do serviço, os clientes podem acessar os
            menus dos restaurantes de forma digital e interativa.
          </p>
        </ContentHype>
      </ExperienceMe>
      <MySetup>
        <h1>Setup do Computador</h1>
        <MacBookDetails>
          <Image
            src={MacAir}
            width={500}
            height={400}
            alt="Empresa ToqueMedia"
          />
          <h2>MacBook Air</h2>
          <span>Chip M1, 2020</span>
          <small>8 RAM</small>
        </MacBookDetails>
      </MySetup>

      <SpaceBottomContainer>
        Container para obter espaço no fim
      </SpaceBottomContainer>
    </MeContainer>
  );
}
