'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, MessageSquare, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    details: 'support@lifecoachpro.com',
    description: 'Send us an email anytime',
  },
  {
    icon: Phone,
    title: 'Phone',
    details: '+1 (555) 123-4567',
    description: 'Mon-Fri from 8am to 6pm',
  },
  {
    icon: MapPin,
    title: 'Office',
    details: '123 Wellness Street, Suite 100',
    description: 'San Francisco, CA 94105',
  },
  {
    icon: Clock,
    title: 'Support Hours',
    details: 'Monday - Friday',
    description: '8:00 AM - 6:00 PM PST',
  },
];

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">
            💬 Get in Touch
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            We're Here to
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"> Help</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Have questions about our assessments? Need support with your results? 
            Want to learn more about LifeCoach Pro? We're here to assist you on your personal development journey.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <info.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{info.title}</h3>
                          <p className="text-foreground font-medium">{info.details}</p>
                          <p className="text-sm text-muted-foreground">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* FAQ Note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8"
            >
              <Card className="bg-muted/30">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <MessageSquare className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Quick Questions?</h3>
                      <p className="text-sm text-muted-foreground">
                        For immediate assistance with common questions, check out our FAQ section 
                        or browse our help documentation.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="text-sm font-medium mb-2 block">
                        First Name
                      </label>
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="text-sm font-medium mb-2 block">
                        Last Name
                      </label>
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="text-sm font-medium mb-2 block">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="text-sm font-medium mb-2 block">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="How can we help you?"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="text-sm font-medium mb-2 block">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us more about your question or how we can assist you..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
