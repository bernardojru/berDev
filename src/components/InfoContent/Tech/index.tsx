import { TechContainer, TooltipContent, TooltipArrow } from "./styles";
import Image from "next/image";
import { Techs } from "./server";
import { useState } from "react";
import * as Tooltip from "@radix-ui/react-tooltip";

export function Tech() {
  const [techs, setTechs] = useState(Techs);
  return (
    <TechContainer>
      {techs.map((tech) => (
        <Tooltip.Provider>
          <Tooltip.Root>
            <Tooltip.Portal>
              <TooltipContent sideOffset={1}>
                {tech.tag}
                <TooltipArrow />
              </TooltipContent>
            </Tooltip.Portal>
            <Tooltip.Trigger asChild>
              <button>
                <Image src={tech.img} alt="" key={tech.id} />
              </button>
            </Tooltip.Trigger>
          </Tooltip.Root>
        </Tooltip.Provider>
      ))}
    </TechContainer>
  );
}
