import styled from 'styled-components';

export const StyledCard = styled.div`
  margin: 1rem;
  flex-basis: 45%;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  width: 80%;
  display: flex;

  &:hover,
  &:focus,
  &:active {
    color: #0070f3;
    border-color: #0070f3;
  }

  p {
    margin: 0;
    margin-left: 10px;
    font-size: 1.25rem;
    line-height: 1.5;
  }
`;

export const StyledEmptyImg = styled.div`
  background-color: white;
  width: 96px;
  height: 96px;
`;
