import { DescriptionContainer } from "./styles";
import { GithubLogo, LinkedinLogo } from "phosphor-react";
import Link from "next/link";

export function Description() {
  return (
    <DescriptionContainer>
      <h2>Sobre mim</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eaque
        voluptatem dignissimos similique sunt impedit aspernatur officia nam?
        Esse odio assumenda quidem at, aperiam eum quia corporis minus,
        voluptatum sint praesentium! Harum nemo id est ab itaque sit tenetur.
        Temporibus repellat error aut laboriosam. Quasi pariatur corporis
        voluptas reprehenderit assumenda.
      </p>
      <footer>
        <Link href='https://github.com/bernardojru' target='_blank'>
          <GithubLogo size={15} weight="fill" /> GitHub
        </Link>
        <Link href='https://www.linkedin.com/in/bernardo-jos%C3%A9-aa2159225/' target='_blank'>
          <LinkedinLogo size={15} weight="fill" /> Linkedin
        </Link>
      </footer>
    </DescriptionContainer>
  );
}
