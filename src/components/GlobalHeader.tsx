import styled from '@emotion/styled';
import Typography from './Typography';

const Wrapper = styled.div`
  background-color: #222;
  padding: 1em;
  display: flex;
  align-items: center;
  height: 80px;
`

const GlobalHeader = () => {
  return (
    <Wrapper>
      <Typography variant='h4'>YouTube Stats</Typography>
    </Wrapper>
  );
};

export default GlobalHeader;
