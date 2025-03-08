import {
  HeadlineSection,
  BasicInfoSection,
  SkillsSection,
  ProjectsSection,
} from "@/components/sections";
import { ContactsSection } from "@/components/sections/ContactsSection";
import { FooterSection } from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <main>
      <HeadlineSection />
      <BasicInfoSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactsSection />
      <FooterSection />
    </main>
  );
}
