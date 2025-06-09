'use client';

import { motion } from 'framer-motion';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Users, Clock, Award, Brain } from 'lucide-react';

// Mock data for demonstration
const assessmentData = [
  { name: 'MBTI', completed: 156, inProgress: 23, color: '#8884d8' },
  { name: 'Big Five', completed: 89, inProgress: 15, color: '#82ca9d' },
  { name: 'DISC', completed: 134, inProgress: 18, color: '#ffc658' },
  { name: 'Enneagram', completed: 67, inProgress: 12, color: '#ff7300' },
  { name: 'Strengths', completed: 45, inProgress: 8, color: '#e91e63' },
];

const completionTrend = [
  { month: 'Jan', assessments: 45 },
  { month: 'Feb', assessments: 52 },
  { month: 'Mar', assessments: 48 },
  { month: 'Apr', assessments: 61 },
  { month: 'May', assessments: 55 },
  { month: 'Jun', assessments: 67 },
];

const stats = [
  { icon: Users, label: 'Total Users', value: '2,847', change: '+12%' },
  { icon: Brain, label: 'Assessments Completed', value: '491', change: '+8%' },
  { icon: Clock, label: 'Avg. Completion Time', value: '18 min', change: '-2 min' },
  { icon: Award, label: 'Completion Rate', value: '94%', change: '+3%' },
];

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <Badge variant="secondary" className="mb-4">
            📊 Analytics Dashboard
          </Badge>
          <h1 className="text-4xl font-bold mb-2">Assessment Analytics</h1>
          <p className="text-muted-foreground">
            Insights into assessment usage, completion rates, and user engagement.
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {stats.map((stat, index) => (
            <Card key={stat.label}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {stat.label}
                    </p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-xs text-green-600">{stat.change}</p>
                  </div>
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <stat.icon className="h-5 w-5 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Assessment Distribution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Assessment Distribution</CardTitle>
                <CardDescription>
                  Breakdown of completed assessments by type
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={assessmentData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, value }) => `${name}: ${value}`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="completed"
                    >
                      {assessmentData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>

          {/* Completion Trend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Completion Trend
                </CardTitle>
                <CardDescription>
                  Monthly assessment completions over time
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={completionTrend}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="assessments" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Assessment Details Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Assessment Details</CardTitle>
              <CardDescription>
                Detailed breakdown of assessment performance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3">Assessment</th>
                      <th className="text-left p-3">Completed</th>
                      <th className="text-left p-3">In Progress</th>
                      <th className="text-left p-3">Completion Rate</th>
                      <th className="text-left p-3">Avg. Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {assessmentData.map((assessment) => {
                      const total = assessment.completed + assessment.inProgress;
                      const completionRate = Math.round((assessment.completed / total) * 100);
                      
                      return (
                        <tr key={assessment.name} className="border-b hover:bg-muted/30">
                          <td className="p-3 font-medium">{assessment.name}</td>
                          <td className="p-3">{assessment.completed}</td>
                          <td className="p-3">{assessment.inProgress}</td>
                          <td className="p-3">
                            <Badge variant={completionRate > 85 ? 'default' : 'secondary'}>
                              {completionRate}%
                            </Badge>
                          </td>
                          <td className="p-3">
                            {assessment.name === 'MBTI' ? '15 min' :
                             assessment.name === 'Big Five' ? '20 min' :
                             assessment.name === 'DISC' ? '12 min' :
                             assessment.name === 'Enneagram' ? '25 min' : '30 min'}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
