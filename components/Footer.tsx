import { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card } from './ui/card';
import { toast } from 'sonner@2.0.3';
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Youtube, 
  Mail, 
  ArrowRight,
  ExternalLink 
} from 'lucide-react';

export function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubscribing(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success('Successfully subscribed to newsletter!');
    setEmail('');
    setIsSubscribing(false);
  };

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    { name: 'GitHub', icon: Github, href: '#', color: 'hover:text-gray-300' },
    { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'hover:text-blue-500' },
    { name: 'YouTube', icon: Youtube, href: '#', color: 'hover:text-red-500' }
  ];

  const footerLinks = {
    'Platform': ['Trade', 'Markets', 'Portfolio', 'API'],
    'Resources': ['Learn', 'Blog', 'Documentation', 'Support'],
    'Company': ['About', 'Careers', 'Press', 'Partners'],
    'Legal': ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Compliance']
  };

  return (
    <footer className="bg-gradient-to-t from-green-950/10 to-background border-t border-green-500/20">
      <div className="container mx-auto px-4 py-16">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <Card className="bg-gradient-to-r from-green-950/20 to-green-900/10 border-green-500/30 p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
              Stay Updated with Crypto World
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Get the latest news, market insights, and exclusive content delivered to your inbox.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-background/50"
                required
              />
              <Button 
                type="submit" 
                disabled={isSubscribing}
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white"
              >
                {isSubscribing ? 'Subscribing...' : (
                  <>
                    Subscribe
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </form>
          </Card>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">₿</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                Crypto World
              </span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Your trusted gateway to the world of cryptocurrency. Trade, learn, and explore 
              the future of finance with confidence and security.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    className={`w-10 h-10 bg-background/50 rounded-full flex items-center justify-center text-muted-foreground transition-colors ${social.color}`}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
            >
              <h4 className="font-semibold mb-4 text-green-400">{category}</h4>
              <ul className="space-y-2">
                {links.map((link, linkIndex) => (
                  <motion.li
                    key={link}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (linkIndex * 0.05) }}
                  >
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group"
                    >
                      {link}
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border-t border-green-500/20 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-muted-foreground text-sm">
              © 2024 Crypto World. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm">
              <span className="text-muted-foreground">
                Built with ❤️ for the crypto community
              </span>
              <div className="flex items-center gap-1 text-green-400">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs">Live Markets</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}