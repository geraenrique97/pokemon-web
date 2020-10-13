import {Button} from '../../atoms/Button';
import {Input} from '../../atoms/Input';
import {StyledContainer} from './style';
import {useState} from 'react';
import {CircularProgress} from '@material-ui/core';
import PropTypes from 'prop-types';

export const Searcher = ({
  handleOnSubmit,
  loading,
}) => {
  const [searchKey, setSearchKey] = useState();

  const handleOnClick = () => {
    handleOnSubmit(searchKey);
  };
  const handleOnChange = (e) => {
    setSearchKey(e.target.value);
  };
  return (
    <StyledContainer>
      <Input label="Pokemon" value={searchKey} onChange={handleOnChange}></Input>
      <Button variant="contained" color="primary" onClick={handleOnClick} size="large">
        {
          loading
            ? <CircularProgress size={25} color="secondary" />
            : 'Search'
        }
      </Button>
    </StyledContainer>
)};

Searcher.propTypes = {
  handleOnSubmit: PropTypes.func,
  loading: PropTypes.bool,
};
