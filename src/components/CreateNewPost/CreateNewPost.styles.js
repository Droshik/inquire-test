import styled from 'styled-components';

export const CreateNewPostForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

export const CreateNewInput = styled.input`
  margin: 8px 0;
  width: 100%;
  height: 40px;
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

export const CreateNewTextarea = styled.textarea`
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

export const CreateNewPostButton = styled.button`
  padding: 12px 24px;
  background: #FFB573;
  border: 2px solid #BF7330;
  border-radius: 14px;
  cursor: pointer;
  :hover {
    background: #d08140;
  }
`;
