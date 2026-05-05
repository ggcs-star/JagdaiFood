import React, { useState, useEffect } from 'react';
import { sliderCategories as categoryData } from '../../../../db/index';
import ContentDetailSlider1 from './ContentDetailSlider1';
import ContentTabs1 from './ContentTabs1';
const ContentSlider1 = ({ currentTab, currentTabHandler }) => {
  const [categories, setCategories] = useState([]);
  const [currentTabState, setCurrentTabState] = useState(currentTab || "");

  useEffect(() => {
    setCategories(categoryData);

    if (!currentTab) {
      setCurrentTabState(categoryData[0]?.value || "");
    }
  }, [currentTab]);

  const filteredOptions = categories?.filter(item => !item?.disabled || item?.label);
  const selectedCategory = categories.find(cat => cat.value === currentTabState);
  const videoUrls = selectedCategory ? selectedCategory.videoUrls : [];
  const videoImages = selectedCategory ? selectedCategory.videoImages : [];

  const currentTabChangeHandler = (tab) => {
    setCurrentTabState(tab);
    currentTabHandler?.(tab);
  };

  return (
    <div className="py-20 bg-white flex flex-col">
      <ContentTabs1
        options={filteredOptions}
        currentTab={currentTabState}
        onTabChange={currentTabChangeHandler}
      />

      {videoUrls?.length > 0 ? (
        <ContentDetailSlider1 videoUrls={videoUrls} videoImages={videoImages}/>
      ) : (
        <p className="text-center text-gray-500">No videos available for this category.</p>
      )}
    </div>
  );
};

export default ContentSlider1;