import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.gray2};
  padding: 1em;
  display: flex;
  align-items: center;
  height: 80px;
`;

// TODO - Implement navigation items
const NavWrapper = styled.div`
  padding-left: 2em;
  display: flex;
  gap: 1.5em;
`;

const NavItem = styled(Link)`
  text-decoration: none;
  font-weight: 500;
  padding: 0.5em 0.625em;
  border-radius: 5px;
  color: ${(props) => props.theme.colors.gray12};
  background-color: ${(props) => props.theme.colors.gray1};
`;

const GlobalHeader = () => {
  return (
    <Wrapper>
      <h4 css={{ fontWeight: 800 }}>YouTube Stats</h4>
    </Wrapper>
  );
};

export default GlobalHeader;
