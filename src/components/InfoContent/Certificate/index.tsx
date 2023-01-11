import { CertificateContainer } from "./styles";
import Image from "next/image";
import { Certificates } from "./server";
import { useState } from "react";

export function Certificate() {
  const [certificates, setCertificates] = useState(Certificates);
  return (
    <CertificateContainer>
      {certificates.map((certificate) => (
        <Image
          key={certificate.id}
          src={certificate.img}
          alt={certificate.alt}
          width={1000}
          height={1000}
        />
      ))}
    </CertificateContainer>
  );
}
