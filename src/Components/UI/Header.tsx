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
function Header() {


  return (
    <>
      <header className="flex px-2 py-4 max-md:justify-around md:p-4 md:pr-6 max-md:items-center md:flex-col header-width max-md:basis-32 grow gap-7">
        <h2 className="font-bold text-center text-white md:mt-16">
          CSS Visualiser By Pragath
        </h2>
        <MenuDrawer />
        <div className="flex gap-1 pl-4 max-md:hidden md:flex-col">
          <Link to="/box-model"><p>Box Model</p></Link>
          <Link to="/flex"><p>flex</p></Link>
          <Link to="/border-radius"><p>Border Radius</p></Link>
          <Link to="/display-property"><p>Display Property</p></Link>
          <Link to="/ultimate-units"><p>Units</p></Link>
        </div>
        <div className="max-md:hidden">
          <Accordian menu={menu} />
        </div>
      </header>
    </>
  )
}

export default Header