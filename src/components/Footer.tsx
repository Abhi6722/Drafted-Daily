import { Globe, Twitter, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const socialLinks = [
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'YouTube', href: '#', icon: Youtube },
  ];

  const footerLinks = [
    { name: 'Our Team', href: '#' },
    { name: 'Terms & Services', href: '#' },
    { name: 'Our Blog', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'Our Stories', href: '#' },
  ];

  return (
    <footer className="border-t border-border bg-background">
      {/* Top Section */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between text-text-secondary text-sm">
          <div className="flex flex-col items-left gap-1">
            <span className="text-text-secondary">All right reserved</span>
            <span className="text-text-primary">© Drafted Daily 2025</span>
          </div>

          <div className="text-center">
            <span className="text-text-secondary">We're Locate At</span>
            <div className="text-text-primary">7297 East Old Maple Boulevard, Suite 209-B, Washington</div>
          </div>

          <div className="text-right">
            <span className="text-text-secondary">Contact</span>
            <div className="text-text-primary">(123) 420-9421</div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center gap-6">
              <Globe className="h-28 w-28" />
              <span className="text-9xl font-ibarra font-bold text-text-primary">Drafted Daily</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="border-t border-border">
        <div className="flex justify-between container mx-auto px-4 py-4">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map(({ name, href, icon: Icon }) => (
              <Link
                key={name}
                to={href}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-button-secondary hover:opacity-80 transition"
                aria-label={name}
              >
                <Icon className="w-5 h-5 text-text-primary" />
              </Link>
            ))}
          </div>
          <div className="flex items-center justify-end py-4">
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
        </div>
      </div>
    </footer>
  );
};

export default Footer; 