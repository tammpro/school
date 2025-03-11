import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TrialPage from './pages/TrialPage';
import BrochurePage from './pages/BrochurePage';
import CourseDetailPage from './pages/CourseDetailPage';
import { GraduationCap, Menu, X } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <nav className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-blue-900">明進学習塾</span>
            </Link>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 text-gray-600">
              <Link to="/" className="hover:text-blue-600">ホーム</Link>
              <a href="/#about" className="hover:text-blue-600">特徴</a>
              <a href="/#courses" className="hover:text-blue-600">コース案内</a>
              <a href="/#teachers" className="hover:text-blue-600">講師紹介</a>
              <a href="/#results" className="hover:text-blue-600">合格実績</a>
              <a href="/#schedule" className="hover:text-blue-600">年間スケジュール</a>
              <a href="/#contact" className="hover:text-blue-600">お問い合わせ</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-gray-600 hover:text-blue-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-gray-100">
              <div className="flex flex-col space-y-4">
                <Link 
                  to="/" 
                  className="text-gray-600 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  ホーム
                </Link>
                <a 
                  href="/#about" 
                  className="text-gray-600 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  特徴
                </a>
                <a 
                  href="/#courses" 
                  className="text-gray-600 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  コース案内
                </a>
                <a 
                  href="/#teachers" 
                  className="text-gray-600 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  講師紹介
                </a>
                <a 
                  href="/#results" 
                  className="text-gray-600 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  合格実績
                </a>
                <a 
                  href="/#schedule" 
                  className="text-gray-600 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  年間スケジュール
                </a>
                <a 
                  href="/#contact" 
                  className="text-gray-600 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  お問い合わせ
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/trial" element={<TrialPage />} />
        <Route path="/brochure" element={<BrochurePage />} />
        <Route path="/courses/:courseId" element={<CourseDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;