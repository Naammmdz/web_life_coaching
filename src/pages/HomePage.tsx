import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, Target, Users, Star, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguageStore } from '@/store/language';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Marketing Director',
    content: 'The MBTI assessment helped me understand my communication style and improved my leadership effectiveness dramatically.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Software Engineer',
    content: 'The coaching sessions based on my personality assessment gave me clear direction for my career transition.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Entrepreneur',
    content: 'Understanding my Enneagram type transformed how I approach challenges and relationships in my business.',
    rating: 5,
  },
];

export default function HomePage() {
  const { t } = useLanguageStore();
  
  const features = [
    {
      icon: Brain,
      title: t('scienceBasedAssessments'),
      description: t('scienceBasedDescription'),
    },
    {
      icon: Target,
      title: t('personalizedCoaching'),
      description: t('personalizedDescription'),
    },
    {
      icon: Users,
      title: t('expertCoachesTitle'),
      description: t('expertCoachesDescription'),
    },
  ];

  const assessments = [
    {
      name: t('mbtiAssessment'),
      description: t('mbtiDescription'),
      duration: '10-15 ' + t('minutes'),
      insights: 'Communication style, decision-making preferences, career fit',
    },
    {
      name: t('bigFivePersonality'),
      description: t('bigFiveDescription'),
      duration: '15-20 ' + t('minutes'),
      insights: 'Behavioral patterns, emotional stability, openness to experience',
    },
    {
      name: t('discProfile'),
      description: t('discDescription'),
      duration: '10-15 ' + t('minutes'),
      insights: 'Leadership style, team dynamics, communication preferences',
    },
    {
      name: t('enneagram'),
      description: t('enneagramDescription'),
      duration: '15-20 ' + t('minutes'),
      insights: 'Core fears and desires, growth paths, relationship patterns',
    },
  ];
  
  const stats = [
    { number: t('completedAssessments'), label: t('completedAssessmentsLabel') },
    { number: t('successRate'), label: t('successRateLabel') },
    { number: t('expertCoaches'), label: t('expertCoachesLabel') },
    { number: t('countries'), label: t('countriesLabel') },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20 sm:py-32">
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-4xl text-center"
          >
            <Badge variant="secondary" className="mb-4">
              {t('discoverPotential')}
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl mb-6">
              {t('unlockYour')}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"> {t('potential')}</span>
            </h1>
            <p className="text-lg text-muted-foreground sm:text-xl max-w-2xl mx-auto mb-8">
              {t('heroDescription')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link to="/assessments">
                  {t('startYourAssessment')} <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                <Link to="/about">{t('learnMore')}</Link>
              </Button>
            </div>
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              {t('whyChooseUs')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('featuresDescription')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <feature.icon className="h-12 w-12 text-primary mb-4" />
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessments Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              {t('ourAssessments')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('assessmentsDescription')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {assessments.map((assessment, index) => (
              <motion.div
                key={assessment.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl">{assessment.name}</CardTitle>
                      <Badge variant="outline">{assessment.duration}</Badge>
                    </div>
                    <CardDescription className="text-base">
                      {assessment.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">{t('keyInsights')}:</h4>
                        <p className="text-sm text-muted-foreground">{assessment.insights}</p>
                      </div>
                      <Button asChild className="w-full">
                        <Link to="/assessments">
                          {t('takeAssessment')} <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real stories from people who transformed their lives with our assessments and coaching.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <Quote className="h-8 w-8 text-primary/60 mb-4" />
                    <p className="text-muted-foreground mb-4">{testimonial.content}</p>
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <div>
                      <div className="font-medium">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Discover Your True Self?
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
              Take the first step towards understanding yourself better and unlocking your full potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
                <Link to="/assessments">
                  Start Free Assessment <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary">
                <Link to="/contact">Talk to a Coach</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
