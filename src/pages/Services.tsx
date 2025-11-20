import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
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
import imgTrabalhos3d01 from "@/assets/img_trabalhos_3d_01.png";
import imgTrabalhos3d02 from "@/assets/img_trabalhos_3d_02.png";
import imgTrabalhos3d03 from "@/assets/img_trabalhos_3d_03.png";
import imgTrabalhos3d04 from "@/assets/img_trabalhos_3d_04.png";
import imgTrabalhos3d05 from "@/assets/img_trabalhos_3d_05.png";
import imgTrabalhos3d06 from "@/assets/img_trabalhos_3d_06.png";

const Services = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");

  const carrosselImages = [
    imgCarrossel1, imgCarrossel2, imgCarrossel3, imgCarrossel4,
    imgCarrossel5, imgCarrossel6, imgCarrossel7, imgCarrossel8,
    imgCarrossel9, imgCarrossel10, imgCarrossel11, imgCarrossel12
  ];

  const socialMediaItems = carrosselImages.map((img, i) => ({
    id: i + 1,
    image: img,
  }));

  const trabalhos3DImages = [
    imgTrabalhos3d01, imgTrabalhos3d02, imgTrabalhos3d03,
    imgTrabalhos3d04, imgTrabalhos3d05, imgTrabalhos3d06
  ];

  const modelagem3DItems = trabalhos3DImages.map((img, i) => ({
    id: i + 1,
    image: img,
  }));

  const identityVisualItems = Array.from({ length: 3 }, (_, i) => ({
    id: i + 1,
    image: `img_servicos_identidadevisual_${i + 1}.png`,
  }));

  const photoGallery = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    image: `galeria_album_${String(i + 1).padStart(2, "0")}.png`,
  }));

  const videos = Array.from({ length: 14 }, (_, i) => ({
    id: i + 1,
    title: `vídeo ${i + 1}`,
    url: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
  }));

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % photoGallery.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? photoGallery.length - 1 : prev - 1
    );
  };

  const openVideo = (url: string) => {
    setCurrentVideo(url);
    setVideoModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <BackToTop />

      <div className="pt-32 pb-20">
        {/* Social Media Section */}
        <section className="container-custom mb-32">
          <div className="relative mb-12">
            <div className="h-[120px] bg-gradient-to-r from-primary via-[hsl(330,80%,60%)] to-secondary rounded-2xl flex items-center justify-center">
              <h2 className="text-4xl font-bold text-white">
                Trabalhos Desenvolvidos - Social Media
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {socialMediaItems.map((item) => (
              <div
                key={item.id}
                className="glass-card p-2 hover-scale hover-glow cursor-pointer"
              >
                <img 
                  src={item.image} 
                  alt={`Social Media ${item.id}`}
                  className="w-full h-full object-cover rounded"
                />
              </div>
            ))}
          </div>
        </section>

        {/* 3D Modeling Section */}
        <section className="container-custom mb-32">
          <div className="relative mb-12">
            <div className="h-[120px] bg-gradient-to-r from-primary via-[hsl(330,80%,60%)] to-secondary rounded-2xl flex items-center justify-center">
              <h2 className="text-4xl font-bold text-white">
                Trabalhos Desenvolvidos - Modelagem 3D
              </h2>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-x-auto pb-6">
              <div className="flex gap-6">
                {modelagem3DItems.map((item) => (
                  <div
                    key={item.id}
                    className="min-w-[300px] glass-card p-4 hover-scale hover-glow"
                  >
                    <img
                      src={item.image}
                      alt={`Modelagem 3D ${item.id}`}
                      className="w-full aspect-[3/4] object-cover rounded"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Visual Identity Section */}
        <section className="container-custom mb-32">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold gradient-text">Identidade Visual</h2>
          </div>

          <div className="space-y-6">
            {identityVisualItems.map((item) => (
              <div key={item.id} className="w-full">
                <div className="aspect-[1285/498] bg-white rounded-2xl flex items-center justify-center shadow-2xl">
                  <span className="text-sm text-gray-400">{item.image}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Photo Gallery Section */}
        <section className="container-custom mb-32">
          <div className="relative mb-12">
            <div className="h-[120px] bg-gradient-to-r from-primary via-[hsl(330,80%,60%)] to-secondary rounded-2xl flex items-center justify-center">
              <h2 className="text-4xl font-bold text-white">
                Trabalhos Desenvolvidos - Foto & Vídeo
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {photoGallery.map((photo, index) => (
              <div
                key={photo.id}
                onClick={() => openLightbox(index)}
                className="aspect-square glass-card p-2 hover-scale hover-glow cursor-pointer"
              >
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded flex items-center justify-center">
                  <span className="text-[10px] text-muted-foreground text-center">
                    {photo.image}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Video Gallery Section */}
        <section className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {videos.map((video) => (
              <div
                key={video.id}
                onClick={() => openVideo(video.url)}
                className="aspect-square bg-secondary rounded-2xl flex flex-col items-center justify-center cursor-pointer hover-scale hover-glow group"
              >
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-secondary border-b-[12px] border-b-transparent ml-1"></div>
                </div>
                <span className="text-white font-bold">{video.title}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-background/95 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-card flex items-center justify-center hover:bg-primary transition-colors"
            onClick={() => setLightboxOpen(false)}
          >
            <X className="w-6 h-6" />
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card flex items-center justify-center hover:bg-primary transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="max-w-4xl w-full aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
            <span className="text-muted-foreground">
              {photoGallery[currentImage].image}
            </span>
          </div>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card flex items-center justify-center hover:bg-primary transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}

      {/* Video Modal */}
      {videoModalOpen && (
        <div
          className="fixed inset-0 bg-background/95 z-50 flex items-center justify-center p-4"
          onClick={() => setVideoModalOpen(false)}
        >
          <button
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-card flex items-center justify-center hover:bg-primary transition-colors"
            onClick={() => setVideoModalOpen(false)}
          >
            <X className="w-6 h-6" />
          </button>

          <div className="max-w-4xl w-full aspect-video bg-card rounded-2xl overflow-hidden">
            <iframe
              src={currentVideo.replace("watch?v=", "embed/")}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Services;
