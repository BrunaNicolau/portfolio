"use client";
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useSelector } from "react-redux";

import ProjectTag from "../components/ProjectTag";
import ProjectCard from "../components/ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "Game Rescue",
    description: "This game is a classic side-scrolling shoot 'em up",
    image: "/img/projects/resgate.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/BrunaNicolau/jogo_resgate",
  },
  {
    id: 2,
    title: "Todo List",
    description: "The endless todo list",
    image: "/img/projects/todo.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/BrunaNicolau/endless_todo_list",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const changeTheme = useSelector((state) => state.theme);

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2
        className={`text-center text-4xl font-bold mt-4 mb-8 md:mb-12 ${
          changeTheme.theme ? "text-white" : "text-black"
        }`}
      >
        My Projects
      </h2>
      <div className=" flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
