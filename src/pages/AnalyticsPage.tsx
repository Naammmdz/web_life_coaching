import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Users, TrendingUp, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">
            📊 Analytics Dashboard
          </Badge>
          <h1 className="text-4xl font-bold mb-4">
            Assessment Analytics
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Track your assessment progress and insights over time. See how your personality 
            profile contributes to your personal and professional development.
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            {
              icon: Users,
              title: "Assessments Completed",
              value: "12",
              change: "+2 this month"
            },
            {
              icon: Target,
              title: "Goals Achieved",
              value: "8",
              change: "+3 this quarter"
            },
            {
              icon: TrendingUp,
              title: "Progress Score",
              value: "85%",
              change: "+15% improvement"
            },
            {
              icon: BarChart,
              title: "Insights Generated",
              value: "47",
              change: "+12 new insights"
            }
          ].map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                  <stat.icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-muted-foreground">{stat.change}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Coming Soon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center bg-muted/50 rounded-lg p-12"
        >
          <BarChart className="h-16 w-16 text-primary mx-auto mb-6" />
          <h2 className="text-2xl font-bold mb-4">Advanced Analytics Coming Soon</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're working on comprehensive analytics dashboards that will provide deeper insights 
            into your personality development, goal tracking, and progress over time. Stay tuned!
          </p>
        </motion.div>
      </div>
    </div>
  );
}
