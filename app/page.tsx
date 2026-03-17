import { HeroSection } from "@/components/hero-section"
import { ProblemSolutionSection } from "@/components/problem-solution-section"
import { FeaturesSection } from "@/components/features-section"
import { SocialProofSection } from "@/components/social-proof-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { FinalCtaSection } from "@/components/final-cta-section"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/Hero"
import { ValueProps } from "@/components/ValueProps";
import { About } from "@/components/About";
import { BenefitsSection } from "@/components/benefits";
import { SectorsSection } from "@/components/SectorsSection"
import { CapabilitiesSection } from "@/components/CapabilitiesSection";
import { UnifiedDashboard } from "@/components/UnifiedDashboard";
import {Navbar} from "@/components/navbar";



export default function HomePage() {
  return (
    <main className="min-h-screen">
        <Navbar/>
      <Hero />
        {/*Remove about section and remove it into a separate page called About or "Company"*/}
        {/*<About />*/}
        <CapabilitiesSection />
        <SectorsSection />
        {/*Should choose to keep either valueProps section or Unified dash section
        advantage of former is that you can use it to show video and stats
        latter adv. is that it contains content given directly from Dr Hussein
         Regardless which one we choose, this one should have a diff background to
         break up the monotony of the white*/}
        {/*<ValueProps />*/}
        <UnifiedDashboard  image={"dashmap.png"}/>
        {/*<ProblemSolutionSection />*/}
        {/*<FeaturesSection />*/}
      <BenefitsSection />
        {/*<SocialProofSection />*/}
        {/*I would personally get rid of "how it works", esp bcz dr hussein
        mentioned it should be sort of unclear*/}
        <HowItWorksSection />
      <FinalCtaSection />
      <Footer />
    </main>
  )
}
