import React from "react";
import p_img from "../../assets/img/team/President.jpg";
import s_img from "../../assets/img/team/Secretary.jpg";
import t_img from "../../assets/img/team/Treasurer.jpg";
import { motion } from "framer-motion";

export default function Team() {
  const team = [
    {
      photo: p_img,
      name: "RTR. Samruddhi Parte",
      role: "President",
    },
    {
      photo: s_img,
      name: "RTR. Swarada Gade",
      role: "Secretary",
    },
    {
      photo: t_img,
      name: "RTR. Sanket Kanegaonkar",
      role: "Treasurer",
    },
  ];
  return (
    <>
      <div className="flex flex-wrap content-center justify-evenly h-full w-full">
        {team.map((member, index) => (
          <div className="p-4 md:p-7 w-[90%] md:w-1/2 lg:w-1/4">
            <div className="overflow-hidden hover:scale-110 transition duration-500 ease-out">
              <img
                className="w-44 h-60 mx-auto object-cover object-center shadow-xl rounded-md"
                src={member.photo}
                alt={member.name}
              />
              <div className="p-6 text-center">
                <h1 className="text-xl font-semibold font-[Montserrat] text-primary">{member.name}</h1>
                <p className="leading-relaxed mb-3 font-[Montserrat] font-medium">{member.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
