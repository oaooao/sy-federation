import React from "react";

export const CrowdAuthActivityDetail = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">活动详情</h2>
      <div className="flex items-center mb-4">
        <svg
          className="w-4 h-4 fill-current text-green-500 mr-2"
          viewBox="0 0 20 20"
        >
          <path d="M10 0C4.478 0 0 4.478 0 10s4.478 10 10 10 10-4.478 10-10S15.522 0 10 0zm4.293 6.293a.999.999 0 1 1 1.414 1.414l-5 5a.999.999 0 0 1-1.414 0l-2.5-2.5a.999.999 0 1 1 1.414-1.414l1.793 1.793 4.293-4.293z" />
        </svg>
        <p className="text-sm text-gray-600">已认证</p>
      </div>
      <div className="flex items-center mb-4">
        <svg
          className="w-4 h-4 fill-current text-gray-500 mr-2"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M18.164 3.06c.33.197.552.569.552.976v10.927c0 .407-.222.78-.552.977l-6.465 3.855c-.33.196-.736.196-1.066 0l-6.466-3.855c-.33-.197-.552-.57-.552-.977V4.036c0-.407.222-.78.552-.977L9.633 0c.33-.196.736-.196 1.066 0l6.465 3.86zM10 1.785l-4.746 2.835L10 7.454l4.746-2.834L10 1.785zm7.035 9.373a.92.92 0 0 1-.147.11l-6.405 3.814c-.143.087-.308.134-.476.134s-.333-.047-.476-.134l-6.405-3.814a.995.995 0 0 1-.543-.89V4.023c0-.312.168-.6.438-.753L9.074 1.39c.129-.077.28-.118.426-.118s.297.041.426.118l6.405 3.823c.27.162.438.44.438.753v7.243a.995.995 0 0 1-.543.89z"
          />
        </svg>
        <p className="text-sm text-gray-600">2023年3月10日，上午9点至下午5点</p>
      </div>
      <div className="flex items-center mb-4">
        <svg
          className="w-4 h-4 fill-current text-gray-500 mr-2"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M16 4V2H4v2H2v2h16V4zM4 16v-6h2v6H4zm12 0h-2v-6h2v6zM6 10h2v2H6v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z"
          />
        </svg>
        <p className="text-sm text-gray-600">上海市长宁区东方明珠凯旋中心</p>
      </div>
      <div className="flex items-center mb-4">
        <svg
          className="w-4 h-4 fill-current text-gray-500 mr-2"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M9.26 2c2.082 0 3.987.796 5.443 2.108a.824.824 0 0 1 .259.608v12.53a.824.824 0 0 1-.259.608C13.248 17.204 11.342 18 9.26 18c-2.082 0-3.987-.796-5.443-2.108a.824.824 0 0 1-.259-.608V4.716c0-.235.096-.459.259-.608C5.273 2.796 7.178 2 9.26 2zm0 2.07c-1.004 0-1.87.436-2.6 1.107a.825.825 0 0 0-.26.609v12.53c0 .224.091.438.25.588C7.366 17.341 8.623 18 9.96 18c1.004 0 1.87-.436 2.6-1.107a.825.825 0 0 0 .26-.609V4.716c0-.224-.091-.438-.25-.588-.73-.67-1.887-1.23-2.6-1.23zm-1.06 5.11a.9.9 0 0 0 .89.89h2.42v2.42a.9.9 0 0 0 .89.89h.871a.9.9 0 0 0 .89-.89v-2.42h2.42a.9.9 0 0 0 .89-.89v-.87a.9.9 0 0 0-.89-.89h-2.42v-2.42a.9.9 0 0 0-.89-.89h-.87a.9.9 0 0 0-.89.89v2.42h-2.42a.9.9 0 0 0-.89.89v.87z"
          />
        </svg>
        <p className="text-sm text-gray-600">50人已参加，还剩100个名额</p>
      </div>
      <div className="border-t border-gray-300 pt-4 mt-4">
        <h3 className="text-xl font-bold text-gray-800 mb-4">活动详情</h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          这是一个关于人群认证的活动详情页面。在这个页面上，你可以查看该活动的详细信息，包括活动名称、活动时间、活动地点和参与人数等。此外，你还可以通过页面上的按钮进行报名或取消报名操作。
        </p>
        <p className="text-gray-600 text-sm leading-relaxed mt-4">
          我们希望这个页面可以为您提供一个良好的用户体验，并使您更加了解人群认证这一概念和活动。
        </p>
      </div>
    </div>
  );
};

export default CrowdAuthActivityDetail;
