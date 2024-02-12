import React from "react";

import Cards from "./ContentPages/Cards";

function Content() {
  const viewButton = (e) => {
    e.preventDefault();
    console.log("tiklandi");
  };
  return (
    <div className="bg-slate-500 py-10 flex w-full justify-center">
      <Cards />
    </div>
  );
}

export default Content;
