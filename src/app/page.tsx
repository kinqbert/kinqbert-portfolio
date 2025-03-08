import {
  HeadlineSection,
  BasicInfoSection,
  SkillsSection,
  ProjectsSection,
} from "@/components/sections";

import "./page.scss";
import { ContactsSection } from "@/components/sections/ContactsSection";

export default function Home() {
  return (
    <main className="main">
      <HeadlineSection />
      <BasicInfoSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactsSection />
    </main>
  );
}
