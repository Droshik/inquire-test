import styled from 'styled-components';

export const AddCommentLabel = styled.label`
  line-height: 1.5;
  font-size: 18px;
  font-weight: 500;
  color: #015C65;
`;

export const AddCommentTextarea = styled.textarea`
  display: block;
  margin: 8px 0;
  width: 100%;
  height: 100px;
  border-radius: 14px;
  border: 2px solid #5EC4CD;
  padding: 10px;
  color: #015C65;
    :active,
    :focus {
      border-radius: 14px;
      border: 2px solid #028E9B;
      outline: none;
    }
`;

export const AddCommentButton = styled.button`
  padding: 12px 24px;
  background: #FFB573;
  border: 2px solid #BF7330;
  border-radius: 14px;
  cursor: pointer;
  :hover {
    background: #d08140;
  }
`;
