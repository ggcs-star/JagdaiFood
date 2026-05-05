import React, { useState, useEffect } from 'react';
import { getUniqueCategories2, getVideosByCategory2, allVideos } from '../../../../db/index';
import ContentDetailSlider1 from './ContentDetailSlider1';
import ContentTabs1 from './ContentTabs1';
import ContentDetailSlider2 from './ContentDetailSlider2';

const ContentSlider2 = ({ currentTab, currentTabHandler }) => {
  const [categories, setCategories] = useState([]);
  const [currentTabState, setCurrentTabState] = useState(currentTab || "");
  const [currentVideos, setCurrentVideos] = useState([]);

  useEffect(() => {
    const uniqueCategories = getUniqueCategories2();
    setCategories(uniqueCategories);

    if (!currentTab && uniqueCategories.length > 0) {
      setCurrentTabState(uniqueCategories[0]?.value || "");
      const videos = getVideosByCategory2(uniqueCategories[0]?.value);
      setCurrentVideos(videos);
    }
  }, [currentTab]);

  useEffect(() => {
    if (currentTabState) {
      const videos = getVideosByCategory2(currentTabState);
      setCurrentVideos(videos);
    }
  }, [currentTabState]);

  const filteredOptions = categories?.filter(item => !item?.disabled || item?.label);

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

      {currentVideos?.length > 0 ? (
        <ContentDetailSlider2 videos={currentVideos} />
      ) : (
        <p className="text-center text-gray-500">No videos available for this category.</p>
      )}
    </div>
  );
};

export default ContentSlider2;