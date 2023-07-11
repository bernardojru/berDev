import { ProjectContainer, Icons, Tags } from "./styles";
import { CloudArrowUp, GithubLogo } from "phosphor-react";
import Link from "next/link";
import { Quantity } from "../../../Profile/styles";

interface ProjectProps {
  name: string;
  html_url: string;
  description: string;
  language: string;
  homepage: string;
  topics: any;
}

interface Repos {
  repos: ProjectProps;
}

export function Project({ repos }: Repos) {
  return (
    <ProjectContainer>
      <Icons>
        {repos.homepage && (
          <a href={repos.homepage} target="_blank" title="Ver o deploy">
            <CloudArrowUp size={15} weight="fill" />
          </a>
        )}
        <Link href={repos.html_url} target="_blank" title="Ver no github">
          <GithubLogo size={15} weight="fill" />
        </Link>
      </Icons>
      <p>{repos.description}</p>
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
