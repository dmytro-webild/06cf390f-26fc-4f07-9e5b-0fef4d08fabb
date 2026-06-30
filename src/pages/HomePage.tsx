import AboutText from '@/components/sections/about/AboutText';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeaturesImageBento from '@/components/sections/features/FeaturesImageBento';
import HeroBrand from '@/components/sections/hero/HeroBrand';
import TestimonialOverlayCards from '@/components/sections/testimonial/TestimonialOverlayCards';
import FooterSimpleCard from '@/components/sections/footer/FooterSimpleCard';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
      <div id="hero" data-section="hero">
        <SectionErrorBoundary name="hero">
          <HeroBrand
            brand="Meet Your Registered Dietitian, Jamie"
            description="I’m a Registered Dietitian with over 10 years of experience in food and nutrition. Here you’ll find approachable healthy recipes and real-life nutrition advice."
            primaryButton={{ text: "Browse Recipes", href: "#recipes" }}
            secondaryButton={{ text: "Learn More", href: "#about" }}
            imageSrc="http://img.b2bpic.net/free-photo/beautiful-blond-middle-aged-woman-dining-with-california-s-role-japanese-restaurant-summer-terrace_496169-2544.jpg"
          />
        </SectionErrorBoundary>
      </div>

      <div id="about" data-section="about">
        <SectionErrorBoundary name="about">
          <AboutText
            title="Making Healthy Eating Easy and Enjoyable"
            primaryButton={{ text: "Read My Story", href: "#about" }}
          />
        </SectionErrorBoundary>
      </div>

      <div id="recipes" data-section="recipes">
        <SectionErrorBoundary name="recipes">
          <FeaturesImageBento
            tag="My Favorites"
            title="Dietitian-Approved Recipes"
            description="These are the same recipes I eat myself and feed my family. Simple, healthy, and delicious."
            items={[
              { title: "Grinder Pasta Salad", description: "The best fresh pasta salad ever.", imageSrc: "http://img.b2bpic.net/free-photo/top-view-colored-bell-peppers-cutting-board-with-raw-pasta-knife-turquoise-surface_141793-18396.jpg" },
              { title: "Big Mac Sloppy Joes", description: "Healthier twist on a classic meal.", imageSrc: "http://img.b2bpic.net/free-photo/half-cheeseburger-with-tomatoes-salad_23-2148314191.jpg" },
              { title: "Whole Wheat Cookies", description: "Guilt-free sweet treat.", imageSrc: "http://img.b2bpic.net/free-photo/healthy-oatmeal-cookies-milks-wooden-table_123827-32964.jpg" },
              { title: "Healthy BLT Chicken Salad", description: "Balanced and filling lunch.", imageSrc: "http://img.b2bpic.net/free-photo/fresh-healthy-meat-vegetables-salad-wooden-table_482257-34234.jpg" },
              { title: "Breakfast Bowls", description: "Balanced start to your day.", imageSrc: "http://img.b2bpic.net/free-photo/morning-portrait-smiling-woman-eating-her-breakfast-holding-spoon-having-cereals-with-milk_1258-203865.jpg" },
              { title: "Green Nutrient Drink", description: "Energy-packed healthy drink.", imageSrc: "http://img.b2bpic.net/free-photo/still-life-tasty-summer-smoothie_23-2148197873.jpg" },
              { title: "Homemade Hummus Dips", description: "Perfect healthy snacks.", imageSrc: "http://img.b2bpic.net/free-photo/colorful-tasty-hummus-with-ingredients_23-2149401919.jpg" }
            ]}
          />
        </SectionErrorBoundary>
      </div>

      <div id="testimonials" data-section="testimonials">
        <SectionErrorBoundary name="testimonials">
          <TestimonialOverlayCards
            tag="Community"
            title="What Readers Are Saying"
            description="Join our community and start feeling your best."
            testimonials={[
              { name: "Sarah J.", role: "Reader", company: "Community", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/sportswoman-smiling-listening-music_23-2147600806.jpg" },
              { name: "Mike D.", role: "Reader", company: "Community", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/happy-mature-businessman-showing-thumb-up_1262-3024.jpg" },
              { name: "Elena R.", role: "Reader", company: "Community", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/vertical-portrait-young-good-looking-cheerful-dark-skinned-africal-female-student-with-wavy-hair-blue-shirt-sitting-coffee-shop-drinking-latte-smiling-looking-camera-with-happy-rela_176420-12401.jpg" },
              { name: "David K.", role: "Reader", company: "Community", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/young-beautiful-woman-sporting-suit-after-workout-yoga_1153-6140.jpg" },
              { name: "Jamie L.", role: "Reader", company: "Community", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/healthy-fitness-concept-beautiful-american-african-lady-fitness-clothes-diet-eating-fresh-salad-isolated-white-background_1258-105787.jpg" }
            ]}
          />
        </SectionErrorBoundary>
      </div>

      <div id="faq" data-section="faq">
        <SectionErrorBoundary name="faq">
          <FaqSplitMedia
            tag="Help"
            title="Common Nutrition Questions"
            description="Everything you need to know about starting your healthy eating journey."
            items={[
              { question: "What is your approach to nutrition?", answer: "I believe in balance, not restriction, focusing on wholesome food." },
              { question: "Are your recipes gluten-free?", answer: "Many are, or offer simple modifications for gluten-free diets." },
              { question: "How often do you post recipes?", answer: "I aim to share new balanced recipes every week." }
            ]}
            imageSrc="http://img.b2bpic.net/free-photo/woman-cuts-cabbage-cucumbers-wooden-board-closeup_169016-50022.jpg"
          />
        </SectionErrorBoundary>
      </div>

      <div id="contact" data-section="contact">
        <SectionErrorBoundary name="contact">
          <ContactCta
            tag="Connect"
            text="Have a media inquiry or general nutrition question? I'd love to hear from you."
            primaryButton={{ text: "Contact Me", href: "#" }}
            secondaryButton={{ text: "Shop Favorites", href: "#" }}
          />
        </SectionErrorBoundary>
      </div>

      <div id="footer" data-section="footer">
        <SectionErrorBoundary name="footer">
          <FooterSimpleCard
            brand="Jamie's Nutrition"
            columns={[
              { title: "Navigation", items: [{ label: "About", href: "#" }, { label: "Recipes", href: "#" }] },
              { title: "Resources", items: [{ label: "Handbooks", href: "#" }, { label: "Shop Favorites", href: "#" }] }
            ]}
            copyright="© 2024 Jamie's Nutrition. All rights reserved."
            links={[{ label: "Privacy Policy", href: "#" }]}
          />
        </SectionErrorBoundary>
      </div>
    </>
  );
}
