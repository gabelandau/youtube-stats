import { useEffect, useState } from 'react';
import styled from '@emotion/styled';

import GlobalHeader from '../components/GlobalHeader';
import FileUpload from '../components/FileUpload';
import StatsPanel from '../components/StatsPanel';
import Button from '../components/Button';

import { loadData } from '../scripts/loadData';
import { fetchData } from '../scripts/fetchData';
import { downloadData } from '../scripts/downloadData';

const UploadButtons = styled.div`
  display: flex;
  gap: 1em;
  justify-content: center;
`;

const DownloadButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5em;
`;

const Home = () => {
  const [watchHistory, setWatchHistory] = useState<YouTubeVideo[] | null>(null);
  const [fetchedHistory, setFetchedHistory] = useState<FetchedYouTubeVideo[] | null>(null);
  const [savedHistory, setSavedHistory] = useState<FetchedYouTubeVideo[] | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    loadData(event, setWatchHistory);
  };

  const handleSavedFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    loadData(event, setSavedHistory);
  };

  useEffect(() => {
    const asyncFetchData = async () => {
      if (watchHistory !== null) {
        setFetchedHistory(await fetchData(watchHistory));
      }
    };

    asyncFetchData();
  }, [watchHistory]);

  const Content = () => {
    if (savedHistory !== null) {
      return <StatsPanel data={savedHistory} />;
    } else if (fetchedHistory !== null) {
      return (
        <DownloadButton>
          <h5>Download your fetched data.</h5>
          <Button onClick={() => downloadData(fetchedHistory)}>Download</Button>
        </DownloadButton>
      );
    } else {
      return (
        <UploadButtons>
          <FileUpload onChange={handleFileUpload} text="Upload YouTube Watch History" />
          <FileUpload onChange={handleSavedFileUpload} text="Upload Saved History" />
        </UploadButtons>
      );
    }
  };

  return (
    <div>
      <GlobalHeader />
      <div css={{ margin: '1em' }}>
        <Content />
      </div>
    </div>
  );
};

export default Home;
