import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Layout } from "@/components/Layout";
import { MacWindow } from "@/components/MacWindow";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Linkedin, Instagram } from "lucide-react";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000),
});

type ContactFormData = z.infer<typeof contactSchema>;

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/hyebinp/" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
];

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast({ title: "Message sent!", description: "Thanks for reaching out. I'll get back to you soon." });
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="px-4 sm:px-8 md:px-10 pt-12 md:pt-16 pb-8" aria-labelledby="contact-heading">
        <div className="max-w-3xl mx-auto">
          <motion.div className="space-y-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-white/40 tracking-wide text-sm">Contact</p>
            <h1 id="contact-heading" className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-white">
              Let's start a <span className="text-indigo-400 italic">conversation</span>
            </h1>
            <p className="text-lg text-white/50 max-w-xl">
              Have a project in mind or just want to chat? I'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="px-4 sm:px-8 md:px-10 py-8 md:py-12">
        <div className="max-w-3xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <motion.div className="lg:col-span-3" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
              <MacWindow title="new-message.txt">
                <div className="p-6 md:p-8">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField control={form.control} name="name" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/70">Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-indigo-400" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="email" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/70">Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="your@email.com" {...field} className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-indigo-400" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="message" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/70">Message</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Tell me about your project..." rows={6} {...field} className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-indigo-400 resize-none" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full md:w-auto bg-indigo-500 text-white hover:bg-indigo-400">
                        {isSubmitting ? "Sending..." : "Send message"}
                      </Button>
                    </form>
                  </Form>
                </div>
              </MacWindow>
            </motion.div>

            {/* Contact Info */}
            <motion.div className="lg:col-span-2 space-y-6" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
              <MacWindow title="contact-info">
                <div className="p-6 space-y-6">
                  <div className="space-y-4">
                    <h2 className="font-serif text-xl text-white">Get in touch</h2>
                    <a href="mailto:hyebinp@umich.edu" className="flex items-center gap-3 text-white/50 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded-sm">
                      <Mail className="w-5 h-5" aria-hidden="true" /><span>hyebinp@umich.edu</span>
                    </a>
                    <div className="flex items-center gap-3 text-white/50">
                      <MapPin className="w-5 h-5" aria-hidden="true" /><span>Ann Arbor, MI</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h2 className="font-serif text-xl text-white">Connect</h2>
                    <div className="flex gap-4">
                      {socialLinks.map((link) => (
                        <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                          className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:border-indigo-400 hover:text-indigo-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                          aria-label={link.label}>
                          <link.icon className="w-5 h-5" aria-hidden="true" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </MacWindow>

              <MacWindow>
                <div className="p-5">
                  <p className="text-white/40 text-sm">
                    I typically respond within 24-48 hours. For urgent inquiries, feel free to reach out on LinkedIn.
                  </p>
                </div>
              </MacWindow>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
