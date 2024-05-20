import React from "react";

import Cards from "./ContentPages/Cards";
import InfoCards from "./ContentPages/InfoCards";

function Content() {
  return (
    <div className=" py-10 flex flex-col w-full gap-10 items-center">
      <Cards />
      <InfoCards />
    </div>
  );
}

export default Content;
