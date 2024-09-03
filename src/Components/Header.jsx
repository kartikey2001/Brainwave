import { useLocation } from "react-router-dom";
import { brainwave } from "../assets";
import { navigation } from "../Constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";
import { disablePageScroll , enablePageScroll } from "scroll-lock";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggle = () => {
    setOpenNavigation(!openNavigation);
    !openNavigation ? enablePageScroll() : disablePageScroll();
  };
  const close = () => {
    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm "
      } `}
    >
      <div className=" flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:px-4 ">
        <a className="block w-[12rem] xl:mr-8 " href="#hero">
          <img src={brainwave} alt="BrainWave" width={190} height={40} />
        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row ">
            {navigation.map((item) => (
              <a
                key={item.id}
                href="item.url"
                onClick={close}
                className={`block relative font-code text-2xl transition-colors uppercase text-n-1 hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  item.url === pathname ? "z-2 lg:text-n-1" : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12 `}
              >
                {item.title}
              </a>
            ))}
          </div>
          <HamburgerMenu />
        </nav>
        <a
          href="#signup"
          className="button hidden mr-8 text-n-1/50 transition-coors hover:text-n-1 lg:block "
        >
          New account
        </a>
        <Button className="hidden lg:flex " href="#login">
          Sign In
        </Button>

        <Button className="ml-auto lg:hidden" px="px-3" onClick={toggle}>
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
