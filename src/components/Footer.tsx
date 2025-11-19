const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/30">
      <div className="container-custom">
        <p className="text-center text-muted-foreground text-sm">
          todos os direitos reservados a{" "}
          <span className="font-semibold text-foreground">Emerson Leite</span>,
          Desenvolvido por{" "}
          <a
            href="https://instagram.com/kbanadodesign"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-primary hover:text-secondary transition-colors"
          >
            @kbanadodesign
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
