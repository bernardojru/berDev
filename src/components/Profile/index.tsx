import {
  CheckCircle,
  BookBookmark,
  Atom,
  TrendUp,
  ChatTeardropDots,
  ArrowFatLinesUp,
} from "phosphor-react";
import {
  ProfileContainer,
  ProfileDetails,
  User,
  Quantity,
  Tech,
  ButtonToTop,
  ButtonContainer,
} from "./styles";

import Image from "next/image";

import { Techs } from "../InfoContent/Tech/server";
import { Certificates } from "../InfoContent/Certificate/server";

import TechReactImg from "../../assets/Tech/reactjs.svg";
import TechNextImg from "../../assets/Tech/nextjs.svg";
import TechTypescriptImg from "../../assets/Tech/typescript.svg";

export function Profile() {
  const quantityTech = Techs.length;
  const quantityCertificates = Certificates.length;

  function scrollUp() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <ProfileContainer>
      <User>
        <img src="https://github.com/bernardojru.png" alt="" />
        <strong>Bernardo Gomes José</strong>
        <span>Software Engineer</span>
      </User>

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
          Projetos feitos: <Quantity>+ de 20</Quantity>
        </span>
        <span>
          <Atom size={15} weight="fill" />
          Tecnologias que possuo experiência:{" "}
          <Quantity>{quantityTech}</Quantity>
        </span>
        <span>
          <TrendUp size={15} weight="fill" />
          Experiência: <Quantity>+ 2 de anos</Quantity>
        </span>
      </ProfileDetails>

      <ButtonContainer>
        <ButtonToTop onClick={scrollUp}>
          <ArrowFatLinesUp size={20} />
        </ButtonToTop>
      </ButtonContainer>
    </ProfileContainer>
  );
}
