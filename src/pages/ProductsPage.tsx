import React from "react";
import { routes } from "@/routes";
import NavbarCentered from "@/components/ui/NavbarCentered";
import HeroBillboard from "@/components/sections/hero/HeroBillboard";
import ProductMediaCards from "@/components/sections/product/ProductMediaCards";
import FeaturesIconCards from "@/components/sections/features/FeaturesIconCards";
import ContactCta from "@/components/sections/contact/ContactCta";
import NoiseBackground from "@/components/ui/NoiseBackground";

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <NoiseBackground position="fixed" />

      <NavbarCentered
        logo="Marka"
        navItems={routes.map((r) => ({ name: r.label, href: r.path }))}
        ctaButton={{ text: "Bize Ulaşın", href: "/contact" }}
      />

      <main className="relative z-10">
        <HeroBillboard
          tag="Koleksiyonumuz"
          title="Yenilikçi Ürünlerimizi Keşfedin"
          description="İhtiyaçlarınıza özel olarak tasarlanmış, yüksek kaliteli ve sürdürülebilir çözümler sunuyoruz."
          primaryButton={{ text: "Ürünleri İncele", href: "#products" }}
          secondaryButton={{ text: "Daha Fazla Bilgi", href: "#features" }}
          imageSrc="https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=2000&auto=format&fit=crop"
        />

        <div id="products">
          <ProductMediaCards
            tag="Öne Çıkanlar"
            title="En Çok Satan Ürünlerimiz"
            description="Müşterilerimizin favorisi olan ve endüstri standartlarını belirleyen ürün yelpazemiz."
            products={[
              {
                name: "Pro Sürüm X",
                price: "₺2.999",
                imageSrc: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop",
                onClick: () => console.log("Pro Sürüm X tıklandı")
              },
              {
                name: "Başlangıç Paketi",
                price: "₺999",
                imageSrc: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop",
                onClick: () => console.log("Başlangıç Paketi tıklandı")
              },
              {
                name: "Kurumsal Çözüm",
                price: "Özel Fiyat",
                imageSrc: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=800&auto=format&fit=crop",
                onClick: () => console.log("Kurumsal Çözüm tıklandı")
              }
            ]}
          />
        </div>

        <div id="features">
          <FeaturesIconCards
            tag="Neden Biz?"
            title="Üstün Kalite ve Güvence"
            description="Her bir ürünümüz, en yüksek standartlarda üretilir ve test edilir."
            features={[
              {
                icon: "Shield",
                title: "Güvenilir",
                description: "Uzun ömürlü kullanım garantisi ve tam koruma."
              },
              {
                icon: "Zap",
                title: "Hızlı Kurulum",
                description: "Saniyeler içinde entegre edin ve hemen kullanmaya başlayın."
              },
              {
                icon: "Heart",
                title: "Müşteri Memnuniyeti",
                description: "7/24 kesintisiz destek hizmeti ile her zaman yanınızdayız."
              }
            ]}
          />
        </div>

        <ContactCta
          tag="Hemen Başlayın"
          text="İşletmeniz için en uygun çözümü bulmak üzere uzman ekibimizle iletişime geçin."
          primaryButton={{ text: "İletişime Geç", href: "/contact" }}
          secondaryButton={{ text: "Kataloğu İndir", href: "/catalog" }}
        />
      </main>
    </div>
  );
}