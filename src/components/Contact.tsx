import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-4">
      <div className="container mx-auto max-w-6xl text-center">
        {/* Big Title */}
        <h2 className="font-display text-6xl md:text-8xl lg:text-9xl font-extrabold text-foreground tracking-tight">
          Contact
        </h2>

        {/* Get In Touch with lines */}
        <div className="mt-6 flex items-center justify-center gap-6">
          <div className="h-px w-20 md:w-28 bg-border" />
          <p className="font-display italic text-xl md:text-2xl text-muted-foreground">
            Get In Touch
          </p>
          <div className="h-px w-20 md:w-28 bg-border" />
        </div>

        {/* Big statement */}
        <p className="mt-14 text-3xl md:text-5xl font-semibold leading-tight text-foreground/90">
          Open to new opportunities, interesting projects, or a{" "}
          <span className="text-primary">chat about AI and tech.</span>
        </p>

        {/* Contact details */}
        <div className="mt-14 grid gap-10 sm:grid-cols-3">
          <div className="flex flex-col items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
              <Phone className="text-primary" size={24} />
            </div>
            <p className="text-sm uppercase tracking-widest text-muted-foreground">
              Phone
            </p>
            <p className="text-base md:text-lg text-foreground/80">
              +61 473130920
            </p>
          </div>

          <div className="flex flex-col items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
              <Mail className="text-primary" size={24} />
            </div>
            <p className="text-sm uppercase tracking-widest text-muted-foreground">
              Email
            </p>
            <p className="text-base md:text-lg text-foreground/80">
              namitjain0620@gmail.com
            </p>
          </div>

          <div className="flex flex-col items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
              <MapPin className="text-primary" size={24} />
            </div>
            <p className="text-sm uppercase tracking-widest text-muted-foreground">
              Location
            </p>
            <p className="text-base md:text-lg text-foreground/80">
               Australia
            </p>
          </div>
        </div>

        {/* Social links */}
        <div className="mt-14 flex flex-wrap justify-center gap-8">
          {[
            { label: "LinkedIn", href: "https://www.linkedin.com/in/namit-jain123/" },
            { label: "GitHub", href: "https://github.com/namitjain123" },
            { label: "Medium", href: "https://medium.com/@namitjain0620" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-muted-foreground hover:text-primary transition-colors text-base font-semibold"
            >
              {item.label}
            </a>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default Contact;
