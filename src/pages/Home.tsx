import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import GradientButton from "@/components/GradientButton";
import { ChevronLeft, ChevronRight } from "lucide-react";
import imgMockupLaptop from "@/assets/img_principal_mockup_laptop.png";
import imgCarrossel1 from "@/assets/img_principal_carrossel_1.png";
import imgCarrossel2 from "@/assets/img_principal_carrossel_2.png";
import imgCarrossel3 from "@/assets/img_principal_carrossel_3.png";
import imgCarrossel4 from "@/assets/img_principal_carrossel_4.png";
import imgCarrossel5 from "@/assets/img_principal_carrossel_5.png";
import imgCarrossel6 from "@/assets/img_principal_carrossel_6.png";
import imgCarrossel7 from "@/assets/img_principal_carrossel_7.png";
import imgCarrossel8 from "@/assets/img_principal_carrossel_8.png";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const portfolioImages = [
    imgCarrossel1, imgCarrossel2, imgCarrossel3, imgCarrossel4,
    imgCarrossel5, imgCarrossel6, imgCarrossel7, imgCarrossel8,
    imgCarrossel1, imgCarrossel2, imgCarrossel3, imgCarrossel4
  ];

  const portfolioItems = portfolioImages.map((img, i) => ({
    id: i + 1,
    image: img,
  }));

  const clientLogos = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    image: `Logo ${i + 1}.png`,
  }));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % (portfolioItems.length - 2));
    }, 3000);

    return () => clearInterval(interval);
  }, [portfolioItems.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % (portfolioItems.length - 2));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? portfolioItems.length - 3 : prev - 1
    );
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5511999999999", "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <BackToTop />

      {/* Hero Section */}
      <section className="pt-32 pb-20 container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-6xl lg:text-7xl font-bold">
              Dando <span className="text-secondary">vida a</span>
              <br />
              <span className="gradient-text">suas artes</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Com mais de 10 anos transformando ideias em impacto visual, ofereço
              serviços profissionais de design, fotografia, vídeo e modelagem 3D que
              elevam sua marca a outro nível
            </p>
            <p className="text-sm text-muted-foreground italic max-w-lg">
              — mas as vagas para novos projetos deste mês são limitadas. Garanta já o
              seu antes da agenda fechar!
            </p>
            <GradientButton onClick={handleWhatsAppClick}>
              Solicitar Orçamento
            </GradientButton>
          </div>

          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl hover-glow">
              <img src={imgMockupLaptop} alt="Mockup Laptop" className="w-full h-auto" />
            </div>
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Portfolio Carousel */}
      <section className="py-20 container-custom">
        <h2 className="text-5xl font-bold mb-12 text-center">
          Trabalhos em <span className="gradient-text">Destaque!</span>
        </h2>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out gap-6"
              style={{
                transform: `translateX(-${currentSlide * (100 / 3)}%)`,
              }}
            >
              {portfolioItems.map((item) => (
                <div
                  key={item.id}
                  className="min-w-[calc(33.333%-1rem)] glass-card p-2 hover-scale hover-glow"
                >
                  <img src={item.image} alt={`Portfolio ${item.id}`} className="w-full h-full object-cover rounded-lg aspect-square" />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-background/80 backdrop-blur-lg border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-background/80 backdrop-blur-lg border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: portfolioItems.length - 2 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentSlide
                    ? "bg-primary w-8"
                    : "bg-border hover:bg-primary/50"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-[hsl(330,80%,60%)] to-secondary opacity-100 h-[240px]"></div>
        
        <div className="relative z-10 container-custom">
          <h2 className="text-5xl font-bold mb-12 text-white">
            Nossos <span className="text-background">Clientes</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-white">
              <p className="text-xl leading-relaxed">
                Se você quer elevar o visual da sua marca, produto ou negócio,{" "}
                <span className="font-bold">o momento é agora!</span>
              </p>
              <p className="text-lg">
                <span className="font-bold">confira alguns de nossos clientes</span>{" "}
                que já passaram por aqui.
              </p>
            </div>

            <div className="relative">
              <div className="aspect-[777/457] bg-gradient-to-br from-background/20 to-background/40 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20">
                <span className="text-white/70 text-center px-4">mesa_digitalizadora.png</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 container-custom mt-12">
          <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {clientLogos.map((logo) => (
              <div
                key={logo.id}
                className="glass-card p-6 flex items-center justify-center hover-scale hover-glow"
              >
                <div className="w-full h-[172px] bg-gradient-to-br from-primary/10 to-secondary/10 rounded flex items-center justify-center">
                  <span className="text-xs text-muted-foreground text-center">
                    {logo.image}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card/30">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-5xl font-bold">
                Me chama
                <br />
                no WhatsApp
              </h2>
              <p className="text-xl text-muted-foreground">
                pra tirarmos mais dúvidas sobre o seu projeto!
              </p>
              <GradientButton onClick={handleWhatsAppClick}>
                Solicitar Orçamento
              </GradientButton>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center hover-glow">
                <span className="text-muted-foreground text-center px-4">
                  img_quemsou_foto_perfil.png
                </span>
              </div>
              <div className="absolute -bottom-4 -right-4 text-4xl font-bold italic gradient-text">
                Emerson Leite
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
