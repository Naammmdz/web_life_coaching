'use client';

import Link from 'next/link';
import { Brain, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

type SocialLink = {
  name: string;
  Icon: React.ElementType;
  href: string;
};

const footerLinks = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ],
  assessments: [
    { name: 'MBTI Test', href: '/assessments/mbti' },
    { name: 'Big Five Test', href: '/assessments/big-five' },
    { name: 'DISC Assessment', href: '/assessments/disc' },
    { name: 'Enneagram', href: '/assessments/enneagram' },
  ],
  resources: [
    { name: 'Blog', href: '/blog' },
    { name: 'Help Center', href: '/help' },
    { name: 'Documentation', href: '/docs' },
    { name: 'API', href: '/api' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Disclaimer', href: '/disclaimer' },
  ],
};

const socialLinks: Array<{ name: string; Icon: React.ElementType; href: string }> = [
  { name: 'Facebook', Icon: Facebook, href: 'https://facebook.com/lifecoachpro' },
  { name: 'Twitter', Icon: Twitter, href: 'https://twitter.com/lifecoachpro' },
  { name: 'LinkedIn', Icon: Linkedin, href: 'https://linkedin.com/company/lifecoachpro' },
  { name: 'Instagram', Icon: Instagram, href: 'https://instagram.com/lifecoachpro' },
];

export function Footer() {
  return (    <footer className="bg-secondary/30 border-t" role="contentinfo">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link 
              href="/" 
              className="flex items-center space-x-2 mb-4 hover:opacity-90 focus-visible:opacity-90 transition-opacity outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded"
              aria-label="LifeCoach Pro - Home"
            >
              <Brain className="h-8 w-8 text-primary" aria-hidden="true" />
              <span className="text-xl font-bold">LifeCoach Pro</span>
            </Link>
            <p className="text-muted-foreground mb-4 max-w-md">
              Discover your true potential with professional life coaching and scientifically-backed personality assessments.
            </p>            <div className="space-y-2 text-sm text-muted-foreground">
              <a 
                href="mailto:hello@lifecoachpro.com" 
                className="flex items-center space-x-2 hover:text-primary focus-visible:text-primary transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded w-fit"
              >
                <Mail className="h-4 w-4" />
                <span>hello@lifecoachpro.com</span>
              </a>
              <a 
                href="tel:+15551234567" 
                className="flex items-center space-x-2 hover:text-primary focus-visible:text-primary transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded w-fit"
              >
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </a>
              <a 
                href="https://maps.google.com/?q=123+Coaching+St,Success+City,SC+12345" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-primary focus-visible:text-primary transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded w-fit"
              >
                <MapPin className="h-4 w-4" />
                <span>123 Coaching St, Success City, SC 12345</span>
              </a>
            </div>
          </div>          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4" id="footer-company">Company</h3>
            <ul className="space-y-3" aria-labelledby="footer-company">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary focus-visible:text-primary transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded block w-fit"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>          <div>
            <h3 className="font-semibold mb-4" id="footer-assessments">Assessments</h3>
            <ul className="space-y-3" aria-labelledby="footer-assessments">
              {footerLinks.assessments.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary focus-visible:text-primary transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded block w-fit"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>          <div>
            <h3 className="font-semibold mb-4" id="footer-resources">Resources</h3>
            <ul className="space-y-3" aria-labelledby="footer-resources">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary focus-visible:text-primary transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded block w-fit"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>          <div>
            <h3 className="font-semibold mb-4" id="footer-legal">Legal</h3>
            <ul className="space-y-3" aria-labelledby="footer-legal">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary focus-visible:text-primary transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded block w-fit"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2025 LifeCoach Pro. All rights reserved.
          </p>          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map(({ name, Icon, href }) => (
              <a
                key={name}
                href={href}
                className="text-muted-foreground hover:text-primary focus-visible:text-primary transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded p-1"
                aria-label={name}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
