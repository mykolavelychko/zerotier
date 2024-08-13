import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Item = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Label = styled.span`
  display: inline-block;
  width: 120px;
  font-weight: bold;
  text-align: left;
`;