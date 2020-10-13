import Head from 'next/head'
import {Searcher} from '../Searcher';
import {Footer} from '../../molecules/Footer';
import {CardList} from '../CardList';
import {useState} from 'react';
import {getPokemons} from '../../../services/pokemon';
import {StyledWrapper, StyledMain} from './style';

const Home = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleOnSubmit = async (value) => {
    setLoading(true);
    try {
      const {data: {pokemons}} = await getPokemons(value);
      setSearchResults(pokemons);
    } finally {
      setLoading(false);
    }
  };

  return ( 
    <StyledWrapper>
      <Head>
        <title>Poke Search</title>
      </Head>
      <StyledMain>
        <Searcher handleOnSubmit={handleOnSubmit} loading={loading} />
        <CardList items={searchResults} />
      </StyledMain>
      <Footer />
    </StyledWrapper>
  )
};

export default Home;
