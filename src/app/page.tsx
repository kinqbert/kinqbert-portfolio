import {
  HeadlineSection,
  BasicInfoSection,
  SkillsSection,
  ProjectsSection,
} from "@/components/sections";

import "./page.scss";

export default function Home() {
  return (
    <main className="main">
      <HeadlineSection />
      <BasicInfoSection />
      <SkillsSection />
      <ProjectsSection />
    </main>
  );
}
