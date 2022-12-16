import { FC } from 'react';
import { processData } from '../scripts/processData';
import { getMetadata } from '../util/videoUtil';

interface Props {
  data: FetchedYouTubeVideo[];
}

const StatsPanel: FC<Props> = ({ data }) => {
  const videos = getMetadata(data);
  console.log(processData(videos));

  return (
    <div>
      <div>Hello!</div>
    </div>
  );
};

export default StatsPanel;
