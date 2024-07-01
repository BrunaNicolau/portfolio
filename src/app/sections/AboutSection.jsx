"use client";
import React, { useTransition, useState } from "react";
import { useSelector } from "react-redux";

import Image from "next/image";
import TabButton from "../components/TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>PostgreSQL</li>
        <li>JavaScript</li>
        <li>Angular</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>MBA Digital Solutions Architecture, IMPACTA</li>
        <li>FullStack Developer, DIO</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Azure Fundamentals AZ-900</li>
        <li>Azure AI Fundamentals AI-900</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const changeTheme = useSelector((state) => state.theme);

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className={`${changeTheme.theme ? "text-white" : "text-slate-900"}`} id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/img/about.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-base font-medium lg:text-lg">
            I am a full stack web, driven by my passion for crafting
            interactive, responsive web applications. Proficient in JavaScript, TypeScript,
            Angular, React, Redux, Node.js, Express, PostgreSQL, Sequelize.
            I bring a robust skill set to the table. Always eager to
            broaden my expertise, I thrive as a quick learner. Collaborative by
            nature, I relish the opportunity to team up with others to innovate
            and deliver exceptional applications.developer .
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
