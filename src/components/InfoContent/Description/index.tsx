import { DescriptionContainer } from "./styles";
import { GithubLogo, Globe, LinkedinLogo } from "phosphor-react";
import Link from "next/link";

export function Description() {
  return (
    <DescriptionContainer>
      <h2>Sobre mim</h2>
      <p>Meu nome é Bernardo, e tenho 19 anos.</p>
      <p>
        Sou programador full-stack, apaixonado por tecnologia, e tenho 1 anos de
        experiência com essas tecnologias: Nextjs, TypeScript, TailwindCSS,
        Nodejs.
      </p>

      <p>Quando não estou trabalhando, estou codando algum projeto pessoal.</p>
      <footer>
        <Link href="https://github.com/bernardojru" target="_blank">
          <GithubLogo size={15} weight="fill" /> GitHub
        </Link>
        <Link
          href="https://www.linkedin.com/in/bernardo-jos%C3%A9-aa2159225/"
          target="_blank"
        >
          <LinkedinLogo size={15} weight="fill" /> Linkedin
        </Link>
        <Link href="#">
          <Globe size={15} weight="bold" /> Jireh
        </Link>
      </footer>
    </DescriptionContainer>
  );
}
