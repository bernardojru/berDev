import { ProjectContainer, Icons, Tags } from "./styles";
import { CloudArrowUp, GithubLogo } from "phosphor-react";
import Link from "next/link";
import { Quantity } from "../../Profile/styles";
import Image from "next/image";

interface ProjectProps {
  slug: string;
  name: string;
  language: string;
  img: any;
  description: string;
  github_link: string;
  homepage_link: string;
}

interface Repos {
  repos: ProjectProps;
}

export function Project({ repos }: Repos) {
  return (
    <ProjectContainer>
      <Icons>
        {repos.homepage_link && (
          <a href={repos.homepage_link} target="_blank" title="Ver o deploy">
            <CloudArrowUp size={15} weight="fill" /> Deploy
          </a>
        )}
        <Link href={repos.github_link} target="_blank" title="Ver no github">
          <GithubLogo size={15} weight="fill" /> Github
        </Link>
      </Icons>
      <Image src={repos.img} width={1000} height={1000} alt="" />
      <Tags>
        <strong>
          Nome: <Quantity>{repos.name}</Quantity>
        </strong>
        <span>
          <Quantity>{repos.language}</Quantity>
        </span>
      </Tags>
    </ProjectContainer>
  );
}
