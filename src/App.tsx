import { Routes, Route } from 'react-router-dom'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

// Import pages
import HomePage from '@/pages/HomePage.tsx'
import AboutPage from '@/pages/AboutPage.tsx'
import ContactPage from '@/pages/ContactPage.tsx'
import AnalyticsPage from '@/pages/AnalyticsPage.tsx'
import AssessmentsPage from '@/pages/AssessmentsPage.tsx'
import BigFivePage from '@/pages/assessments/BigFivePage.tsx'
import BigFiveResultsPage from '@/pages/assessments/BigFiveResultsPage.tsx'
import DiscPage from '@/pages/assessments/DiscPage.tsx'
import DiscResultsPage from '@/pages/assessments/DiscResultsPage.tsx'
import EnneagramPage from '@/pages/assessments/EnneagramPage.tsx'
import EnneagramResultsPage from '@/pages/assessments/EnneagramResultsPage.tsx'
import MbtiPage from '@/pages/assessments/MbtiPage.tsx'
import MbtiResultsPage from '@/pages/assessments/MbtiResultsPage.tsx'
import StrengthsPage from '@/pages/assessments/StrengthsPage.tsx'
import StrengthsResultsPage from '@/pages/assessments/StrengthsResultsPage.tsx'
import ValuesPage from '@/pages/assessments/ValuesPage.tsx'
import ValuesResultsPage from '@/pages/assessments/ValuesResultsPage.tsx'
import LifeBalancePage from '@/pages/assessments/LifeBalancePage.tsx'
import LifeBalanceResultsPage from '@/pages/assessments/LifeBalanceResultsPage.tsx'
import EQPage from '@/pages/assessments/EQPage.tsx'
import EQResultsPage from '@/pages/assessments/EQResultsPage.tsx'
import LeadershipPage from '@/pages/assessments/LeadershipPage.tsx'
import LeadershipResultsPage from '@/pages/assessments/LeadershipResultsPage.tsx'

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/assessments" element={<AssessmentsPage />} />
          <Route path="/assessments/big-five" element={<BigFivePage />} />
          <Route path="/assessments/big-five/results" element={<BigFiveResultsPage />} />
          <Route path="/assessments/disc" element={<DiscPage />} />
          <Route path="/assessments/disc/results" element={<DiscResultsPage />} />
          <Route path="/assessments/enneagram" element={<EnneagramPage />} />
          <Route path="/assessments/enneagram/results" element={<EnneagramResultsPage />} />
          <Route path="/assessments/mbti" element={<MbtiPage />} />
          <Route path="/assessments/mbti/results" element={<MbtiResultsPage />} />          <Route path="/assessments/strengths" element={<StrengthsPage />} />
          <Route path="/assessments/strengths/results" element={<StrengthsResultsPage />} />
          <Route path="/assessments/values" element={<ValuesPage />} />
          <Route path="/assessments/values/results" element={<ValuesResultsPage />} />
          <Route path="/assessments/life-balance" element={<LifeBalancePage />} />
          <Route path="/assessments/life-balance/results" element={<LifeBalanceResultsPage />} />
          <Route path="/assessments/eq" element={<EQPage />} />
          <Route path="/assessments/eq/results" element={<EQResultsPage />} />
          <Route path="/assessments/leadership" element={<LeadershipPage />} />
          <Route path="/assessments/leadership/results" element={<LeadershipResultsPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
