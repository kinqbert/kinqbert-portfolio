import { TechnologyItem } from "@/components/common/TechnologyItem";
import {
  frontEndTechnologies,
  backEndTechnologies,
  toolsTechnologies,
  otherTechnologies,
} from "@/constants/technologyStack";

import styles from "./SkillsSection.module.scss";
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
    <section className={styles.skillsSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Skills</h2>

        <ul className={styles.categoriesList}>
          {technologiesCategories.map((technologiesCategory, index) => (
            <div key={index}>
              <h3 className={styles.technologyTitle}>
                {technologiesCategory.categoryTitle}
              </h3>
              <div className={styles.technologiesList}>
                {technologiesCategory.technologies.map((technology, index) => (
                  <TechnologyItem technology={technology} key={index} />
                ))}
              </div>
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
};
