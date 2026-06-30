import FooterSimpleCard from '@/components/sections/footer/FooterSimpleCard';
import NavbarInline from '@/components/ui/NavbarInline';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "Home",
    "href": "#"
  },
  {
    "name": "About",
    "href": "#about"
  },
  {
    "name": "Recipes",
    "href": "#recipes"
  },
  {
    "name": "Nutrition",
    "href": "#contact"
  },
  {
    "name": "Hero",
    "href": "#hero"
  },
  {
    "name": "Testimonials",
    "href": "#testimonials"
  },
  {
    "name": "Faq",
    "href": "#faq"
  }
];

  return (
    <StyleProvider buttonVariant="stagger" siteBackground="noise" heroBackground="gradientBars">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarInline
      logo="Jamie's Nutrition"
      ctaButton={{
        text: "Shop Favorites",
        href: "#shop",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterSimpleCard
      brand="Jamie's Nutrition"
      columns={[
        {
          title: "Navigation",
          items: [
            {
              label: "About",
              href: "#",
            },
            {
              label: "Recipes",
              href: "#",
            },
          ],
        },
        {
          title: "Resources",
          items: [
            {
              label: "Handbooks",
              href: "#",
            },
            {
              label: "Shop Favorites",
              href: "#",
            },
          ],
        },
      ]}
      copyright="© 2024 Jamie's Nutrition. All rights reserved."
      links={[
        {
          label: "Privacy Policy",
          href: "#",
        },
      ]}
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
