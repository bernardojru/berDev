import Head from "next/head";
import { TechnologyPageContainer } from "../styles/pages/technology";
import { Technology } from "../components/Technology";

export default function TechnologyPage() {
  return (
    <>
      <Head>
        <title>BerDev | Ferramentas</title>
      </Head>
      <TechnologyPageContainer>
        <Technology />
      </TechnologyPageContainer>
    </>
  );
}
