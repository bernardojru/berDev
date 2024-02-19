import Head from "next/head";
import { CertificatePageContainer } from "../styles/pages/certificate";
import { Certificate } from "../components/Certificate";

export default function CertificatePage() {
  return (
    <>
      <Head>
        <title>BerDev | Certificados</title>
      </Head>
      <CertificatePageContainer>
        <Certificate />
      </CertificatePageContainer>
    </>
  );
}
