import styled from 'styled-components';

const QuizInput = styled.input`
  display: block;
  width: 100%;
  font-weight:400;
  font-size: 14px;
  line-height: 24px;
  padding: 7px 15px;
  border-radius: 3.5px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.mainBg};
  color: ${({ theme }) => theme.colors.contrastText};
  outline: 0;

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.secondary};
  }
  `;

export default QuizInput;
