import { ReactNode } from "react";
import YoubikeNav from "../header/youbike/youbike-nav";

interface IYoubikeLayout {
  home?: boolean;
  children: ReactNode;
}

const YoubikeLayout: React.FC<IYoubikeLayout> = ({ home, children }) => {
  return (
    <>
      <YoubikeNav />
      {children}
    </>
  );
};

export default YoubikeLayout;
