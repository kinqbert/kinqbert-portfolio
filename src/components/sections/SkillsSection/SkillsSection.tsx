import { TechnologyItem } from "@/components/common/TechnologyItem";
import {
  frontEndTechnologies,
  backEndTechnologies,
  toolsTechnologies,
  otherTechnologies,
} from "@/constants/technologyStack";

import "./SkillsSection.scss";
import { Technology } from "@/types/Technology";

export const SkillsSection = () => {
  const technologiesCategories: {
    categoryTitle: string;
    technologies: Technology[];
  }[] = [
    {
      categoryTitle: "Front-end",
      technologies: frontEndTechnologies,
    },
    {
      categoryTitle: "Back-end",
      technologies: backEndTechnologies,
    },
    {
      categoryTitle: "Tools",
      technologies: toolsTechnologies,
    },
    {
      categoryTitle: "Other",
      technologies: otherTechnologies,
    },
  ];

  return (
    <section className="skills-section">
      <div className="skills-section__container">
        <h2 className="skills-section__title">Skills</h2>

        <div className="skills-section__categories-list">
          {technologiesCategories.map((technologiesCategory, index) => (
            <div key={index}>
              <h3 className="skills-section__technology-title">
                {technologiesCategory.categoryTitle}
              </h3>
              <div className="skills-section__technologies-list">
                {technologiesCategory.technologies.map((technology, index) => (
                  <TechnologyItem technology={technology} key={index} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
