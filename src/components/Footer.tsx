import { Link } from 'react-router-dom';

const Footer = () => {
  const socialLinks = [
    { name: 'Twitter', href: '#' },
    { name: 'Facebook', href: '#' },
    { name: 'Instagram', href: '#' },
    { name: 'LinkedIn', href: '#' },
    { name: 'YouTube', href: '#' },
  ];

  const footerLinks = [
    { name: 'Our Team', href: '#' },
    { name: 'Terms & Services', href: '#' },
    { name: 'Our Blog', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'Our Stories', href: '#' },
  ];

  return (
    <footer className="border-t border-border bg-card-background">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-text-secondary">
            <span className="text-sm">© Paperio News 2025</span>
            <span className="text-sm">All right reserved</span>
          </div>

          <div className="text-center">
            <div className="text-sm text-text-secondary mb-1">We're Locate At</div>
            <div className="text-sm text-text-primary">7297 East Old Maple Boulevard, Suite 209-B, Washington</div>
          </div>

          <div className="text-right">
            <div className="text-sm text-text-secondary mb-1">Contact</div>
            <div className="text-sm text-text-primary">(123) 420-9421</div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center gap-3">
              <img src="/logo.svg" alt="Paperio" className="h-10 w-10" />
              <span className="text-2xl font-semibold text-text-primary">Paperio News</span>
            </Link>
          </div>

          <div className="flex items-center gap-8">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm text-text-secondary hover:text-text-primary transition"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center gap-4">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="flex items-center justify-center w-8 h-8 rounded-full bg-button-secondary text-button-secondary-text"
              aria-label={link.name}
            >
              <div className="w-4 h-4 bg-current rounded-full" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer; 