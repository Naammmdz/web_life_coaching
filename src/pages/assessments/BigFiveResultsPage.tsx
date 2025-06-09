import { motion } from 'framer-motion';
import { ArrowLeft, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

export default function BigFiveResultsPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <Button variant="ghost" asChild className="mb-4">
            <Link to="/assessments">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Assessments
            </Link>
          </Button>
          <h1 className="text-3xl font-bold mb-4">Your Big Five Results</h1>
          <p className="text-lg text-muted-foreground">
            Here are your personality insights based on the Big Five model
          </p>
        </motion.div>

        {/* Results */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Brain className="h-8 w-8 text-primary" />
                <CardTitle>Results Coming Soon</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Your detailed Big Five personality results will be displayed here. 
                We're working on implementing the results calculation and visualization.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
