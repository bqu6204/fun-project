import BurgerBar from "@/components/buttons/burger/burger-bar";

import { useState } from "react";
import Image from "next/image";

import styleSheet from "@/styles/dist/section1-top-nav.module.css";

const Section1TopNav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <nav className={styleSheet.nav}>
      <BurgerBar
        onClick={() => setIsMenuOpen((prev) => !prev)}
        isActivate={isMenuOpen}
      />
      <div>
        <Image
          src="/icons/camera.png"
          title="photo"
          alt="Take a picture"
          width={30}
          height={30}
          className={styleSheet.photo}
        />
      </div>
    </nav>
  );
};

export default Section1TopNav;
