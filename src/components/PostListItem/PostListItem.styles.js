import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PostListWrap = styled.div`
  border: 2px solid #5ec4cd;
  background: #e9f3f5;
  border-radius: 14px;
  padding: 20px;
  margin-bottom: 12px;
  position: relative;
  :last-of-type {
    margin-bottom: 0;
  }
`;

export const PostListTitle = styled.h3`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.4;
  color: #015c65;
  padding: 0 12px 0 0;
  margin: 0;
`;

export const PostListTitleWrap = styled.div`
  padding: 12px 0;
`;

export const PostListBody = styled.p`
  font-size: 18px;
  line-height: 1.4;
  padding-bottom: 20px;
`;

export const PostListDeleteButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 0 4px;
  border: 2px solid #bf7330;
  border-radius: 4px;
  background: #ffb573;
  cursor: pointer;
`;

export const PostListDetailsButton = styled(Link)`
  text-decoration: none;
  border: 2px solid #2f6065;
  border-radius: 14px;
  background: #77bcc3;
  padding: 12px 24px;
  color: #2f6065;
  cursor: pointer;
  :hover {
    background: #287e86;
  }
`;
