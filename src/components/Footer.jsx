const Footer = () => {
  return (
    <footer className="w-full py-12 border-t border-white/5 bg-surface-container-lowest">
      <div className="w-full max-w-container mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-lg font-bold text-white tracking-tighter">HORIZON</div>
        <div className="flex flex-wrap justify-center gap-6">
          {['Privacy Policy', 'Terms of Service', 'Health Disclaimer', 'Support'].map(link => (
            <a 
              key={link}
              className="font-space text-xs uppercase tracking-tighter text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100" 
              href="#"
            >
              {link}
            </a>
          ))}
        </div>
        <div className="font-space text-xs uppercase tracking-tighter text-outline">
          © 2024 HORIZON ENGINEERING. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
