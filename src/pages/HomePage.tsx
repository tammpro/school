import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Trophy, Users, Clock, Phone, Mail, MapPin, ChevronRight, GraduationCap, Brain, Target, Star, BookCheck, Calculator, School, Award, ClipboardCheck as ChalkboardTeacher } from 'lucide-react';

function HomePage() {
  const [showAllNews, setShowAllNews] = useState(false);

  const newsItems = [
    {
      date: '2024.03.15',
      type: '重要',
      typeColor: 'red',
      content: '2024年度 春期講習のご案内'
    },
    {
      date: '2024.03.10',
      type: 'お知らせ',
      typeColor: 'blue',
      content: '新年度クラス編成について'
    },
    {
      date: '2024.03.05',
      type: 'イベント',
      typeColor: 'green',
      content: '進学相談会開催のお知らせ'
    },
    {
      date: '2024.03.01',
      type: 'お知らせ',
      typeColor: 'blue',
      content: '2024年度入塾説明会日程'
    },
    {
      date: '2024.02.28',
      type: '重要',
      typeColor: 'red',
      content: '2023年度合格速報'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <header className="relative h-[600px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('./images/school3.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-blue-900/80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 h-[calc(100%-80px)] flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              確かな学力と未来への自信を
            </h1>
            <p className="text-xl text-white mb-8">
              一人ひとりに合わせた丁寧な指導で、可能性を最大限に引き出します
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/trial" 
                className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold flex items-center justify-center hover:bg-blue-50 transition-colors"
              >
                無料体験授業に申し込む
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/brochure" 
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                資料請求
                <BookOpen className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* News Section */}
      <section className="py-8 bg-blue-50">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">お知らせ</h2>
            <button 
              onClick={() => setShowAllNews(!showAllNews)} 
              className="text-blue-600 hover:text-blue-800"
            >
              {showAllNews ? '閉じる' : 'すべて見る'}
            </button>
          </div>
          <div className="space-y-4">
            {newsItems.slice(0, showAllNews ? newsItems.length : 2).map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-500">{item.date}</span>
                  <span className={`px-2 py-1 bg-${item.typeColor}-100 text-${item.typeColor}-800 text-xs rounded`}>
                    {item.type}
                  </span>
                  <span>{item.content}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white" id="about">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">明進学習塾の特徴</h2>
          <p className="text-center text-gray-600 mb-12">30年以上の指導実績と、独自の教育メソッドで確実な成果を実現します</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">少人数制指導</h3>
              <p className="text-gray-600 mb-4">
                1クラス最大8名までの少人数制で、生徒一人ひとりの理解度に合わせた丁寧な指導を行います。
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-500 mr-2" />
                  個別の学習進度管理
                </li>
                <li className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-500 mr-2" />
                  質問しやすい環境
                </li>
                <li className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-500 mr-2" />
                  集中できる学習空間
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Brain className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">オリジナル教材</h3>
              <p className="text-gray-600 mb-4">
                30年の指導実績から生まれた独自教材で、効率的な学習と確実な学力向上を実現します。
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-500 mr-2" />
                  段階的な学習プログラム
                </li>
                <li className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-500 mr-2" />
                  理解度チェックテスト
                </li>
                <li className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-500 mr-2" />
                  オンライン学習支援
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">目標達成サポート</h3>
              <p className="text-gray-600 mb-4">
                定期的な面談と学習計画の作成で、確実に目標達成までサポートします。
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-500 mr-2" />
                  月1回の個別面談
                </li>
                <li className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-500 mr-2" />
                  進路指導・受験対策
                </li>
                <li className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-500 mr-2" />
                  保護者面談
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-gray-50" id="courses">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">コース案内</h2>
          <p className="text-center text-gray-600 mb-12">お子様の目標や学年に合わせて、最適なコースをお選びいただけます</p>
          <div className="grid md:grid-cols-3 gap-8">
            {/* 各コースカードを同じ高さに設定し、ボタンを下部に配置 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm flex flex-col">
              <div className="h-48 relative">
                <img 
                  src="/images/school1.jpg" 
                  alt="中学生コース" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white">中学生コース</h3>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center mb-4">
                  <School className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="font-semibold">対象: 中学1年生～3年生</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <BookCheck className="h-5 w-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span>5教科完全対応（国語・数学・英語・理科・社会）</span>
                  </li>
                  <li className="flex items-start">
                    <BookCheck className="h-5 w-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span>定期テスト対策</span>
                  </li>
                  <li className="flex items-start">
                    <BookCheck className="h-5 w-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span>高校受験対策</span>
                  </li>
                </ul>
                <div className="mt-auto">
                  <Link 
                    to="/courses/junior"
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
                  >
                    詳細を見る
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-sm flex flex-col">
              <div className="h-48 relative">
                <img 
                  src="/images/school2.jpg" 
                  alt="高校生コース" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white">高校生コース</h3>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center mb-4">
                  <School className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="font-semibold">対象: 高校1年生～3年生</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <BookCheck className="h-5 w-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span>大学受験対策（文系・理系）</span>
                  </li>
                  <li className="flex items-start">
                    <BookCheck className="h-5 w-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span>個別指導で弱点克服</span>
                  </li>
                  <li className="flex items-start">
                    <BookCheck className="h-5 w-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span>小論文・面接対策</span>
                  </li>
                </ul>
                <div className="mt-auto">
                  <Link 
                    to="/courses/high"
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
                  >
                    詳細を見る
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-sm flex flex-col">
              <div className="h-48 relative">
                <img 
                  src="/images/school3.jpg" 
                  alt="個別指導コース" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white">個別指導コース</h3>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center mb-4">
                  <School className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="font-semibold">対象: 中学生・高校生</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <BookCheck className="h-5 w-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span>1対1の完全個別指導</span>
                  </li>
                  <li className="flex items-start">
                    <BookCheck className="h-5 w-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span>自分のペースで学習</span>
                  </li>
                  <li className="flex items-start">
                    <BookCheck className="h-5 w-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span>柔軟な時間割</span>
                  </li>
                </ul>
                <div className="mt-auto">
                  <Link 
                    to="/courses/individual"
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
                  >
                    詳細を見る
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teachers Section */}
      <section className="py-20 bg-white" id="teachers">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">講師紹介</h2>
          <p className="text-center text-gray-600 mb-12">経験豊富な講師陣が、生徒一人ひとりの目標達成をサポートします</p>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <img 
                  src="/images/teacher1.jpg" 
                  alt="山田先生" 
                  className="w-full h-full object-cover rounded-full"
                />
                <div className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full">
                  <ChalkboardTeacher className="h-6 w-6" />
                </div>
              </div>
              <h3 className="font-semibold mb-2">山田 太郎</h3>
              <p className="text-sm text-gray-600 mb-2">数学科主任</p>
              <p className="text-sm text-gray-500">東京大学大学院修了</p>
            </div>
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <img 
                  src="/images/teacher2.jpg" 
                  alt="佐藤先生" 
                  className="w-full h-full object-cover rounded-full"
                />
                <div className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full">
                  <ChalkboardTeacher className="h-6 w-6" />
                </div>
              </div>
              <h3 className="font-semibold mb-2">佐藤 美咲</h3>
              <p className="text-sm text-gray-600 mb-2">英語科主任</p>
              <p className="text-sm text-gray-500">TOEIC 990点</p>
            </div>
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <img 
                  src="/images/teacher3.jpg" 
                  alt="鈴木先生" 
                  className="w-full h-full object-cover rounded-full"
                />
                <div className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full">
                  <ChalkboardTeacher className="h-6 w-6" />
                </div>
              </div>
              <h3 className="font-semibold mb-2">鈴木 健一</h3>
              <p className="text-sm text-gray-600 mb-2">理科主任</p>
              <p className="text-sm text-gray-500">元高校教師</p>
            </div>
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <img 
                  src="/images/teacher4.jpg" 
                  alt="田中先生" 
                  className="w-full h-full object-cover rounded-full"
                />
                <div className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full">
                  <ChalkboardTeacher className="h-6 w-6" />
                </div>
              </div>
              <h3 className="font-semibold mb-2">田中 優子</h3>
              <p className="text-sm text-gray-600 mb-2">国語科主任</p>
              <p className="text-sm text-gray-500">現役作家</p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gray-50" id="results">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">合格実績</h2>
          <p className="text-center text-gray-600 mb-12">2023年度の主な合格実績をご紹介します</p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-6">高校入試</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-4 flex items-center">
                    <Trophy className="h-5 w-5 text-yellow-500 mr-2" />
                    県立高校
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <Award className="h-4 w-4 text-blue-600 mr-2" />
                      <span>県立第一高校 32名</span>
                    </li>
                    <li className="flex items-center">
                      <Award className="h-4 w-4 text-blue-600 mr-2" />
                      <span>県立第二高校 28名</span>
                    </li>
                    <li className="flex items-center">
                      <Award className="h-4 w-4 text-blue-600 mr-2" />
                      <span>県立第三高校 45名</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4 flex items-center">
                    <Trophy className="h-5 w-5 text-yellow-500 mr-2" />
                    私立高校
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <Award className="h-4 w-4 text-blue-600 mr-2" />
                      <span>青山学院高等部 15名</span>
                    </li>
                    <li className="flex items-center">
                      <Award className="h-4 w-4 text-blue-600 mr-2" />
                      <span>立教高校 12名</span>
                    </li>
                    <li className="flex items-center">
                      <Award className="h-4 w-4 text-blue-600 mr-2" />
                      <span>中央大学附属高校 18名</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-6">大学入試</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-4 flex items-center">
                    <Trophy className="h-5 w-5 text-yellow-500 mr-2" />
                    国公立大学
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <Award className="h-4 w-4 text-blue-600 mr-2" />
                      <span>東京大学 5名</span>
                    </li>
                    <li className="flex items-center">
                      <Award className="h-4 w-4 text-blue-600 mr-2" />
                      <span>京都大学 3名</span>
                    </li>
                    <li className="flex items-center">
                      <Award className="h-4 w-4 text-blue-600 mr-2" />
                      <span>東北大学 8名</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4 flex items-center">
                    <Trophy className="h-5 w-5 text-yellow-500 mr-2" />
                    私立大学
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <Award className="h-4 w-4 text-blue-600 mr-2" />
                      <span>慶應義塾大学 12名</span>
                    </li>
                    <li className="flex items-center">
                      <Award className="h-4 w-4 text-blue-600 mr-2" />
                      <span>早稲田大学 15名</span>
                    </li>
                    <li className="flex items-center">
                      <Award className="h-4 w-4 text-blue-600 mr-2" />
                      <span>上智大学 20名</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-6">生徒の声</h3>
              <div className="space-y-6">
                <blockquote className="italic text-gray-700 border-l-4 border-blue-600 pl-4">
                  "先生方の熱心な指導のおかげで、第一志望校に合格することができました。個別指導で苦手な数学も克服できました。"
                  <footer className="mt-2 text-sm">- 県立第一高校合格 Sさん</footer>
                </blockquote>
                <blockquote className="italic text-gray-700 border-l-4 border-blue-600 pl-4">
                  "分からないところを何度も丁寧に教えていただき、テストの点数が大きく上がりました。"
                  <footer className="mt-2 text-sm">- 慶應義塾大学合格 Kさん</footer>
                </blockquote>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-6">保護者の声</h3>
              <div className="space-y-6">
                <blockquote className="italic text-gray-700 border-l-4 border-blue-600 pl-4">
                  "定期的な面談で子どもの学習状況が把握でき、安心して任せることができました。"
                  <footer className="mt-2 text-sm">- 中学3年生保護者様</footer>
                </blockquote>
                <blockquote className="italic text-gray-700 border-l-4 border-blue-600 pl-4">
                  "学習意欲が向上し、自主的に勉強するようになりました。"
                  <footer className="mt-2 text-sm">- 高校2年生保護者様</footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-20 bg-white" id="schedule">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">年間スケジュール</h2>
          <p className="text-center text-gray-600 mb-12">年間を通じて充実した学習プログラムをご用意しています</p>
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-4">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-4">春期（4月～6月）</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Calculator className="h-5 w-5 text-blue-600 mr-2" />
                    <span>新学期ス タートアップ講座</span>
                  </li>
                  <li className="flex items-center">
                    <Calculator className="h-5 w-5 text-blue-600 mr-2" />
                    <span>中間テスト対策</span>
                  </li>
                </ul>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-4">夏期（7月～9月）</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Calculator className="h-5 w-5 text-blue-600 mr-2" />
                    <span>夏期集中講座</span>
                  </li>
                  <li className="flex items-center">
                    <Calculator className="h-5 w-5 text-blue-600 mr-2" />
                    <span>夏期特別講習</span>
                  </li>
                </ul>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-4">秋期（10月～12月）</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Calculator className="h-5 w-5 text-blue-600 mr-2" />
                    <span>期末テスト対策</span>
                  </li>
                  <li className="flex items-center">
                    <Calculator className="h-5 w-5 text-blue-600 mr-2" />
                    <span>入試直前対策講座</span>
                  </li>
                </ul>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-4">冬期（1月～3月）</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Calculator className="h-5 w-5 text-blue-600 mr-2" />
                    <span>冬期集中講座</span>
                  </li>
                  <li className="flex items-center">
                    <Calculator className="h-5 w-5 text-blue-600 mr-2" />
                    <span>学年末テスト対策</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50" id="contact">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">お問い合わせ</h2>
          <p className="text-center text-gray-600 mb-12">まずは無料体験授業にお申し込みください</p>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-blue-600 mr-4" />
                  <div>
                    <p className="font-semibold">お電話</p>
                    <p>0120-XXX-XXX</p>
                    <p className="text-sm text-gray-500">平日・土曜 9:00-21:00</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-blue-600 mr-4" />
                  <div>
                    <p className="font-semibold">メール</p>
                    <p>info@meishin.example.com</p>
                    <p className="text-sm text-gray-500">24時間受付</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-blue-600 mr-4" />
                  <div>
                    <p className="font-semibold">所在地</p>
                    <p>〒XXX-XXXX</p>
                    <p className="text-sm text-gray-500">東京都○○区○○</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="h-6 w-6 text-blue-600 mr-4" />
                  <div>
                    <p className="font-semibold">受付時間</p>
                    <p>平日 14:00～22:00</p>
                    <p className="text-sm text-gray-500">土曜 9:00～17:00</p>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <Link 
                  to="/trial"
                  className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold inline-flex items-center hover:bg-blue-700 transition-colors"
                >
                  無料体験授業に申し込む
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <Link to="/" className="flex items-center space-x-2 mb-4">
                <GraduationCap className="h-8 w-8" />
                <span className="text-2xl font-bold">明進学習塾</span>
              </Link>
              <p className="text-sm text-gray-300">
                確かな学力と未来への自信を育む学習塾
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">コース案内</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link to="/courses/junior" className="hover:text-white">中学生コース</Link></li>
                <li><Link to="/courses/high" className="hover:text-white">高校生コース</Link></li>
                <li><Link to="/courses/individual" className="hover:text-white">個別指導コース</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">メニュー</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="/#about" className="hover:text-white">特徴</a></li>
                <li><a href="/#teachers" className="hover:text-white">講師紹介</a></li>
                <li><a href="/#results" className="hover:text-white">合格実績</a></li>
                <li><a href="/#schedule" className="hover:text-white">年間スケジュール</a></li>
                <li><a href="/#contact" className="hover:text-white">お問い合わせ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">アクセス</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>東京本校</li>
                <li>横浜校</li>
                <li>千葉校</li>
                <li className="pt-4">
                  <Link to="/trial" className="hover:text-white">無料体験授業</Link>
                </li>
                <li>
                  <Link to="/brochure" className="hover:text-white">資料請求</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-300">
            © 2024 明進学習塾 All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;