import React from 'react';
import { message } from 'antd';

const ContentTabs = ({ options = [], currentTab, onTabChange }) => {
  return (
    <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-4 justify-center mb-5 px-4 text-center items-center select-none">
      {options?.map((item) => (
        <div
          key={item?.id}
          className={`justify-center items-center flex h-full px-6 py-2 rounded-full text-sm lg:text-lg font-medium transition-all select-none ${
            currentTab === item?.value
              ? 'bg-primary text-white'
              : 'text-black border border-gray-300'
          } ${item?.disabled ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'}`}
          onClick={() =>
            item?.disabled
              ? message.info('Coming Soon!!')
              : onTabChange?.(item?.value)
          }
        >
          {item?.label}
        </div>
      ))}
    </div>
  );
};

export default ContentTabs;
