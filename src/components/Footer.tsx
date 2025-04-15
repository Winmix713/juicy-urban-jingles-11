
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white pt-12 pb-6 border-t">
      <div className="juice-container">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="h-8 w-8 rounded-full bg-juice-green flex items-center justify-center">
                <span className="text-white font-bold">J</span>
              </span>
              <h1 className="text-2xl font-bold text-juice-green">Juicy</h1>
            </div>
            <p className="text-muted-foreground">
              Refreshing, nutritious juices and smoothies made from the freshest ingredients.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <div className="space-y-2">
              <p><a href="#home" className="text-muted-foreground hover:text-juice-green">Home</a></p>
              <p><a href="#about" className="text-muted-foreground hover:text-juice-green">About</a></p>
              <p><a href="#menu" className="text-muted-foreground hover:text-juice-green">Menu</a></p>
              <p><a href="#testimonials" className="text-muted-foreground hover:text-juice-green">Testimonials</a></p>
              <p><a href="#contact" className="text-muted-foreground hover:text-juice-green">Contact</a></p>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Open Hours</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>Monday - Friday: 7am - 7pm</p>
              <p>Saturday: 8am - 6pm</p>
              <p>Sunday: 8am - 6pm</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-juice-green hover:text-white transition-colors">
                <span>FB</span>
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-juice-green hover:text-white transition-colors">
                <span>IG</span>
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-juice-green hover:text-white transition-colors">
                <span>TW</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t pt-6 text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} Juicy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
