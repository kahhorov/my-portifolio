import { FaCode } from "react-icons/fa";
import { Footer, WhatDo } from "../../components";
import { TbVector } from "react-icons/tb";
import { Icon } from "@iconify/react";

function About() {
  return (
    <div className="shadow-gray-400 shadow-2xl rounded-2xl py-10 px-10 relative">
      <h1 className="text-3xl relative">
        About
        <span className="w-20 h-1 border-blue-600 border-t-4 absolute left-30 translate-y-4 rounded-2xl"></span>
      </h1>
      <div className="flex flex-col gap-5 text-gray-500">
        <p className="mt-5 tracking-[-0.5px]">
          Assalomu alaykum! Men — 2009-yilda tug'ilgan, O'zbekistondan bo'lgan
          yosh va intiluvchan Frontend Developerman. Dasturlashga bo'lgan
          qiziqishim juda erta boshlangan va hozirda zamonaviy
          web-texnologiyalar bilan professional darajada ishlay olaman.
        </p>
        <ul className="list-disc px-4">
          <li>
            HTML — toza va semantik struktura CSS / TailwindCSS — zamonaviy va
          </li>
          <li>
            responsive dizayn JavaScript — interaktiv va dinamik funksiyalar
          </li>
          <li>React.js — tezkor, komponentli, kuchli web-sayitlar</li>
        </ul>
        <h2>Nmalar qila olaman!</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-2">
          <WhatDo
            icon={<FaCode />}
            descrip="Veb-ishlab chiqish"
            text="
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
          error voluptates qui, itaque quidem quas commodi excepturi
          exercitationem iusto."
            styles={"bg-gray-100 py-5 px-5 rounded-2xl"}
          />
          <WhatDo
            icon={<TbVector />}
            descrip="Mobile-Ilova ishlab chiqarish"
            text="
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
          error voluptates qui, itaque quidem quas commodi excepturi
          exercitationem iusto."
            styles={"bg-gray-100 py-5 px-5 rounded-2xl"}
          />
          <WhatDo
            icon={<Icon icon="line-md:loading-loop" width="24" height="24" />}
            descrip="Izlanilmoqda..."
            text="
              Hozirda shu texnalogiyalarni bilaman yana izlanishda davom etmoqdaman."
            styles={"bg-blue-100 py-5 px-5 rounded-2xl md:col-span-2"}
          />
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default About;
