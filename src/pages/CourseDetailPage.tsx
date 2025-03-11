import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChevronLeft, GraduationCap, BookCheck, Target, Clock, Users, Brain, Calculator } from 'lucide-react';

const courseData = {
  junior: {
    title: '中学生コース',
    description: '5教科完全対応の充実したカリキュラムで、確かな学力を身につけます',
    image: '/images/school1.jpg',
    features: [
      {
        title: '完全理解にこだわった指導',
        description: '一つひとつの単元を確実に理解し、応用力を養います。'
      },
      {
        title: '定期テスト対策',
        description: '学校の定期テストに合わせた対策で、内申点アップを目指します。'
      },
      {
        title: '受験対策',
        description: '志望校合格に向けた計画的な受験対策を実施します。'
      }
    ],
    schedule: [
      {
        day: '月曜・木曜',
        subjects: '国語・数学',
        time: '17:00～19:00'
      },
      {
        day: '火曜・金曜',
        subjects: '英語・理科',
        time: '17:00～19:00'
      },
      {
        day: '水曜',
        subjects: '社会',
        time: '17:00～18:30'
      }
    ],
    pricing: {
      admission: '20,000円',
      monthly: '28,000円～',
      notes: ['教材費別途', '兄弟割引あり']
    }
  },
  high: {
    title: '高校生コース',
    description: '大学受験に向けた体系的なカリキュラムで、確実な学力向上を実現します',
    image: '/images/school2.jpg',
    features: [
      {
        title: '受験に特化した指導',
        description: '入試問題の分析に基づいた的確な指導を行います。'
      },
      {
        title: '個別最適化学習',
        description: '生徒一人ひとりの志望校に合わせた学習計画を立案します。'
      },
      {
        title: '小論文・面接対策',
        description: '総合型選抜・学校推薦型選抜にも対応した指導を行います。'
      }
    ],
    schedule: [
      {
        day: '月曜・木曜',
        subjects: '英語・数学',
        time: '19:30～21:30'
      },
      {
        day: '火曜・金曜',
        subjects: '国語・理科',
        time: '19:30～21:30'
      },
      {
        day: '土曜',
        subjects: '特別講座',
        time: '14:00～17:00'
      }
    ],
    pricing: {
      admission: '30,000円',
      monthly: '35,000円～',
      notes: ['教材費別途', '模試費用込み']
    }
  },
  individual: {
    title: '個別指導コース',
    description: '一人ひとりの学習進度や目標に合わせた、きめ細かな指導を提供します',
    image: '/images/school3.jpg',
    features: [
      {
        title: '1対1の徹底指導',
        description: '生徒の理解度に合わせて、最適なペースで学習を進めます。'
      },
      {
        title: '自由な時間割',
        description: '部活動や習い事との両立も可能な柔軟なスケジュール。'
      },
      {
        title: '苦手科目克服',
        description: 'つまずきポイントを丁寧に解消していきます。'
      }
    ],
    schedule: [
      {
        day: '月曜～土曜',
        subjects: '全教科対応',
        time: '14:00～21:30'
      }
    ],
    pricing: {
      admission: '20,000円',
      monthly: '32,000円～',
      notes: ['90分×4回/月から', '追加受講可能']
    }
  }
};

function CourseDetailPage() {
  const { courseId } = useParams();
  const course = courseData[courseId as keyof typeof courseData];

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">コースが見つかりません</h1>
          <Link to="/#courses" className="text-blue-600 hover:text-blue-800">
            コース一覧に戻る
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-12">
        <Link to="/#courses" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
          <ChevronLeft className="h-5 w-5 mr-1" />
          コース一覧に戻る
        </Link>

        {/* Hero Section */}
        <div className="relative h-[400px] rounded-xl overflow-hidden mb-12">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{course.title}</h1>
              <p className="text-xl max-w-2xl">{course.description}</p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">コースの特徴</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {course.features.map((feature, index) => (
              <div key={index} className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-4 flex items-center">
                  <Target className="h-5 w-5 text-blue-600 mr-2" />
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Schedule */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">授業スケジュール</h2>
          <div className="grid gap-4">
            {course.schedule.map((schedule, index) => (
              <div key={index} className="flex items-center p-4 border rounded-lg">
                <Clock className="h-5 w-5 text-blue-600 mr-4" />
                <div className="grid grid-cols-3 w-full">
                  <div className="font-semibold">{schedule.day}</div>
                  <div className="text-gray-600">{schedule.subjects}</div>
                  <div className="text-gray-600">{schedule.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">料金案内</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 border rounded-lg">
              <h3 className="font-semibold mb-4">入学金</h3>
              <p className="text-3xl font-bold text-blue-600">{course.pricing.admission}</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="font-semibold mb-4">月額授業料</h3>
              <p className="text-3xl font-bold text-blue-600">{course.pricing.monthly}</p>
            </div>
          </div>
          <ul className="mt-4 space-y-2">
            {course.pricing.notes.map((note, index) => (
              <li key={index} className="flex items-center text-gray-600">
                <BookCheck className="h-4 w-4 text-blue-600 mr-2" />
                {note}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/trial"
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold inline-flex items-center justify-center hover:bg-blue-700 transition-colors"
            >
              無料体験授業に申し込む
              <ChevronLeft className="ml-2 h-5 w-5 rotate-180" />
            </Link>
            <Link
              to="/brochure"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold inline-flex items-center justify-center hover:bg-blue-50 transition-colors"
            >
              資料請求
              <BookCheck className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetailPage;