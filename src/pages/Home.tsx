import { useEffect, useState } from 'react';

import GlobalHeader from '../components/GlobalHeader';
import FileUpload from '../components/FileUpload';

import { loadData } from '../scripts/loadData';
import { handleData } from '../scripts/handleData';

const Home = () => {
  const [watchHistory, setWatchHistory] = useState<YouTubeVideo[]>([]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    loadData(event, setWatchHistory);
  };

  useEffect(() => {
    if (watchHistory.length > 0) {
      handleData(watchHistory);
    }
  }, [watchHistory]);

  return (
    <div>
      <GlobalHeader />
      <div css={{ margin: '1em' }}>
        <FileUpload onChange={handleFileUpload} />
      </div>
    </div>
  );
};

export default Home;
