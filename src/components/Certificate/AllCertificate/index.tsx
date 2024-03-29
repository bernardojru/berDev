import { AllCertificateContainer } from "./styles";
import Image from "next/image";
import { Certificates } from "./server";
import { useState } from "react";
import Link from "next/link";

export function AllCertificate() {
  const [certificates, setCertificates] = useState(Certificates);
  return (
    <AllCertificateContainer>
      {certificates.map((certificate) => (
        <Link href={certificate.href} target="_blank">
          <Image
            key={certificate.id}
            src={certificate.img}
            alt={certificate.alt}
            width={1000}
            height={1000}
          />
        </Link>
      ))}
    </AllCertificateContainer>
  );
}
