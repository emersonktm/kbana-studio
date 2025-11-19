import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <BackToTop />

      <section className="pt-32 pb-20 container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Text */}
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-6xl font-bold gradient-text mb-8">
              Quem Sou Eu?
            </h1>

            <div className="space-y-6 text-lg text-foreground leading-relaxed">
              <p>
                Emerson Leite, 34 anos, natural de Redenção-PA, atua há mais de uma
                década no campo do design, desenvolvendo soluções visuais com precisão
                técnica e sensibilidade artística. Especialista em Design Gráfico,
                domina ferramentas como Adobe Photoshop e Adobe Illustrator, com sólida
                experiência na criação de identidades visuais e composições de alto
                impacto estético.
              </p>

              <p>
                Sua trajetória também abrange Modelagem 3D com Blender 3D, além de
                Animação e VFX utilizando Adobe After Effects. No âmbito audiovisual,
                trabalha com edição profissional de vídeo no Adobe Premiere Pro e
                tratamento fotográfico no Adobe Lightroom, entregando resultados
                refinados e alinhados às necessidades de cada projeto.
              </p>

              <p>
                Apaixonado pelo que faz, acredita no valor do esforço e da excelência
                profissional — visão reforçada pela máxima bíblica:
              </p>

              <blockquote className="border-l-4 border-primary pl-6 italic text-primary">
                "Você comerá do fruto do seu trabalho; será feliz, e tudo irá bem com
                você." (Salmos 128:2)
              </blockquote>

              <p>
                Estou sempre em busca constante de aprimoramento para oferecer sempre o
                melhor aos seus clientes, prezando pelo respeito, dedicação e zelo em
                cada entrega.
              </p>
            </div>
          </div>

          {/* Right Column - Photo */}
          <div className="relative animate-fade-in lg:sticky lg:top-32" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl overflow-hidden shadow-2xl hover-glow">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-muted-foreground text-center px-4">
                    img_quemsou_foto_perfil.png
                  </span>
                </div>
              </div>

              {/* Signature */}
              <div className="absolute -bottom-8 -right-8 text-5xl font-bold italic gradient-text">
                Emerson Leite
              </div>
            </div>

            {/* Decorative glow effect */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl rounded-full"></div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
