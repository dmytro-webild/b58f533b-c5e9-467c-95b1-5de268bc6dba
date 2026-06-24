import AboutMediaOverlay from '@/components/sections/about/AboutMediaOverlay';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqTabbedAccordion from '@/components/sections/faq/FaqTabbedAccordion';
import FeaturesArrowCards from '@/components/sections/features/FeaturesArrowCards';
import HeroBillboardBrand from '@/components/sections/hero/HeroBillboardBrand';
import MetricsIconCards from '@/components/sections/metrics/MetricsIconCards';
import PricingSimpleCards from '@/components/sections/pricing/PricingSimpleCards';
import TestimonialColumnMarqueeCards from '@/components/sections/testimonial/TestimonialColumnMarqueeCards';
import { CheckCircle, Clock, Heart, MapPin, Star } from "lucide-react";
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroBillboardBrand
      brand="Premium Dog Sitting Care in Dubai You Can Trust"
      description="Experienced, vetted sitters provide personalized attention for your dog while you travel or work. Book instantly with transparent pricing and realtime updates."
      primaryButton={{
        text: "Book Your Sitter Today",
        href: "#contact",
      }}
      secondaryButton={{
        text: "View Our Services",
        href: "#services",
      }}
      imageSrc="http://img.b2bpic.net/free-photo/domestic-cute-golden-retriever-laying-floor-holding-his-chew-toy-window_181624-1989.jpg"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutMediaOverlay
      tag="Trusted Care"
      title="Personalized Attention for Your Best Friend"
      description="We understand that your dog is family. Our Dubai-based sitters are thoroughly vetted and trained to provide the specific care, routines, and affection your pet deserves while you are busy."
      imageSrc="http://img.b2bpic.net/free-photo/young-woman-having-walk-with-her-pet-french-bulldog_1303-32209.jpg"
    />
    </SectionErrorBoundary>
  </div>

  <div id="services" data-section="services">
    <SectionErrorBoundary name="services">
          <FeaturesArrowCards
      tag="Our Services"
      title="Comprehensive Pet Care Solutions"
      description="Tailored sitting services for modern Dubai pet owners."
      items={[
        {
          title: "Real-time Updates",
          tags: [
            "Monitoring",
            "Safety",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-with-dog-taking-selfie_23-2148885030.jpg",
        },
        {
          title: "Vetted Professionals",
          tags: [
            "Safety",
            "Vetted",
          ],
          imageSrc: "http://img.b2bpic.net/free-vector/volunteers-help-work_24908-58105.jpg",
        },
        {
          title: "Premium Activity Kits",
          tags: [
            "Care",
            "Engagement",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/cheerful-young-woman-soft-pajama-plays-with-favorite-dog-bed-awakes-late-has-lazy-weekend-home-isolated-brown-background-happy-curly-haired-female-model-expresses-love-pet_273609-60875.jpg",
        },
        {
          title: "Personalized Routines",
          tags: [
            "Custom",
            "Attention",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-woman-with-cute-dog-outdoors_23-2149940593.jpg",
        },
        {
          title: "Emergency Protocols",
          tags: [
            "Safety",
            "Urgency",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-dog-accessories_23-2150959988.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="metrics" data-section="metrics">
    <SectionErrorBoundary name="metrics">
          <MetricsIconCards
      tag="Our Impact"
      title="Trusted by Dubai's Pet Community"
      metrics={[
        {
          icon: CheckCircle,
          title: "Verified Sitters",
          value: "150+",
        },
        {
          icon: Star,
          title: "Happy Pets",
          value: "1000+",
        },
        {
          icon: Clock,
          title: "Hours Provided",
          value: "50k+",
        },
        {
          icon: Heart,
          title: "Returning Clients",
          value: "85%",
        },
        {
          icon: MapPin,
          title: "Dubai Neighborhoods",
          value: "20+",
        },
      ]}
      description="Proven dedication to pet happiness and owner peace of mind."
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialColumnMarqueeCards
      tag="Reviews"
      title="What Our Clients Say"
      description="Hear from fellow pet owners in Dubai who trust us."
      testimonials={[
        {
          name: "Sarah J.",
          role: "Finance Professional",
          quote: "Finally, a service I trust with my golden retriever. The updates are fantastic!",
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-having-walk-with-her-pet-french-bulldog_1303-32211.jpg",
        },
        {
          name: "Michael B.",
          role: "Dubai Tech Lead",
          quote: "Seamless booking and very high quality care. Highly recommended for working expats.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-female-dentist-dentistry-concept-dental-treatment_169016-67131.jpg",
        },
        {
          name: "Emily C.",
          role: "Business Executive",
          quote: "Peace of mind while I travel is everything. My dog loves the sitter!",
          imageSrc: "http://img.b2bpic.net/free-photo/cheerful-young-man-suit-glasses-taking-photo-with-cute-black-pug-dog-his-shoulder-smiling-happy-showing-peace-sign-posing-white-background_1258-56365.jpg",
        },
        {
          name: "David L.",
          role: "Project Manager",
          quote: "Professional, reliable, and my dog is always happy when I return home.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-pretty-mulatto-woman-with-trendy-make-up-standing-with-arms-crossed-office-indoor-photo-female-black-employee-posing-with-international-colleagues-gently-smile_197531-3788.jpg",
        },
        {
          name: "Jessica R.",
          role: "Architect",
          quote: "Excellent service and very easy to manage via the app and booking portal.",
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-handsome-middle-aged-business-leader_1262-4822.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="pricing" data-section="pricing">
    <SectionErrorBoundary name="pricing">
          <PricingSimpleCards
      tag="Transparent Pricing"
      title="Simple & Clear Plans"
      description="Choose the level of care that suits your dog's lifestyle."
      plans={[
        {
          tag: "Daily",
          price: "AED 150",
          description: "Perfect for standard working days.",
          features: [
            "Daily walk",
            "Meal assistance",
            "Playtime",
          ],
        },
        {
          tag: "Overnight",
          price: "AED 350",
          description: "Peace of mind for business travel.",
          features: [
            "Overnight stay",
            "Regular updates",
            "Custom walks",
          ],
        },
        {
          tag: "Premium",
          price: "AED 500",
          description: "All-inclusive, personalized attention.",
          features: [
            "24/7 care",
            "Vet visits if needed",
            "Custom grooming",
          ],
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqTabbedAccordion
      tag="FAQ"
      title="Common Questions"
      categories={[
        {
          name: "General",
          items: [
            {
              question: "Are your sitters vetted?",
              answer: "Yes, every sitter goes through a strict verification and training process.",
            },
            {
              question: "How do I book?",
              answer: "You can book directly via our online portal.",
            },
            {
              question: "Do you offer walks?",
              answer: "Yes, all our plans include scheduled walking time.",
            },
            {
              question: "What if my pet is ill?",
              answer: "Our sitters are trained for first-aid and can arrange emergency vet visits.",
            },
            {
              question: "Can I request a meet-up?",
              answer: "Yes, we encourage meet-and-greet sessions before the first booking.",
            },
          ],
        },
      ]}
      description="Everything you need to know about our services."
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Ready to get started?"
      text="Book your dog's favorite sitter today and enjoy peace of mind."
      primaryButton={{
        text: "Book Now",
        href: "#",
      }}
      secondaryButton={{
        text: "Get in touch",
        href: "#",
      }}
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
