import styled from 'styled-components';

const QuizButton = styled.button`
  display: block;
  width: 100%;
  font-weight:700;
  font-size: 14px;
  line-height: 16px;
  text-transform: uppercase;
  padding: 10px 16px;
  margin-top: 25px;
  border-radius: 4px;
  border:  none;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.contrastText};
`;

export default QuizButton;
