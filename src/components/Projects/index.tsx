import { SpinnerGap } from "phosphor-react";
import { useEffect, useState } from "react";
import { Project } from "./Repos";
import { ProjectsContainer, ProjectsConst, Loading } from "./styles";

import { ReposServer } from "./server";

export function Projects() {
  const [repos, setRepos] = useState(ReposServer);

  return (
    <ProjectsContainer>
      {repos.length > 0 ? (
        <ProjectsConst>
          {repos.map((repo) => (
            <>
              {repo.homepage_link && <Project key={repo.slug} repos={repo} />}
            </>
          ))}
        </ProjectsConst>
      ) : (
        <Loading>
          <SpinnerGap size={70} />
        </Loading>
      )}
    </ProjectsContainer>
  );
}
