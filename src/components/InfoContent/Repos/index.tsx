import { CircleNotch, MagnifyingGlass } from "phosphor-react";
import { useEffect, useState } from "react";
import { api } from "../../../lib/axios";
import { Project } from "./Project";
import { ReposContainer, ReposConst, Loading } from "./styles";

interface ReposProps {
  id: number;
  name: string;
  html_url: string;
  description: string;
  language: string;
  homepage: string;
  topics: any;
}

export function Repos() {
  const [repos, setRepos] = useState<ReposProps[]>([]);

  async function handleGetApiRepos() {
    const response = await api.get("/repos");
    setRepos(response.data);
  }

  useEffect(() => {
    handleGetApiRepos();
  }, []);

  return (
    <ReposContainer>
      {repos.length > 0 ? (
        <ReposConst>
          {repos.map((repo) => (
            <>{repo.homepage && <Project key={repo.id} repos={repo} />}</>
          ))}
        </ReposConst>
      ) : (
        <Loading>
          <CircleNotch size={70} />
        </Loading>
      )}
    </ReposContainer>
  );
}
