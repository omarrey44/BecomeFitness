import { Hero } from "@/components/sections/hero";
import { Philosophy } from "@/components/sections/philosophy";
import { WhoFor } from "@/components/sections/who-for";
import { Services } from "@/components/sections/services";
import { Method } from "@/components/sections/method";
import { About } from "@/components/sections/about";
import { Results } from "@/components/sections/results";
import { Testimonials } from "@/components/sections/testimonials";
import { Experience } from "@/components/sections/experience";
import { SocialContent } from "@/components/sections/social-content";
import { ConsultationCta } from "@/components/sections/consultation-cta";
import { Contact } from "@/components/sections/contact";
import { Location } from "@/components/sections/location";
import { Faq } from "@/components/sections/faq";

export default function Home() {
  return (
    <>
      <Hero />
      <Philosophy />
      <WhoFor />
      <Services />
      <Method />
      <About />
      <Results />
      <Testimonials />
      <Experience />
      <SocialContent />
      <ConsultationCta />
      <Contact />
      <Location />
      <Faq />
    </>
  );
}
