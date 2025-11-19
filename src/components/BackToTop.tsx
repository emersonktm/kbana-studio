import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {visible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center shadow-lg hover:shadow-[0_0_30px_hsl(270,80%,65%,0.5)] transition-all duration-300 hover:scale-110"
          aria-label="Voltar ao topo"
        >
          <ChevronUp className="w-6 h-6 text-white" />
        </button>
      )}
    </>
  );
};

export default BackToTop;
