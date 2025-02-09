import {HeroSection} from "@/components/hero-section";
import {BrandsTicker} from "@/components/brands-ticker";
import {IntroductionSection} from "@/components/introduction-section";
import {FeaturesSection} from "@/components/features-section";
import {IntegrationsSection} from "@/components/integrations-section";
import {CallToAction} from "@/components/call-to-action";
import {FAQSection} from "@/components/faq-section";

export default function Home() {
  return (
    <>
      <HeroSection/>
      <BrandsTicker/>
      <IntroductionSection/>
      <FeaturesSection/>
      <IntegrationsSection/>
      <FAQSection/>
      <CallToAction/>
    </>
  )
}
