import { ReactNode } from "react";
import HomeNav from "@/components/nav/home/home-nav";
import QuestionNav from "@/components/nav/question/question-nav";
import Footer from "@/components//footer/footer";

interface IPrimaryLayout {
  home?: boolean;
  children: ReactNode;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ home, children }) => {
  return (
    <div className="min-h-screen ">
      {home ? <HomeNav /> : <QuestionNav />}
      {children}
      {home ? null : <Footer />}
    </div>
  );
};

export default PrimaryLayout;
