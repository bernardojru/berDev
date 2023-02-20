import { DescriptionContainer } from "./styles";
import { GithubLogo, LinkedinLogo } from "phosphor-react";
import Link from "next/link";

export function Description() {
  return (
    <DescriptionContainer>
      <h2>Sobre mim</h2>
      <p>
        Comecei os meus estudos na programação com 14 anos, com o desejo de criar um jogo estudava loucamente
      </p>
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
      </footer>
    </DescriptionContainer>
  );
}
