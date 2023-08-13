import styled from 'styled-components';

export const ContactItemContainer = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #f5f5f5;
  border-radius: 4px;
`;

export const ContactInfo = styled.div`
  flex: 1;
`;

export const ContactName = styled.h3`
  margin: 0;
`;

export const ContactNumber = styled.p`
  margin: 0;
  color: #888;
`;

export const DeleteButton = styled.button`
  background-color: blue;
  color: #fff;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
`;
