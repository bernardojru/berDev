import Head from "next/head";
import { ProjectsPageContainer } from "../styles/pages/projects";
import { Projects } from "../components/Projects";

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>BerDev | Stacks</title>
      </Head>
      <ProjectsPageContainer>
        <Projects />
      </ProjectsPageContainer>
    </>
  );
}
