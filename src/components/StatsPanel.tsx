import styled from '@emotion/styled';
import { FC } from 'react';
import { processData } from '../scripts/processData';
import { getMetadata } from '../util/videoUtil';

interface Props {
  data: FetchedYouTubeVideo[];
}

const Wrapper = styled.div`
  p {
    margin-bottom: 1em;
    font-size: 1.125em;
  }
`;

const StatsPanel: FC<Props> = ({ data }) => {
  const videos = getMetadata(data);
  const stats = processData(videos);

  const longestVideoDuration = Math.round(stats.longestVideo.duration / 60 / 60).toLocaleString();

  return (
    <Wrapper>
      <p>
        You watched {(stats.countedVideos + stats.missedVideos).toLocaleString()} YouTube videos total since you enabled
        watching history.
      </p>
      <p>
        Of those, {stats.countedVideos.toLocaleString()} videos are still available on YouTube.
        <br />
        We couldn't get metrics for {stats.missedVideos.toLocaleString()} videos.
      </p>
      <p>
        The longest video you watched: "{stats.longestVideo.title}" is {longestVideoDuration} hours long.
        <br />
        Note that live streams count here and they are indistinguishable from regular videos with the YouTube API.
        Because of that, we're calculating total watch time with a maximum video length of 2 hours per video.
      </p>
      <p>Your total watch time is {Math.round(stats.totalWatchTime.asMinutes()).toLocaleString()} minutes.</p>
    </Wrapper>
  );
};

export default StatsPanel;
