import styled from '@emotion/styled';

const Button = styled.button`
  background-color: ${(props) => props.theme.colors.gray12};
  color: ${(props) => props.theme.colors.gray1};
  border: none;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: 600;
  padding: 0.25em 1em;
`;

export default Button;
