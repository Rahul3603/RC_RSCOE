import React from "react";
import CardProfile from "components/Cards/CardProfile.js";

export default function Team() {
  return (
    <>
      <div className="flex flex-wrap lg:h-[90vh] justify-center items-center px-10">
        <div className="w-full lg:w-4/12 px-4 flex justify-center">
          <CardProfile />
        </div>
        <div className="w-full lg:w-4/12 px-4 flex justify-center">
          <CardProfile />
        </div>
        <div className="w-full lg:w-4/12 px-4 flex justify-center">
          <CardProfile />
        </div>
      </div>
    </>
  );
}
