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
import imgIdentidade1 from "@/assets/img_servicos_identidadevisual_1.png";
import imgIdentidade2 from "@/assets/img_servicos_identidadevisual_2.png";
import imgIdentidade3 from "@/assets/img_servicos_identidadevisual_3.png";
import imgIdentidade4 from "@/assets/img_servicos_identidadevisual_4.png";
import galeriaAlbum01 from "@/assets/galeria_album_01.png";
import galeriaAlbum02 from "@/assets/galeria_album_02.png";
import galeriaAlbum03 from "@/assets/galeria_album_03.png";
import galeriaAlbum04 from "@/assets/galeria_album_04.png";
import galeriaAlbum05 from "@/assets/galeria_album_05.png";
import galeriaAlbum06 from "@/assets/galeria_album_06.png";
import galeriaAlbum07 from "@/assets/galeria_album_07.png";
import galeriaAlbum08 from "@/assets/galeria_album_08.png";
import galeriaAlbum09 from "@/assets/galeria_album_09.png";
import galeriaAlbum10 from "@/assets/galeria_album_10.png";
import galeriaAlbum11 from "@/assets/galeria_album_11.png";
import galeriaAlbum12 from "@/assets/galeria_album_12.png";
import galeriaAlbum13 from "@/assets/galeria_album_13.png";
import galeriaAlbum14 from "@/assets/galeria_album_14.png";
import galeriaAlbum15 from "@/assets/galeria_album_15.png";
import galeriaAlbum16 from "@/assets/galeria_album_16.png";
import galeriaAlbum17 from "@/assets/galeria_album_17.png";
import galeriaAlbum18 from "@/assets/galeria_album_18.png";
import galeriaAlbum19 from "@/assets/galeria_album_19.png";
import galeriaAlbum20 from "@/assets/galeria_album_20.png";
import galeriaAlbum21 from "@/assets/galeria_album_21.png";
import galeriaAlbum22 from "@/assets/galeria_album_22.png";
import galeriaAlbum23 from "@/assets/galeria_album_23.png";
import galeriaAlbum24 from "@/assets/galeria_album_24.png";
import galeriaAlbum25 from "@/assets/galeria_album_25.png";
import galeriaAlbum26 from "@/assets/galeria_album_26.png";
import galeriaAlbum27 from "@/assets/galeria_album_27.png";
import galeriaAlbum28 from "@/assets/galeria_album_28.png";
import galeriaAlbum29 from "@/assets/galeria_album_29.png";
import galeriaAlbum30 from "@/assets/galeria_album_30.png";

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

  const identidadeVisualImages = [
    imgIdentidade1, imgIdentidade2, imgIdentidade3, imgIdentidade4
  ];

  const identityVisualItems = identidadeVisualImages.map((img, i) => ({
    id: i + 1,
    image: img,
  }));

  const galeriaAlbumImages = [
    galeriaAlbum01, galeriaAlbum02, galeriaAlbum03, galeriaAlbum04, galeriaAlbum05,
    galeriaAlbum06, galeriaAlbum07, galeriaAlbum08, galeriaAlbum09, galeriaAlbum10,
    galeriaAlbum11, galeriaAlbum12, galeriaAlbum13, galeriaAlbum14, galeriaAlbum15,
    galeriaAlbum16, galeriaAlbum17, galeriaAlbum18, galeriaAlbum19, galeriaAlbum20,
    galeriaAlbum21, galeriaAlbum22, galeriaAlbum23, galeriaAlbum24, galeriaAlbum25,
    galeriaAlbum26, galeriaAlbum27, galeriaAlbum28, galeriaAlbum29, galeriaAlbum30
  ];

  const photoGallery = galeriaAlbumImages.map((img, i) => ({
    id: i + 1,
    image: img,
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
                <img
                  src={item.image}
                  alt={`Identidade Visual ${item.id}`}
                  className="w-full aspect-[1285/498] object-cover rounded-2xl shadow-2xl"
                />
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
                <img
                  src={photo.image}
                  alt={`Foto ${photo.id}`}
                  className="w-full h-full object-cover rounded"
                />
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

          <div className="max-w-4xl w-full aspect-square bg-card rounded-2xl overflow-hidden flex items-center justify-center">
            <img
              src={photoGallery[currentImage].image}
              alt={`Foto ${photoGallery[currentImage].id}`}
              className="w-full h-full object-contain"
            />
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
