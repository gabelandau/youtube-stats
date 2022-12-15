import { FC, ReactNode } from 'react';

import styled from '@emotion/styled';

interface Props {
  children: ReactNode;
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
}

const H1 = styled.h1`
  font-size: 4.209rem;
`;

const H2 = styled.h2`
  font-size: 3.157rem;
`;

const H3 = styled.h3`
  font-size: 2.369rem;
`;

const H4 = styled.h4`
  font-size: 1.777rem;
`;

const H5 = styled.h5`
  font-size: 1.333rem;
`;

const Typography: FC<Props> = ({ variant, children }) => {
  if (variant === 'h1') return <H1>{children}</H1>;
  if (variant === 'h2') return <H2>{children}</H2>;
  if (variant === 'h3') return <H3>{children}</H3>;
  if (variant === 'h4') return <H4>{children}</H4>;
  if (variant === 'h5') return <H5>{children}</H5>;

  return <p>{children}</p>;
};

export default Typography;
