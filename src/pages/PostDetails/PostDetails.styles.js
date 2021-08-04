import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BackToListLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const PostDetailsControls = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PostEditButton = styled.button`
  text-decoration: none;
  border: 2px solid #2f6065;
  border-radius: 14px;
  background: #77bcc3;
  padding: 12px 24px;
  color: #2f6065;
  margin-left: auto;
  margin-right: 12px;
  cursor: pointer;
  :hover {
    background: #287e86;
  }
`;

export const PostDeleteButton = styled.button`
  text-decoration: none;
  border: 2px solid darkred;
  border-radius: 14px;
  background: #ea6161;
  padding: 12px 24px;
  color: #2f6065;
  cursor: pointer;

  :hover {
    background: #b32b2b;
  }
`;
