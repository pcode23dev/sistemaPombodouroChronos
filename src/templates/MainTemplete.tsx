import Headding from "../components/headding/Headding";
import MenuMobile from "../components/menuMobile/MenuMobile";
import type { ElementChildrenTitleProps } from "../types/ElementChildrenTitleProps";


export default function MainTemplete({ children }: ElementChildrenTitleProps) {
  return (
    <div className="relative">
      <div className="container mx-auto">
        <Headding tittle="Chronos">
          <p className="text-xl text-center">
            Aprenda a organizar suas actividades
          </p>
        </Headding>

        {children}

        <MenuMobile />
      </div>
    </div>
  );
}
