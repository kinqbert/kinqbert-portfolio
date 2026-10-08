import { Portfolio } from "@/components/portfolio/Portfolio";

// Re-render daily so the footer year stays current.
export const revalidate = 86400;

export default function Home() {
  return <Portfolio />;
}
