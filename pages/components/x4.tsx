import React from 'react';

function MyActivityPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-800">联合积分活动分析</h1>
          <nav className="text-gray-600">
            <ul className="flex">
              <li className="mr-6">
                <a href="#" className="hover:text-gray-800">首页</a>
              </li>
              <li className="mr-6">
                <a href="#" className="hover:text-gray-800">关于我们</a>
              </li>
              <li className="mr-6">
                <a href="#" className="hover:text-gray-800">联系我们</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">我参与的活动</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Activity card */}
          <div className="bg-white rounded-md shadow-md hover:shadow-lg transition-all duration-300">
            <div className="h-48 bg-gray-300 rounded-t-md"></div>
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2 text-gray-800">活动标题</h3>
              <p className="text-gray-600 mb-4">活动简介</p>
              <a href="#" className="text-blue-500 hover:text-blue-700 font-bold">了解更多</a>
            </div>
          </div>
          {/* Repeat activity card for each activity */}
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <p className="text-gray-400">版权所有 © 2023 联合积分活动分析</p>
          <div className="text-gray-400">
            <a href="#" className="mr-4 hover:text-gray-300">使用条款</a>
            <a href="#" className="hover:text-gray-300">隐私政策</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MyActivityPage;
