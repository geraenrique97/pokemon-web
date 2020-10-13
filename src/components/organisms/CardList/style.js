import styled from 'styled-components';

export const StyledGrid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  margin-top: 3rem;

  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
  }
`;
