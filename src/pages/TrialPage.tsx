import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, GraduationCap } from 'lucide-react';

type FormData = {
  studentName: string;
  studentGrade: string;
  parentName: string;
  email: string;
  phone: string;
  address: string;
  preferredDate: string;
  preferredTime: string;
  subjects: string[];
  message: string;
};

function TrialPage() {
  const [formData, setFormData] = useState<FormData>({
    studentName: '',
    studentGrade: '',
    parentName: '',
    email: '',
    phone: '',
    address: '',
    preferredDate: '',
    preferredTime: '',
    subjects: [],
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ここで送信処理を実装
    console.log('Form submitted:', formData);
    alert('お申し込みを受け付けました。担当者より連絡させていただきます。');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      subjects: checked
        ? [...prev.subjects, value]
        : prev.subjects.filter(subject => subject !== value)
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
              <GraduationCap className="h-12 w-12 text-blue-600" />
              <h1 className="text-4xl font-bold text-gray-900">無料体験授業申込</h1>
            </div>
            <p className="text-gray-600">
              まずは無料体験授業で、明進学習塾の指導方法をご体験ください。
              <br />
              下記フォームに必要事項をご入力の上、お申し込みください。
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    生徒氏名 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="studentName"
                    required
                    value={formData.studentName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="例：山田 太郎"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    学年 <span className="text-red-500">*</span>
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
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  保護者氏名 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="parentName"
                  required
                  value={formData.parentName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="例：山田 花子"
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

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    希望日 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    name="preferredDate"
                    required
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    希望時間 <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="preferredTime"
                    required
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">選択してください</option>
                    <option value="15:00">15:00～</option>
                    <option value="16:00">16:00～</option>
                    <option value="17:00">17:00～</option>
                    <option value="18:00">18:00～</option>
                    <option value="19:00">19:00～</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  体験希望科目（複数選択可） <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="subjects"
                      value="国語"
                      checked={formData.subjects.includes('国語')}
                      onChange={handleCheckboxChange}
                      className="rounded text-blue-600 focus:ring-blue-500"
                    />
                    <span>国語</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="subjects"
                      value="数学"
                      checked={formData.subjects.includes('数学')}
                      onChange={handleCheckboxChange}
                      className="rounded text-blue-600 focus:ring-blue-500"
                    />
                    <span>数学</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="subjects"
                      value="英語"
                      checked={formData.subjects.includes('英語')}
                      onChange={handleCheckboxChange}
                      className="rounded text-blue-600 focus:ring-blue-500"
                    />
                    <span>英語</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="subjects"
                      value="理科"
                      checked={formData.subjects.includes('理科')}
                      onChange={handleCheckboxChange}
                      className="rounded text-blue-600 focus:ring-blue-500"
                    />
                    <span>理科</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="subjects"
                      value="社会"
                      checked={formData.subjects.includes('社会')}
                      onChange={handleCheckboxChange}
                      className="rounded text-blue-600 focus:ring-blue-500"
                    />
                    <span>社会</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ご質問・ご要望など
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="ご質問やご要望がございましたら、ご記入ください。"
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
                >
                  申し込みを確定する
                </button>
              </div>
            </form>
          </div>

          <div className="mt-8 bg-blue-50 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">無料体験授業について</h2>
            <ul className="space-y-2 text-gray-600">
              <li>• 体験授業は約60分です。</li>
              <li>• 現在の学習状況を確認させていただき、最適な学習プランをご提案いたします。</li>
              <li>• 保護者様との面談も実施いたしますので、ご質問等ございましたらお気軽にご相談ください。</li>
              <li>• お申し込み後、24時間以内に担当者よりご連絡させていただきます。</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrialPage;