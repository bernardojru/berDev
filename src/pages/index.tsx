import Head from "next/head";
import { PortfolioContainer, PortfolioContent } from "../styles/pages/home";
import { globalStyles } from "../styles/global";
import { Profile } from "../components/Profile";
import { InfoContent } from "../components/InfoContent";
import { Header } from "../components/Header";

globalStyles();

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Home | Bernardo José</title>
      </Head>
      <PortfolioContainer>
        <Header />
        <PortfolioContent>
          <Profile />
          <InfoContent />
        </PortfolioContent>
      </PortfolioContainer>
    </>
  );
}
