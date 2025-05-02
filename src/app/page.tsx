import {
  HeadlineSection,
  BasicInfoSection,
  SkillsSection,
  ProjectsSection,
  ContactsSection,
  FooterSection,
} from "@/components/sections";

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
