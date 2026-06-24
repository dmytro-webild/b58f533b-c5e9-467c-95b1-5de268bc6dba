import FooterSimpleCard from '@/components/sections/footer/FooterSimpleCard';
import NavbarFloatingLogo from '@/components/ui/NavbarFloatingLogo';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "Services",    "href": "#services"
  },
  {
    "name": "About",    "href": "#about"
  },
  {
    "name": "Pricing",    "href": "#pricing"
  },
  {
    "name": "Reviews",    "href": "#testimonials"
  },
  {
    "name": "Hero",    "href": "#hero"
  },
  {
    "name": "Metrics",    "href": "#metrics"
  },
  {
    "name": "Faq",    "href": "#faq"
  }
];

  return (
    <StyleProvider buttonVariant="arrow" siteBackground="noise" heroBackground="cornerGlow">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarFloatingLogo
      logo="DogSitDubai"
      logoImageSrc="http://img.b2bpic.net/free-vector/pet-shop-badges-with-yellow-details_23-2147568768.jpg"
      ctaButton={{
        text: "Book Now",        href: "#contact"}}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterSimpleCard
      brand="DogSitDubai"
      columns={[
        {
          title: "Company",          items: [
            {
              label: "About Us",              href: "#"},
            {
              label: "Careers",              href: "#"},
          ],
        },
        {
          title: "Legal",          items: [
            {
              label: "Privacy Policy",              href: "#"},
            {
              label: "Terms",              href: "#"},
          ],
        },
      ]}
      copyright="© 2024 DogSitDubai. All rights reserved."
      links={[
        {
          label: "Privacy",          href: "#"},
        {
          label: "Terms",          href: "#"},
      ]}
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
