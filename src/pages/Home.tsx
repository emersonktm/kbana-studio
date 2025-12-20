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
import imgCarrossel9 from "@/assets/img_principal_carrossel_9.png";
import imgCarrossel10 from "@/assets/img_principal_carrossel_10.png";
import imgCarrossel11 from "@/assets/img_principal_carrossel_11.png";
import imgCarrossel12 from "@/assets/img_principal_carrossel_12.png";
import mesaDigitalizadora from "@/assets/mesa_digitalizadora.png";
import imgQuemSouFotoPerfil from "@/assets/img_quemsou_foto_perfil.png";
import logo1 from "@/assets/Logo_1.png";
import logo2 from "@/assets/Logo_2.png";
import logo3 from "@/assets/Logo_3.png";
import logo4 from "@/assets/Logo_4.png";
import logo5 from "@/assets/Logo_5.png";
import logo6 from "@/assets/Logo_6.png";
import logo7 from "@/assets/Logo_7.png";
import logo8 from "@/assets/Logo_8.png";
import logo9 from "@/assets/Logo_9.png";
const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const portfolioImages = [imgCarrossel1, imgCarrossel2, imgCarrossel3, imgCarrossel4, imgCarrossel5, imgCarrossel6, imgCarrossel7, imgCarrossel8, imgCarrossel9, imgCarrossel10, imgCarrossel11, imgCarrossel12];
  const portfolioItems = portfolioImages.map((img, i) => ({
    id: i + 1,
    image: img
  }));
  const clientLogos = [{
    id: 1,
    image: logo1
  }, {
    id: 2,
    image: logo2
  }, {
    id: 3,
    image: logo3
  }, {
    id: 4,
    image: logo4
  }, {
    id: 5,
    image: logo5
  }, {
    id: 6,
    image: logo6
  }, {
    id: 7,
    image: logo7
  }, {
    id: 8,
    image: logo8
  }, {
    id: 9,
    image: logo9
  }];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % (portfolioItems.length - 2));
    }, 3000);
    return () => clearInterval(interval);
  }, [portfolioItems.length]);
  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % (portfolioItems.length - 2));
  };
  const prevSlide = () => {
    setCurrentSlide(prev => prev === 0 ? portfolioItems.length - 3 : prev - 1);
  };
  const handleWhatsAppClick = () => {
    window.open("https://api.whatsapp.com/send?phone=5562999289663", "_blank", "noopener,noreferrer");
  };
  return <div className="min-h-screen bg-background">
      <Header />
      <BackToTop />

      {/* Hero Section */}
      <section className="pt-32 pb-20 container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-6xl lg:text-7xl font-bold">
              <span className="hidden md:inline">Dando <span className="text-secondary">vida a</span></span>
              <span className="md:hidden">Dando <span className="text-secondary">vida</span></span>
              <br />
              <span className="gradient-text"><span className="md:hidden">a suas </span><span className="hidden md:inline">suas </span>artes</span>
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

          <div className="relative animate-fade-in" style={{
          animationDelay: "0.2s"
        }}>
            <div className="relative z-10 rounded-2xl overflow-hidden">
              <img src={imgMockupLaptop} alt="Mockup Laptop" className="w-full h-auto" />
            </div>
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
            <div className="flex transition-transform duration-500 ease-out gap-6" style={{
            transform: `translateX(-${currentSlide * (100 / 3)}%)`
          }}>
              {portfolioItems.map(item => <div key={item.id} className="min-w-[calc(33.333%-1rem)] glass-card p-2 hover-scale hover-glow">
                  <img src={item.image} alt={`Portfolio ${item.id}`} className="w-full h-full object-cover rounded-lg aspect-square" />
                </div>)}
            </div>
          </div>

          <button onClick={prevSlide} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-background/80 backdrop-blur-lg border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300">
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button onClick={nextSlide} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-background/80 backdrop-blur-lg border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300">
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {Array.from({
            length: portfolioItems.length - 2
          }).map((_, idx) => <button key={idx} onClick={() => setCurrentSlide(idx)} className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentSlide ? "bg-primary w-8" : "bg-border hover:bg-primary/50"}`} />)}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="relative z-10 container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            {/* Text Content with Modern Tech Design */}
            <div className="relative">
              {/* Decorative tech elements */}
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary via-secondary to-transparent rounded-full"></div>
              <div className="absolute -left-8 top-0 w-px h-24 bg-gradient-to-b from-primary/50 to-transparent"></div>
              <div className="absolute -left-6 top-0 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              
              <div className="pl-6 space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <div className="w-2 h-2 bg-primary/50 rounded-full"></div>
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent"></div>
                </div>
                
                <h2 className="text-5xl font-bold">
                  Nossos <span className="gradient-text">Clientes</span>
                </h2>
                
                <div className="relative">
                  <div className="absolute -left-6 top-0 bottom-0 w-px bg-gradient-to-b from-border via-primary/30 to-border"></div>
                  <p className="text-xl leading-relaxed text-foreground/90">
                    Se você quer elevar o visual da sua marca, produto ou negócio,{" "}
                    <span className="font-bold text-foreground">o momento é agora!</span>
                  </p>
                </div>
                
                <p className="text-lg text-muted-foreground">
                  <span className="font-bold text-foreground">confira alguns de nossos clientes</span>{" "}
                  que já passaram por aqui.
                </p>
                
                <div className="flex items-center gap-3 pt-4">
                  <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-transparent via-border to-primary/30"></div>
                  <div className="flex gap-1.5">
                    <div className="w-1.5 h-1.5 bg-border rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-primary/50 rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-secondary/50 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[777/457] rounded-2xl overflow-hidden">
                <img src={mesaDigitalizadora} alt="Mesa Digitalizadora" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 container-custom mt-12">
          <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-3 md:gap-6">
            {clientLogos.map(logo => <div key={logo.id} className="glass-card p-2 md:p-6 flex items-center justify-center hover-scale hover-glow">
                <img src={logo.image} alt={`Cliente ${logo.id}`} className="w-full h-[80px] md:h-[172px] object-contain" />
              </div>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-5xl font-bold text-[#0f0c1c]">
                Me chama
                <br />
                no WhatsApp
              </h2>
              <p className="text-xl text-[#0f0c1c]">
                pra tirarmos mais dúvidas sobre o seu projeto!
              </p>
              <GradientButton onClick={handleWhatsAppClick}>
                Solicitar Orçamento
              </GradientButton>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <img src={imgQuemSouFotoPerfil} alt="Emerson Leite" className="w-full h-full object-contain" />
              </div>
              
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Home;