import Head from "next/head";
import { PortfolioContainer, PortfolioContent } from "../styles/pages/home";
import { globalStyles } from "../styles/global";
import { Profile } from "../components/Profile";
import { InfoContent } from "../components/InfoContent";
import { Header } from "../components/Header";
import { useThemes } from "../hooks/useThemes";

globalStyles();

export default function Portfolio() {
  const { themes } = useThemes();

  return (
    <>
      <Head>
        <title>Bernardo José</title>
      </Head>
      <PortfolioContainer className={themes}>
        <Header />
        <PortfolioContent>
          <Profile />
          <InfoContent />
        </PortfolioContent>
      </PortfolioContainer>
    </>
  );
}
