import { Link } from "react-router-dom";
import MenuDrawer from "./Drawer";
import Accordian from "./Accordian";

export interface MenuTypes {
  title: string,
  link: string
}
export const menu: MenuTypes[] = [
  {
    title: "Clamp",
    link: "/clamp"
  },
  {
    title: "Min",
    link: "/min"

  },
  {
    title: "Max",
    link: "/max"
  },
]

export const Units = [
  {
    title: "Relative", 
    link: "/ultimate-units"
  },
  {
    title: "View-Port", 
    link: "/viewport-units"
  }
]



function Header() {


  return (
    <>
      <header className="flex px-2 py-4 max-md:justify-around md:p-4 md:pr-6 max-md:items-center md:flex-col header-width max-md:basis-32 grow gap-7">
        <h2 className="relative text-lg font-bold text-center text-white md:mt-16">
          <Link to="/">
            Visualise Learn <span className="absolute text-[9px] -top-1 pb-14 right-0 max-md:-top-3">v1.8</span> <br />
          </Link>
          <a target="blank" href="https://twitter.com/PragathRao">
            <span className="text-xs">(By Pragath)</span>
          </a>
        </h2>
        <MenuDrawer />
        <div className="flex gap-1 pl-4 max-md:hidden md:flex-col">
          <Link to="/box-model"><p>Box Model</p></Link>
          <Link to="/flex"><p>Centering a Div</p></Link>
          <Link to="/border-radius"><p>Border Radius</p></Link>
          <Link to="/display-property"><p>Display Property</p></Link>
        </div>
        <div className="max-md:hidden">
          <Accordian menu={Units} title = "CSS Units"/>
        </div>
        <div className="max-md:hidden">
          <Accordian menu={menu} title="CSS Magic" />
        </div>
      </header>
    </>
  )
}

export default Header