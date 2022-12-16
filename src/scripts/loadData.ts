import { Dispatch } from 'react';

const loadData = (
  event: React.ChangeEvent<HTMLInputElement>,
  callback: Dispatch<YouTubeVideo[]>
) => {
  const fileReader = new FileReader();

  if (event.target.files) {
    fileReader.readAsText(event.target.files[0], 'UTF-8');
    fileReader.onload = (onLoadEvent) => {
      const rawData = onLoadEvent?.target?.result;

      if (rawData && typeof rawData === 'string') {
        callback(JSON.parse(rawData));
      }
    };
  }
};

export { loadData };
