import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import PageTitle from './components/PageTitle';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import Home from './pages/Home';
import Services from './pages/Services';
import Documents from './pages/Documents';
import StudentGuide from './pages/StudentGuide';
import FAQ from './pages/FAQ';

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <Router>
          <PageTitle />
          <div className="min-h-screen flex flex-col transition-colors duration-200 dark:bg-gray-900 bg-gray-50">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/documents" element={<Documents />} />
                <Route path="/student-guide" element={<StudentGuide />} />
                <Route path="/faq" element={<FAQ />} />
              </Routes>
            </main>
            <Footer />
            <ScrollToTop />
          </div>
        </Router>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;