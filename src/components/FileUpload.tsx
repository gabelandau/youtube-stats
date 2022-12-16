import { useRef, ChangeEventHandler, FC } from 'react';

import styled from '@emotion/styled';

interface Props {
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const Button = styled.button`
  background-color: ${(props) => props.theme.colors.gray12};
  color: ${(props) => props.theme.colors.gray1};
  border: none;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: 600;
  padding: 0.25em 1em;
`;

const FileUpload: FC<Props> = ({ onChange }) => {
  const hiddenFileInput = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (hiddenFileInput.current) {
      hiddenFileInput.current.click();
    }
  };

  return (
    <div>
      <Button onClick={handleClick}>Upload</Button>
      <input
        ref={hiddenFileInput}
        accept="application/json"
        type="file"
        onChange={onChange}
        hidden
      />
    </div>
  );
};

export default FileUpload;
