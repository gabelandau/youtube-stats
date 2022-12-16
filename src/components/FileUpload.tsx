import { useRef, ChangeEventHandler, FC } from 'react';

import Button from './Button';

interface Props {
  onChange: ChangeEventHandler<HTMLInputElement>;
  text: string;
}

const FileUpload: FC<Props> = ({ onChange, text }) => {
  const hiddenFileInput = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (hiddenFileInput.current) {
      hiddenFileInput.current.click();
    }
  };

  return (
    <div>
      <Button onClick={handleClick}>{text}</Button>
      <input ref={hiddenFileInput} accept="application/json" type="file" onChange={onChange} hidden />
    </div>
  );
};

export default FileUpload;
