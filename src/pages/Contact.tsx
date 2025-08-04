import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { useTheme } from '@/contexts/ThemeContext';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'hello@Hispter.dev',
    description: 'Send us an email anytime'
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '9325378590',
    description: 'Call us during business hours'
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Mahrashtra, India',
    description: 'Visit our office'
  }
];

const socialLinks = [
  { icon: Github, name: 'GitHub', url: '#' },
  { icon: Linkedin, name: 'LinkedIn', url: '#' },
  { icon: Twitter, name: 'Twitter', url: '#' }
];

export default function Contact() {
  const { currentTheme } = useTheme();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you as soon as possible.",
    });

    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <div className="space-y-12 animate-fade-in">
      
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold font-primary text-foreground mb-6">
          Get In Touch
        </h1>
        <p className="text-xl text-muted-foreground font-secondary max-w-2xl mx-auto">
          Have questions about ThemeMorph? Want to collaborate or provide feedback? 
          We'd love to hear from you!
        </p>
      </section>

      <div className={`grid grid-cols-1 lg:grid-cols-3 ${
        currentTheme === 'theme3' ? 'gap-8' : 'gap-6'
      }`}>
        

        <div className="lg:col-span-1 space-y-6">
          <Card className={`${
            currentTheme === 'theme3' 
              ? 'bg-gradient-card border-2 border-primary/20' 
              : ''
          }`}>
            <CardHeader>
              <CardTitle className="font-primary text-foreground">
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="p-2 bg-primary rounded-lg">
                    <info.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold font-secondary text-foreground">
                      {info.title}
                    </h3>
                    <p className="text-primary font-medium">
                      {info.value}
                    </p>
                    <p className="text-sm text-muted-foreground font-secondary">
                      {info.description}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className={`${
            currentTheme === 'theme3' 
              ? 'bg-gradient-card border-2 border-secondary/20' 
              : ''
          }`}>
            <CardHeader>
              <CardTitle className="font-primary text-foreground">
                Follow Us
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="icon"
                    className="hover:bg-primary hover:text-primary-foreground transition-colors"
                    asChild
                  >
                    <a href={social.url} aria-label={social.name}>
                      <social.icon className="h-5 w-5" />
                    </a>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2">
          <Card className={`${
            currentTheme === 'theme3' 
              ? 'bg-gradient-card border-2 border-accent/20' 
              : ''
          }`}>
            <CardHeader>
              <CardTitle className="font-primary text-foreground">
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-secondary">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      className="font-secondary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-secondary">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      required
                      className="font-secondary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="font-secondary">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    required
                    className="font-secondary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="font-secondary">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us more about your inquiry..."
                    rows={6}
                    required
                    className="font-secondary"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={isSubmitting}
                  className="w-full group"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      <section>
        <Card className={`${
          currentTheme === 'theme3' 
            ? 'bg-gradient-card border-2 border-muted/20' 
            : ''
        }`}>
          <CardHeader>
            <CardTitle className="text-2xl font-primary text-center text-foreground">
              Frequently Asked Questions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold font-secondary text-foreground mb-2">
                  How does theme switching work?
                </h3>
                <p className="text-muted-foreground font-secondary text-sm">
                  ThemeMorph uses CSS custom properties and React Context to instantly 
                  update the entire application's appearance without page reloads.
                </p>
              </div>
              <div>
                <h3 className="font-semibold font-secondary text-foreground mb-2">
                  Are themes persistent?
                </h3>
                <p className="text-muted-foreground font-secondary text-sm">
                  Yes! Your theme preference is saved in localStorage and restored 
                  when you return to the application.
                </p>
              </div>
              <div>
                <h3 className="font-semibold font-secondary text-foreground mb-2">
                  Is it mobile-friendly?
                </h3>
                <p className="text-muted-foreground font-secondary text-sm">
                  Absolutely! All themes are fully responsive and optimized for 
                  mobile, tablet, and desktop experiences.
                </p>
              </div>
              <div>
                <h3 className="font-semibold font-secondary text-foreground mb-2">
                  Can I add more themes?
                </h3>
                <p className="text-muted-foreground font-secondary text-sm">
                  The architecture is designed to be extensible. Adding new themes 
                  is as simple as defining new CSS variables and theme configurations.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}