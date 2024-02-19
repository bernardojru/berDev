import {
  CheckCircle,
  BookBookmark,
  Atom,
  TrendUp,
  ArrowFatLinesUp,
} from "phosphor-react";
import { ProfileContainer, ProfileDetails, Quantity, Tech } from "./styles";

import Image from "next/image";

import { Techs } from "../Technology/Tech/server";
import { Certificates } from "../Certificate/AllCertificate/server";

import TechReactImg from "../../assets/Tech/reactjs.svg";
import TechNextImg from "../../assets/Tech/nextjs.svg";
import TechTypescriptImg from "../../assets/Tech/typescript.svg";

export function Profile() {
  const quantityTech = Techs.length;
  const quantityCertificates = Certificates.length;

  return (
    <ProfileContainer>
      <strong>Front-End Developer</strong>
      <Tech>
        <Image src={TechReactImg} alt="reactjs" />
        <Image src={TechNextImg} alt="nextjs" />
        <Image src={TechTypescriptImg} alt="typescript" />
      </Tech>

      <ProfileDetails>
        <span>
          <BookBookmark size={15} weight="fill" />
          Quantia de certificados: <Quantity>{quantityCertificates}</Quantity>
        </span>
        <span>
          <CheckCircle size={15} weight="fill" />
          Projetos feitos: <Quantity>+ de 10</Quantity>
        </span>
        <span>
          <Atom size={15} weight="fill" />
          Tecnologias que possuo experiência:{" "}
          <Quantity>{quantityTech}</Quantity>
        </span>
        <span>
          <TrendUp size={15} weight="fill" />
          Experiência: <Quantity>+ 1 de ano</Quantity>
        </span>
      </ProfileDetails>
    </ProfileContainer>
  );
}
