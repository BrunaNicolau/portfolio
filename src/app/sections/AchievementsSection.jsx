"use client";
import React from "react";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Projects",
    value: "40",
    postfix: "+",
  },
  {
    metric: "Companies",
    value: "4",
  },
  {
    metric: "Years",
    value: "3",
  },
];

const AchievementsSection = () => {
  const changeTheme = useSelector((state) => state.theme);
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-4xl font-bold flex flex-row">
                {achievement.prefix}
                <span
                  className={`${
                    changeTheme.theme ? "text-white" : "text-slate-900"
                  }`}
                >
                  <AnimatedNumbers
                    includeComma
                    animateToNumber={parseInt(achievement.value)}
                    locale="en-US"
                    className="text-4xl font-bold"
                    configs={(_, index) => {
                      return {
                        mass: 1,
                        friction: 100,
                        tensions: 140 * (index + 1),
                      };
                    }}
                  />
                </span>
                <p
                  className={`${
                    changeTheme.theme ? "text-white" : "text-slate-900"
                  }`}
                >
                  {achievement.postfix}
                </p>
              </h2>
              <p
                className={`${
                  changeTheme.theme ? "text-white" : "text-slate-900"
                } text-base sm:text-lg mb-6 lg:text-xl`}
              >
                {achievement.metric}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
