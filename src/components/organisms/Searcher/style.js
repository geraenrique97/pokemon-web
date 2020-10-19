import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 800px;
  width: 60%;
  .MuiFormControl-root.MuiTextField-root {
    width: 60%;
  }
  .MuiButtonBase-root.MuiButton-root.MuiButton-contained{
    margin-left: 30px;
    width: 20%;
  }
`;
