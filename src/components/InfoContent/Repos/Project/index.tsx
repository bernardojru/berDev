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
  // const rep: any = repos.topics
  // const topics = rep.split(' ')
  return (
    <ProjectContainer>
      <Icons>
        {repos.homepage && (
          <a href={repos.homepage} target="_blank">
            <CloudArrowUp size={15} weight="fill" />
          </a>
        )}
        <Link href={repos.html_url} target="_blank">
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
          {/* <Quantity>{topics}</Quantity> */}
        </span>
      </Tags>
    </ProjectContainer>
  );
}
