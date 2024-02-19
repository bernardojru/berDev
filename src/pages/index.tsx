import Head from "next/head";
import { globalStyles } from "../styles/global";
import { Description } from "../components/Description";
import { DescriptionPageContainer } from "../styles/pages/home";

globalStyles();

export default function DescriptionPage() {
  return (
    <>
      <Head>
        <title>BerDev | Sobre</title>
      </Head>
      <DescriptionPageContainer>
        <Description />
      </DescriptionPageContainer>
    </>
  );
}
