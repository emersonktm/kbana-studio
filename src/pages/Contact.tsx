import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import GradientButton from "@/components/GradientButton";
import { Instagram } from "lucide-react";
import laptopMockup from "@/assets/img_principal_mockup_laptop.png";
import portfolio1 from "@/assets/img_contato_portfolio_socialmedia_1.png";
import portfolio2 from "@/assets/img_contato_portfolio_socialmedia_2.png";
import portfolio3 from "@/assets/img_contato_portfolio_socialmedia_3.png";
import portfolio4 from "@/assets/img_contato_portfolio_socialmedia_4.png";

const Contact = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5562999289663", "_blank", "noopener,noreferrer");
  };

  const portfolioSamples = [
    portfolio1,
    portfolio2,
    portfolio3,
    portfolio4,
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <BackToTop />

      {/* Hero Section */}
      <section className="pt-32 pb-20 container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-7xl font-bold">Contato</h1>

            <div className="space-y-4">
              <h2 className="text-4xl font-bold">
                Me chama
                <br />
                no WhatsApp
              </h2>
              <p className="text-xl text-muted-foreground">
                pra tirarmos mais dúvidas sobre o seu projeto!
              </p>
            </div>

            <GradientButton onClick={handleWhatsAppClick}>
              Solicitar Orçamento
            </GradientButton>
          </div>

          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={laptopMockup}
                alt="Mockup de laptop mostrando design"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 bg-card/30">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12">
            Sigam-me nas redes sociais
          </h2>

          <div className="flex justify-center gap-8 mb-16">
            <a
              href="https://instagram.com/kbanadodesign"
              target="_blank"
              rel="noopener noreferrer"
              className="w-32 h-32 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center hover-scale hover-glow"
            >
              <Instagram className="w-16 h-16 text-white" />
            </a>

            <a
              href="https://behance.net/kbanadodesign"
              target="_blank"
              rel="noopener noreferrer"
              className="w-32 h-32 rounded-2xl bg-blue-600 flex items-center justify-center hover-scale hover-glow"
            >
              <span className="text-white text-3xl font-bold">Be</span>
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-32 h-32 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center hover-scale hover-glow"
            >
              <span className="text-white text-2xl font-bold">DESIGNI</span>
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {portfolioSamples.map((sample, index) => (
              <div
                key={index}
                className="glass-card p-2 hover-scale hover-glow"
              >
                <div className="aspect-square rounded overflow-hidden">
                  <img
                    src={sample}
                    alt={`Portfolio social media ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
