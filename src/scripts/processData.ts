import dayjs from 'dayjs';

import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

const MAX_VIDEO_LENGTH = import.meta.env.VITE_MAX_VIDEO_LENGTH;

const processData = (videos: VideoMetadata[]) => {
  const metadata = {
    countedVideos: 0,
    missedVideos: 0,
    totalWatchTime: dayjs.duration(0),
  };

  videos.forEach((video) => {
    if (video?.contentDetails?.duration !== undefined) {
      let length = dayjs.duration(video.contentDetails.duration).asSeconds();
      if (length > MAX_VIDEO_LENGTH) length = MAX_VIDEO_LENGTH;
      metadata.totalWatchTime = metadata.totalWatchTime.add({ seconds: length });
      metadata.countedVideos++;
    } else {
      metadata.missedVideos++;
    }
  });

  return metadata;
};

export { processData };
