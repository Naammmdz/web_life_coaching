'use client';

import { motion } from 'framer-motion';
import { Brain, Target, Users, Award, Heart, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const features = [
  {
    icon: Brain,
    title: 'Scientific Assessments',
    description: 'Research-backed personality tests including MBTI, Big Five, DISC, and Enneagram.',
  },
  {
    icon: Target,
    title: 'Personalized Insights',
    description: 'Detailed results with actionable recommendations tailored to your unique personality.',
  },
  {
    icon: Users,
    title: 'Professional Guidance',
    description: 'Expert-designed assessments used by coaches and HR professionals worldwide.',
  },
  {
    icon: Award,
    title: 'Proven Accuracy',
    description: '98% accuracy rate based on scientific validation and user feedback.',
  },
];

const values = [
  {
    icon: Heart,
    title: 'Empowerment',
    description: 'We believe everyone deserves to understand their unique strengths and potential.',
  },
  {
    icon: Zap,
    title: 'Growth',
    description: 'Personal development is a lifelong journey, and we\'re here to support yours.',
  },
];

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
            🚀 About LifeCoach Pro
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Discover Your
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"> True Potential</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            LifeCoach Pro is your comprehensive platform for personality assessment and personal development. 
            We combine cutting-edge psychology with user-friendly technology to help you understand yourself better 
            and unlock your full potential.
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="bg-muted/30 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground text-center max-w-4xl mx-auto leading-relaxed">
              To democratize access to high-quality personality assessments and personal development tools. 
              We believe that understanding your personality is the first step toward living a more fulfilling, 
              authentic, and successful life. Our platform makes professional-grade assessments accessible to everyone, 
              anywhere, at any time.
            </p>
          </div>
        </motion.section>

        {/* Features Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose LifeCoach Pro?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Values Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full text-center">
                  <CardHeader>
                    <div className="mx-auto p-3 rounded-full bg-secondary/10 w-fit mb-3">
                      <value.icon className="h-8 w-8 text-secondary" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Begin Your Journey?</h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of people who have already discovered their personality insights and 
              taken the first step toward personal growth.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a 
                href="/assessments"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
              >
                Start Your Assessment
              </a>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
