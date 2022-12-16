import { chunkData } from '../util/dataUtil';

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

const fetchData = async (data: YouTubeVideo[]) => {
  const slicedData = data.slice(0, 125);

  const videoList = data.map((video) => {
    return {
      fetchId: video.titleUrl ? video.titleUrl.split('\u003d').pop() : 'deleted',
      ...video,
    };
  });

  const videoMap = Object.fromEntries(
    videoList
      .filter((video) => video.fetchId !== 'deleted')
      .map((video) => {
        return [video.fetchId, video];
      })
  );

  const videosToFetch = chunkData(
    videoList.filter((video) => video.fetchId !== 'deleted').map((video) => video.fetchId),
    50
  );

  const fetchPromises = videosToFetch.map(async (videoChunk) => {
    const idString = videoChunk.join(',');

    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?id=${idString}&part=contentDetails,snippet&key=${API_KEY}`
    );
    const responseJson = await response.json();
    return responseJson.items;
  });

  const fetchedData = await (await Promise.all(fetchPromises)).flatMap((video) => video);

  fetchedData.forEach((video) => {
    if (videoMap[video.id]) {
      videoMap[video.id].fetchedVideo = video;
    }
  });

  return videoMap;
};

export { fetchData };
