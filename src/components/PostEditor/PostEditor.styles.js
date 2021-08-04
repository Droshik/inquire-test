import styled from 'styled-components';

export const PostEditorForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const PostEditorInput = styled.input`
  margin: 8px 0;
  width: 100%;
  border-radius: 14px;
  border: 2px solid #5ec4cd;
  padding: 10px;
  color: #015c65;
  :active,
  :focus {
    border-radius: 14px;
    border: 2px solid #028e9b;
    outline: none;
  }
`;

export const PostEditorTextarea = styled.textarea`
  margin: 8px 0;
  width: 100%;
  border-radius: 14px;
  border: 2px solid #5ec4cd;
  padding: 10px;
  color: #015c65;
  :active,
  :focus {
    border-radius: 14px;
    border: 2px solid #028e9b;
    outline: none;
  }
`;

export const PostEditorButton = styled.button`
  padding: 12px 24px;
  background: #ffb573;
  border: 2px solid #bf7330;
  border-radius: 14px;
  cursor: pointer;

  :hover {
    background: #d08140;
  }
`;
