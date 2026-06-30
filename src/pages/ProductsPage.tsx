import Button from "@/components/ui/Button";
import HeroBackgroundSlot from "@/components/ui/HeroBackgroundSlot";
import TextAnimation from "@/components/ui/TextAnimation";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AvatarGroup from "@/components/ui/AvatarGroup";
import { ArrowUpRight, Loader2 } from "lucide-react";
import GridOrCarousel from "@/components/ui/GridOrCarousel";
import useProducts from "@/hooks/useProducts";

export default function ProductsPage() {
  return (
    <>
      <div data-webild-section="HeroBillboard"><section aria-label="Hero section" className="relative pt-25 pb-20 md:pt-30"><HeroBackgroundSlot /><div className="flex flex-col gap-12 md:gap-15 w-content-width mx-auto"><div className="flex flex-col items-center gap-3 text-center"><AvatarGroup avatarsSrc={["https://img.freepik.com/free-photo/portrait-young-woman-smiling-isolated_23-2149158610.jpg","https://img.freepik.com/free-photo/handsome-young-man-with-new-stylish-haircut_176420-19637.jpg","https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg"]} label="10+ yıllık deneyim" className="mb-1" /><TextAnimation text="Ürünler" variant="slide-up" gradientText={true} tag="h1" className="md:max-w-8/10 text-7xl 2xl:text-8xl leading-[1.15] font-semibold text-center text-balance" /><TextAnimation text="Sağlıklı beslenmeyi günlük hayatınıza pratik bir şekilde entegre etmenize yardımcı olacak, özenle seçilmiş favori ürünlerim." variant="slide-up" gradientText={false} tag="p" className="md:max-w-7/10 text-lg md:text-xl leading-snug text-balance" /><div className="flex flex-wrap justify-center gap-3 mt-2 md:mt-3"><Button text="Tümünü Gör" href="#all-products" variant="primary" /><Button text="Tariflere Göz At" href="/recipes" variant="secondary" animationDelay={0.1} /></div></div><ScrollReveal variant="fade-blur" delay={0.2} className="w-full p-2 xl:p-3 2xl:p-4 card rounded overflow-hidden"><ImageOrVideo imageSrc="https://img.freepik.com/free-photo/top-view-healthy-food-arrangement_23-2148890539.jpg" className="aspect-4/5 md:aspect-video" /></ScrollReveal></div></section></div>
      <div data-webild-section="ProductMediaCards"><section aria-label="Products section" className="py-20"><div className="w-content-width mx-auto flex justify-center"><Loader2 className="size-8 animate-spin text-foreground" strokeWidth={1.5} /></div></section></div>
    </>
  );
}
