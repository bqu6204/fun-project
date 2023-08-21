import Image from "next/image";
import Link from "next/link";
import styleSheet from "@/styles/dist/youbike-nav.module.css";
import { usePathname } from "next/navigation";
import { useWindowWidth } from "@/hooks/useWindowWIdth";
import BurgerBar from "@/components/buttons/burger/burger-bar";
import { useState } from "react";

const YoubikeNav: React.FC = () => {
  const pathname = usePathname();
  const [windowWidth] = useWindowWidth();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const menu = [
    { title: "使用說明", href: "/youbike/usage" },
    { title: "收費方式", href: "/youbike/charge" },
    { title: "站點資訊", href: "/youbike/stop-info" },
    { title: "最新消息", href: "/youbike/news" },
    { title: "活動專區", href: "/youbike/event" },
  ];

  return (
    <div className="sticky top-0 left-0">
      <header className={`${styleSheet.header} relative`}>
        <div className="h-full flex items-center  youbike-page">
          <Link href="/" target="_blank">
            <Image
              src="/logos/youbike.png"
              alt="Link back to home"
              title="youbike logo"
              height={90}
              width={90}
            />
          </Link>

          <nav
            className={`${styleSheet.menu} ${
              isMenuOpen ? styleSheet.isMenuOpen : ""
            }`}
          >
            <ul className={styleSheet.menuUl}>
              {menu.map((link, idx) => {
                return (
                  <li key={idx} className={styleSheet.menuLi}>
                    <Link
                      onClick={() => setIsMenuOpen(false)}
                      className={`${styleSheet.menuLink} ${
                        pathname === link.href ? styleSheet.isCurrentPage : ""
                      }`}
                      href={link.href}
                    >
                      {link.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Link
              href="/"
              target="_blank"
              className={styleSheet.login}
              onClick={() => setIsMenuOpen(false)}
            >
              <div
                className={`${
                  windowWidth > 1000
                    ? "g-btn-primary g-btn-f-to-f"
                    : "g-btn-primary g-btn-t-to-t"
                } ${styleSheet.loginBtn} text-lg w-24`}
              >
                登入
              </div>
            </Link>
          </nav>

          <BurgerBar
            className={styleSheet.burger}
            isActivate={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            color={"rgb(181, 205, 34)"}
          />
        </div>
      </header>
    </div>
  );
};

export default YoubikeNav;
