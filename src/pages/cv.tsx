import CVImg from "../assets/cv/Bernardo Gomes José.png";
import Image from "next/image";
import { CVContainer, CVConst } from "../styles/pages/cv";
import Head from "next/head";
import { Header } from "../components/Header";

export default function CV() {
  return (
    <>
      <Head>
        <title>berDev | Portfolio</title>
      </Head>
      <CVContainer>
        <Header />
        <CVConst>
          <Image src={CVImg} alt="CV" width={1000} />
        </CVConst>
      </CVContainer>
    </>
  );
}
