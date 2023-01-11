import { useState } from "react";
import { Certificate } from "./Certificate";
import { Description } from "./Description";
import { Repos } from "./Repos";
import {
  InfoContentContainer,
  Button,
  InfoContentHeader,
  InfoContentMain,
} from "./styles";
import { Tech } from "./Tech";

type ContentProps = "description" | "tech" | "project" | "certificate";

export function InfoContent() {
  const [content, setContent] = useState<ContentProps>("description");
  const [focus, setFocus] = useState(false);

  function showDescription() {
    setContent("description");
  }

  function showTech() {
    setContent("tech");
  }

  function showProject() {
    setContent("project");
  }

  function showCertificate() {
    setContent("certificate");
  }

  return (
    <InfoContentContainer>
      <InfoContentHeader>
        <Button onClick={showDescription} css={{ isFocus: focus }}>
          Descrição
        </Button>
        <Button onClick={showCertificate}>Certificados</Button>
        <Button onClick={showTech}>Tecnologias</Button>
        <Button onClick={showProject}>Projetos</Button>
      </InfoContentHeader>
      <InfoContentMain>
        {content === "certificate" && <Certificate />}
        {content === "tech" && <Tech />}
        {content === "description" && <Description />}
        {content === "project" && <Repos />}
      </InfoContentMain>
    </InfoContentContainer>
  );
}
