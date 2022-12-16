interface YouTubeVideo {
  title: string;
  time: string;
  titleUrl: string;
}

interface FetchedYouTubeVideo {
  fetchedVideo: any;
}

interface VideoMetadata {
  contentDetails?: {
    duration?: string;
  };
}
