import React from 'react';


import CardEvent from "../../components/Cards/CardEvent.js";

export default function Events() {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-5 md:mt-12">
        <div className="w-full lg:w-10/12 px-4">
          <CardEvent />
        </div>
      </div>
    </>
  );
}
