import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-display text-4xl font-bold text-foreground mb-12 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <div className="grid sm:grid-cols-3 gap-8 mb-12">
          {[
            { icon: Phone, label: "+1 (555) 000-0000" },
            { icon: Mail, label: "hello@example.com" },
            { icon: MapPin, label: "City, Country" },
          ].map(({ icon: Icon, label }, i) => (
            <div key={i} className="flex flex-col items-center gap-3 text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon className="text-primary" size={24} />
              </div>
              <span className="text-muted-foreground text-sm">{label}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-6">
          {["LinkedIn", "GitHub", "Medium"].map((platform) => (
            <a
              key={platform}
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
            >
              {platform}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
