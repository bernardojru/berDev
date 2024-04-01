import { Graph, Kanban, ListPlus, Notepad, Student, X } from "phosphor-react";
import {
  HeaderContainer,
  NavBarMenu,
  NavButton,
  NavBarMenuResponsive,
  BerDev,
  User,
} from "./styles";
import * as Popover from "@radix-ui/react-popover";
import { Profile } from "../Profile";

import { useSidebarOpen } from "../../hooks/useSidebarOpen";

// import {
//   Popover,
//   PopoverTrigger,
//   PopoverContent,
// } from "@/components/ui/popover";

import Image from "next/image";
import { ReactNode, useState } from "react";
import Link from "next/link";

interface MenuTypes {
  slug: string;
  url: string;
  name: string;
  icon: ReactNode;
}

const menus: MenuTypes[] = [
  {
    slug: "description",
    url: "/",
    name: "Descrição",
    icon: <Notepad weight="fill" size={20} />,
  },
  {
    slug: "certificate",
    url: "/certificate",
    name: "Certificados",
    icon: <Student weight="fill" size={20} />,
  },
  {
    slug: "technology",
    url: "/technology",
    name: "Tecnologias",
    icon: <Graph weight="fill" size={20} />,
  },
  {
    slug: "projects",
    url: "/projects",
    name: "Projetos",
    icon: <Kanban weight="fill" size={20} />,
  },
];

export function Header() {
  const [navigations, setNavigation] = useState<MenuTypes[]>(menus);
  const [toggleIcon, setToggleIcon] = useState<boolean>(true);

  function handleToggleIcon() {
    setToggleIcon((state) => !state);
  }

  const { handleShowNavBar } = useSidebarOpen();

  return (
    <HeaderContainer>
      <div>
        <NavBarMenu>
          {/* menu visivel */}
          {navigations.map(({ slug, name, url }) => (
            <>
              <Link
                href={url}
                key={slug}
                className="border border-black hover:bg-gray-800 hover:border-gray-700 rounded-full p-2 transition-all"
              >
                {name}
              </Link>
            </>
          ))}
        </NavBarMenu>
        <Popover.Root>
          <Popover.Trigger asChild>
            <NavButton onClick={handleToggleIcon}>
              {toggleIcon ? (
                <>
                  <span>Menu</span>
                  <ListPlus weight="thin" size={20} />
                </>
              ) : (
                <>
                  <span>Close</span>
                  <X weight="thin" size={20} />
                </>
              )}
            </NavButton>
          </Popover.Trigger>
          <Popover.Content>
            <NavBarMenuResponsive>
              {navigations.map(({ slug, name, url, icon }) => (
                <>
                  <Link href={url} key={slug}>
                    <span>
                      {icon}
                      {name}
                    </span>
                  </Link>
                </>
              ))}
            </NavBarMenuResponsive>
          </Popover.Content>
        </Popover.Root>
      </div>
    </HeaderContainer>
  );
}
