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
          <div className="p-4 md:p-7 w-full md:w-1/2 lg:w-1/4">
            <div className="overflow-hidden hover:scale-110 transition duration-500 ease-out">
              <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 1,
                  delay:0.2
                }}
                className="w-44 h-60 mx-auto object-cover object-center shadow-xl rounded-md"
                src={member.photo}
                alt={member.name}
              />
              <div className="p-6 text-center">
                <motion.h1
                initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    duration: 1,
                    delay: 0.7,
                  }}
                className="text-xl font-medium font-[Montserrat] text-primary">{member.name}</motion.h1>
                <motion.p
                initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    duration: 1,
                    delay: 1,
                  }}
                className="text-lg leading-relaxed mb-3 font-[Montserrat] ">{member.role}</motion.p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
