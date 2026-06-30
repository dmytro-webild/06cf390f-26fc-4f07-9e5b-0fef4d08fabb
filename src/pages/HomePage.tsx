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
            brand="Kayıtlı Diyetisyeniniz Jamie ile Tanışın"
            description="Gıda ve beslenme alanında 10 yılı aşkın deneyime sahip kayıtlı bir diyetisyenim. Burada ulaşılabilir sağlıklı tarifler, ürünler ve gerçek hayattan beslenme tavsiyeleri bulacaksınız."
            primaryButton={{ text: "Ürünleri İncele", href: "/products" }}
            secondaryButton={{ text: "Daha Fazla Bilgi", href: "#about" }}
            imageSrc="http://img.b2bpic.net/free-photo/beautiful-blond-middle-aged-woman-dining-with-california-s-role-japanese-restaurant-summer-terrace_496169-2544.jpg"
          />
        </SectionErrorBoundary>
      </div>

      <div id="about" data-section="about">
        <SectionErrorBoundary name="about">
          <AboutText
            title="Sağlıklı Beslenmeyi Kolay ve Keyifli Hale Getirmek"
            primaryButton={{ text: "Hikayemi Oku", href: "#about" }}
          />
        </SectionErrorBoundary>
      </div>

      <div id="recipes" data-section="recipes">
        <SectionErrorBoundary name="recipes">
          <FeaturesImageBento
            tag="Favorilerim"
            title="Diyetisyen Onaylı Tarifler"
            description="Bunlar kendi yediğim ve aileme yedirdiğim tariflerin aynısı. Basit, sağlıklı ve lezzetli."
            items={[
              { title: "Makarna Salatası", description: "Şimdiye kadarki en iyi taze makarna salatası.", imageSrc: "http://img.b2bpic.net/free-photo/top-view-colored-bell-peppers-cutting-board-with-raw-pasta-knife-turquoise-surface_141793-18396.jpg" },
              { title: "Sağlıklı Hamburger", description: "Klasik bir yemeğin daha sağlıklı hali.", imageSrc: "http://img.b2bpic.net/free-photo/half-cheeseburger-with-tomatoes-salad_23-2148314191.jpg" },
              { title: "Tam Buğdaylı Kurabiye", description: "Suçluluk hissettirmeyen tatlı kaçamağı.", imageSrc: "http://img.b2bpic.net/free-photo/healthy-oatmeal-cookies-milks-wooden-table_123827-32964.jpg" },
              { title: "Sağlıklı Tavuk Salatası", description: "Dengeli ve doyurucu bir öğle yemeği.", imageSrc: "http://img.b2bpic.net/free-photo/fresh-healthy-meat-vegetables-salad-wooden-table_482257-34234.jpg" },
              { title: "Kahvaltı Kaseleri", description: "Güne dengeli bir başlangıç.", imageSrc: "http://img.b2bpic.net/free-photo/morning-portrait-smiling-woman-eating-her-breakfast-holding-spoon-having-cereals-with-milk_1258-203865.jpg" },
              { title: "Yeşil Besin İçeceği", description: "Enerji dolu sağlıklı içecek.", imageSrc: "http://img.b2bpic.net/free-photo/still-life-tasty-summer-smoothie_23-2148197873.jpg" },
              { title: "Ev Yapımı Humus", description: "Mükemmel sağlıklı atıştırmalıklar.", imageSrc: "http://img.b2bpic.net/free-photo/colorful-tasty-hummus-with-ingredients_23-2149401919.jpg" }
            ]}
          />
        </SectionErrorBoundary>
      </div>

      <div id="testimonials" data-section="testimonials">
        <SectionErrorBoundary name="testimonials">
          <TestimonialOverlayCards
            tag="Topluluk"
            title="Okuyucularımız Ne Diyor"
            description="Topluluğumuza katılın ve en iyi halinizi hissetmeye başlayın."
            testimonials={[
              { name: "Sarah J.", role: "Okuyucu", company: "Topluluk", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/sportswoman-smiling-listening-music_23-2147600806.jpg" },
              { name: "Mike D.", role: "Okuyucu", company: "Topluluk", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/happy-mature-businessman-showing-thumb-up_1262-3024.jpg" },
              { name: "Elena R.", role: "Okuyucu", company: "Topluluk", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/vertical-portrait-young-good-looking-cheerful-dark-skinned-africal-female-student-with-wavy-hair-blue-shirt-sitting-coffee-shop-drinking-latte-smiling-looking-camera-with-happy-rela_176420-12401.jpg" },
              { name: "David K.", role: "Okuyucu", company: "Topluluk", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/young-beautiful-woman-sporting-suit-after-workout-yoga_1153-6140.jpg" },
              { name: "Jamie L.", role: "Okuyucu", company: "Topluluk", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/healthy-fitness-concept-beautiful-american-african-lady-fitness-clothes-diet-eating-fresh-salad-isolated-white-background_1258-105787.jpg" }
            ]}
          />
        </SectionErrorBoundary>
      </div>

      <div id="faq" data-section="faq">
        <SectionErrorBoundary name="faq">
          <FaqSplitMedia
            tag="Yardım"
            title="Sıkça Sorulan Beslenme Soruları"
            description="Sağlıklı beslenme yolculuğunuza başlamak hakkında bilmeniz gereken her şey."
            items={[
              { question: "Beslenme yaklaşımınız nedir?", answer: "Kısıtlamaya değil dengeye inanıyorum, sağlıklı gıdalara odaklanıyorum." },
              { question: "Tarifleriniz glutensiz mi?", answer: "Birçoğu öyle veya glutensiz diyetler için basit değişiklikler sunuyor." },
              { question: "Ne sıklıkla tarif paylaşıyorsunuz?", answer: "Her hafta yeni dengeli tarifler paylaşmayı hedefliyorum." }
            ]}
            imageSrc="http://img.b2bpic.net/free-photo/woman-cuts-cabbage-cucumbers-wooden-board-closeup_169016-50022.jpg"
          />
        </SectionErrorBoundary>
      </div>

      <div id="contact" data-section="contact">
        <SectionErrorBoundary name="contact">
          <ContactCta
            tag="İletişim"
            text="Medya ile ilgili bir sorunuz veya genel bir beslenme sorunuz mu var? Sizden haber almayı çok isterim."
            primaryButton={{ text: "Benimle İletişime Geçin", href: "mailto:merhaba@ornek.com" }}
            secondaryButton={{ text: "Ürünleri İncele", href: "/products" }}
          />
        </SectionErrorBoundary>
      </div>

      <div id="footer" data-section="footer">
        <SectionErrorBoundary name="footer">
          <FooterSimpleCard
            brand="Jamie Beslenme"
            columns={[
              { title: "Menü", items: [{ label: "Hakkımda", href: "#about" }, { label: "Tarifler", href: "#recipes" }] },
              { title: "Kaynaklar", items: [{ label: "El Kitapları", href: "/products" }, { label: "Favori Ürünler", href: "/products" }] }
            ]}
            copyright="© 2024 Jamie Beslenme. Tüm hakları saklıdır."
            links={[{ label: "Gizlilik Politikası", href: "#" }]}
          />
        </SectionErrorBoundary>
      </div>
    </>
  );
}
