import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, GraduationCap, BookOpen, Download, Mail } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  phone: string;
  address: string;
  studentGrade: string;
  interests: string[];
  requestType: string;
};

function BrochurePage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    address: '',
    studentGrade: '',
    interests: [],
    requestType: 'digital',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ここで送信処理を実装
    console.log('Form submitted:', formData);
    alert('資料請求を受け付けました。ご指定の方法で資料をお送りいたします。');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      interests: checked
        ? [...prev.interests, value]
        : prev.interests.filter(interest => interest !== value)
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-12">
        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
          <ChevronLeft className="h-5 w-5 mr-1" />
          トップページに戻る
        </Link>

        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <BookOpen className="h-12 w-12 text-blue-600" />
              <h1 className="text-4xl font-bold text-gray-900">資料請求</h1>
            </div>
            <p className="text-gray-600">
              明進学習塾の詳しい情報をお届けいたします。
              <br />
              下記フォームに必要事項をご入力の上、ご請求ください。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Download className="h-6 w-6 text-blue-600" />
                <h2 className="text-lg font-semibold">デジタルパンフレット</h2>
              </div>
              <ul className="space-y-2 text-gray-600 text-sm mb-4">
                <li>• すぐにダウンロード可能</li>
                <li>• カラー版PDF形式</li>
                <li>• 動画コンテンツ付き</li>
                <li>• 指導方針の詳細</li>
                <li>• カリキュラムの特徴</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Mail className="h-6 w-6 text-blue-600" />
                <h2 className="text-lg font-semibold">郵送パンフレット</h2>
              </div>
              <ul className="space-y-2 text-gray-600 text-sm mb-4">
                <li>• 詳細な料金表</li>
                <li>• 時間割例</li>
                <li>• 入塾までの流れ</li>
                <li>• 特別講習案内</li>
                <li>• 各種特典情報</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="例：山田 太郎"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    メールアドレス <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="example@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    電話番号 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="例：090-1234-5678"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  住所 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="例：東京都○○区○○1-2-3"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  対象学年 <span className="text-red-500">*</span>
                </label>
                <select
                  name="studentGrade"
                  required
                  value={formData.studentGrade}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">選択してください</option>
                  <option value="中学1年">中学1年生</option>
                  <option value="中学2年">中学2年生</option>
                  <option value="中学3年">中学3年生</option>
                  <option value="高校1年">高校1年生</option>
                  <option value="高校2年">高校2年生</option>
                  <option value="高校3年">高校3年生</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  興味のあるコース（複数選択可） <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="interests"
                      value="中学生コース"
                      checked={formData.interests.includes('中学生コース')}
                      onChange={handleCheckboxChange}
                      className="rounded text-blue-600 focus:ring-blue-500"
                    />
                    <span>中学生コース</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="interests"
                      value="高校生コース"
                      checked={formData.interests.includes('高校生コース')}
                      onChange={handleCheckboxChange}
                      className="rounded text-blue-600 focus:ring-blue-500"
                    />
                    <span>高校生コース</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="interests"
                      value="個別指導コース"
                      checked={formData.interests.includes('個別指導コース')}
                      onChange={handleCheckboxChange}
                      className="rounded text-blue-600 focus:ring-blue-500"
                    />
                    <span>個別指導コース</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="interests"
                      value="特別講習"
                      checked={formData.interests.includes('特別講習')}
                      onChange={handleCheckboxChange}
                      className="rounded text-blue-600 focus:ring-blue-500"
                    />
                    <span>特別講習</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  資料の受け取り方法 <span className="text-red-500">*</span>
                </label>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="requestType"
                      value="digital"
                      checked={formData.requestType === 'digital'}
                      onChange={handleChange}
                      className="text-blue-600 focus:ring-blue-500"
                    />
                    <span>デジタルパンフレット（メールでお送りします）</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="requestType"
                      value="mail"
                      checked={formData.requestType === 'mail'}
                      onChange={handleChange}
                      className="text-blue-600 focus:ring-blue-500"
                    />
                    <span>郵送（ご指定の住所にお送りします）</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="requestType"
                      value="both"
                      checked={formData.requestType === 'both'}
                      onChange={handleChange}
                      className="text-blue-600 focus:ring-blue-500"
                    />
                    <span>両方希望</span>
                  </label>
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
                >
                  資料を請求する
                </button>
              </div>
            </form>
          </div>

          <div className="mt-8 bg-blue-50 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">資料請求に関する注意事項</h2>
            <ul className="space-y-2 text-gray-600">
              <li>• デジタルパンフレットは、お申し込み後すぐにメールでお送りいたします。</li>
              <li>• 郵送の場合、お申し込みから到着まで3〜4営業日程度かかります。</li>
              <li>• ご不明な点がございましたら、お気軽にお電話でお問い合わせください。</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrochurePage;