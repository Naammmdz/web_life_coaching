import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function AboutPage() {
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
            ✨ About LifePath Coaching
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Our Mission & 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"> Values</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We believe everyone has the potential to live a fulfilling life. Our mission is to help 
            you discover your strengths, understand your personality, and unlock your true potential 
            through science-based assessments and personalized coaching.
          </p>
        </motion.div>

        {/* Values Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              icon: Target,
              title: "Purpose-Driven",
              description: "Every assessment and coaching session is designed with your personal growth in mind."
            },
            {
              icon: Award,
              title: "Science-Based",
              description: "Our assessments are grounded in validated psychological research and proven methodologies."
            },
            {
              icon: Heart,
              title: "Empathetic",
              description: "We approach every client with understanding, compassion, and genuine care for their journey."
            },
            {
              icon: Users,
              title: "Collaborative",
              description: "We work together with you to create actionable plans for personal and professional development."
            }
          ].map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full text-center">
                <CardHeader>
                  <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-muted/50 rounded-lg p-8 mb-16"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
          <div className="max-w-4xl mx-auto text-lg text-muted-foreground space-y-4">
            <p>
              LifePath Coaching was founded with a simple belief: that understanding yourself is the 
              first step to living your best life. Our founders, experienced psychologists and certified 
              coaches, recognized the gap between academic personality research and practical self-discovery tools.
            </p>
            <p>
              We created a platform that bridges this gap, offering scientifically validated assessments 
              in an accessible, user-friendly format. Our goal is to democratize personal development, 
              making powerful psychological insights available to everyone, regardless of their background 
              or experience with personality psychology.
            </p>
            <p>
              Today, we've helped thousands of individuals and organizations gain deeper self-awareness, 
              improve their relationships, and achieve their personal and professional goals through 
              our comprehensive assessment platform and personalized coaching services.
            </p>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Our Expert Team</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Our team consists of licensed psychologists, certified coaches, and technology experts 
            who are passionate about helping people discover their potential and achieve their goals.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Sarah Johnson",
                role: "Lead Psychologist",
                description: "PhD in Psychology with 15+ years of experience in personality assessment research."
              },
              {
                name: "Michael Chen",
                role: "Senior Coach",
                description: "ICF Certified Coach specializing in career transitions and leadership development."
              },
              {
                name: "Emily Rodriguez",
                role: "Assessment Specialist",
                description: "Expert in psychometric testing with a focus on cross-cultural validation."
              }
            ].map((member, index) => (
              <Card key={member.name}>
                <CardHeader>
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-primary to-secondary mx-auto mb-4"></div>
                  <CardTitle>{member.name}</CardTitle>
                  <p className="text-primary font-medium">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
