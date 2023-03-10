import React from "react";

const CrowdAuthActivityDetail = () => {
  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          人群认证活动详情
        </h2>
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
          <p className="text-sm text-gray-600">
            2023年3月10日，上午9点至下午5点
          </p>
        </div>
        <div> </div>
      </div>
    </div>
  );
};

export default CrowdAuthActivityDetail;