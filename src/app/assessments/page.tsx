'use client';

import { motion } from 'framer-motion';
import { Brain, Clock, Users, Target } from 'lucide-react';
import Head from 'next/head';
import { AssessmentCard } from '@/components/assessments/AssessmentCard';
import { Badge } from '@/components/ui/badge';
import { assessments } from '@/data/assessments';
import { useRouter } from 'next/navigation';

const stats = [
  { icon: Brain, value: '4', label: 'Assessment Types', color: 'primary' },
  { icon: Clock, value: '10-20', label: 'Minutes Each', color: 'secondary' },
  { icon: Users, value: '10,000+', label: 'Users Tested', color: 'primary' },
  { icon: Target, value: '98%', label: 'Accuracy Rate', color: 'secondary' },
] as const;

const steps = [
  { number: 1, title: 'Choose Assessment', description: 'Select the personality test that best matches your goals and interests.', color: 'primary' },
  { number: 2, title: 'Answer Questions', description: 'Complete the assessment with honest, thoughtful responses to each question.', color: 'secondary' },
  { number: 3, title: 'Get Insights', description: 'Receive detailed results with actionable insights and personalized recommendations.', color: 'primary' },
] as const;

export default function AssessmentsPage() {
  const router = useRouter();

  const handleStartAssessment = (assessmentType: string) => {
    router.push(`/assessments/${assessmentType}`);
  };

  return (
    <>
      <Head>
        <title>Personality Assessments | LifeCoach Pro</title>
        <meta name="description" content="Discover your true personality with our suite of scientifically-validated assessments including MBTI, Big Five, DISC, and Enneagram tests." />
      </Head>

      <div className="min-h-screen py-12" role="main">
        <div className="container">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge variant="secondary" className="mb-4" aria-label="Scientific Personality Assessments">
              🧠 Scientific Personality Assessments
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Discover Your 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"> Personality</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Choose from our comprehensive suite of scientifically-validated personality assessments. 
              Each test provides unique insights into different aspects of your personality, behavior, and potential.
            </p>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >            {stats.map(({ icon: Icon, value, label, color }) => (
              <div 
                key={label}
                className="text-center p-6 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
              >
                <Icon 
                  className={`h-8 w-8 mx-auto mb-2 ${
                    color === 'primary' ? 'text-primary' : 'text-secondary'
                  }`} 
                  aria-hidden="true" 
                />
                <div className="text-2xl font-bold">{value}</div>
                <div className="text-sm text-muted-foreground">{label}</div>
              </div>
            ))}
          </motion.div>          {/* Assessment Cards Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-8 mb-16"
          >
            {assessments.map((assessment, index) => (
              <motion.div
                key={assessment.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                role="article"
                aria-label={`${assessment.title} Assessment`}
              >
                <AssessmentCard 
                  assessment={assessment} 
                  onStart={() => handleStartAssessment(assessment.type)}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* How It Works Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-muted/30 hover:bg-muted/40 transition-colors rounded-2xl p-8 md:p-12"
            aria-labelledby="how-it-works-title"
          >
            <h2 id="how-it-works-title" className="text-3xl font-bold text-center mb-8">
              How It Works
            </h2>
              <div className="grid md:grid-cols-3 gap-8">
              {steps.map(({ number, title, description, color }) => (
                <div key={number} className="text-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    color === 'primary' ? 'bg-primary/10' : 'bg-secondary/10'
                  }`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                      color === 'primary' 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-secondary text-secondary-foreground'
                    }`}>
                      {number}
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2">{title}</h3>
                  <p className="text-muted-foreground text-sm">{description}</p>
                </div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </>
  );
}
