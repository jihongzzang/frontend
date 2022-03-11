import React from 'react';
import styled from 'styled-components';
import NotingSelect from '../../components/NotingSelect';
import CardList from './CardList';

const Card = ({ selected }) => {
  return (
    <CardWrapper>
      {selected === '' && <NotingSelect />}
      {selected === 'campaign' && <CardList selected={selected} />}
      {selected === 'influencer' && <CardList selected={selected} />}
    </CardWrapper>
  );
};

export default Card;

const CardWrapper = styled.div`
  margin: 0 3%;
  margin-top: 10px;
`;
