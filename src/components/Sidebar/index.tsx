import { Graph, Kanban, Notepad, Student } from "phosphor-react";
import {
  SidebarContainer,
  SecondarySidebar,
  SidebarButton,
  SidebarBottom,
  SidebarContainerResponsive,
} from "./styles";
import { useSidebarOpen } from "../../hooks/useSidebarOpen";

export function Sidebar() {
  const { showNavBar } = useSidebarOpen();
  return (
    <>
      <SidebarContainer>
        <SecondarySidebar>
          <SidebarButton href="/">
            <Notepad size={30} color="#7C7C8A" />
            <span>Descrição</span>
          </SidebarButton>
          <SidebarButton href="/certificate">
            <Student size={30} color="#7C7C8A" />
            <span>Certificados</span>
          </SidebarButton>
          <SidebarButton href="/technology">
            <Graph size={30} color="#7C7C8A" />
            <span>Tecnologias</span>
          </SidebarButton>
          <SidebarButton href="/projects">
            <Kanban size={30} color="#7C7C8A" />
            <span>Projetos</span>
          </SidebarButton>
        </SecondarySidebar>
      </SidebarContainer>
      {showNavBar && (
        <SidebarContainerResponsive>
          <SecondarySidebar>
            <SidebarButton href="/">
              <Notepad size={30} color="#7C7C8A" />
              <span>Descrição</span>
            </SidebarButton>
            <SidebarButton href="/certificate">
              <Student size={30} color="#7C7C8A" />
              <span>Certificados</span>
            </SidebarButton>
            <SidebarButton href="/technology">
              <Graph size={30} color="#7C7C8A" />
              <span>Tecnologias</span>
            </SidebarButton>
            <SidebarButton href="/projects">
              <Kanban size={30} color="#7C7C8A" />
              <span>Projetos</span>
            </SidebarButton>
          </SecondarySidebar>
        </SidebarContainerResponsive>
      )}
    </>
  );
}

// {}
