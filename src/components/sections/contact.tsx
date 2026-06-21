import { Phone, Mail, MapPin } from "lucide-react";
import { SectionLabel } from "@/components/ui/section-label";
import { ConsultationForm } from "@/components/form/consultation-form";
import { brand } from "@/lib/content";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-ink text-paper">
      <div className="grain absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 py-24 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Intro */}
          <div>
            <SectionLabel index="10">Consultation</SectionLabel>
            <h2 className="mt-6 text-4xl font-extrabold sm:text-5xl">
              Tell us where you want to go.
            </h2>
            <p className="mt-6 max-w-md text-gray-soft">
              A short, no-pressure conversation about your goals, your schedule,
              and the right way to start. Coaching is by appointment only.
            </p>

            <ul className="mt-10 space-y-5">
              <li className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-paper/15 text-lime">
                  <Phone className="h-4 w-4" />
                </span>
                <a
                  href={brand.phoneHref}
                  className="font-medium transition-colors hover:text-lime"
                >
                  {brand.phone}
                </a>
              </li>
              <li className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-paper/15 text-lime">
                  <Mail className="h-4 w-4" />
                </span>
                <a
                  href={brand.emailHref}
                  className="break-all font-medium transition-colors hover:text-lime"
                >
                  {brand.email}
                </a>
              </li>
              <li className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-paper/15 text-lime">
                  <MapPin className="h-4 w-4" />
                </span>
                <span className="font-medium">
                  {brand.address.street}, {brand.address.area}
                </span>
              </li>
            </ul>
          </div>

          {/* Form */}
          <div className="rounded-card border border-paper/10 bg-charcoal/60 p-6 backdrop-blur-sm sm:p-9">
            <ConsultationForm />
          </div>
        </div>
      </div>
    </section>
  );
}
