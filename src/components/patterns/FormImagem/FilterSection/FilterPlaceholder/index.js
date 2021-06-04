import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '../../../../foundation/Text';

const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 12px;
  cursor: pointer;

  figure {
    margin: 0;
    height: 88px;
    width: 88px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export function FilterPlaceholder({ filter, photoUrl, setSelectedFilter }) {
  return (
    <FilterWrapper
      onClick={() => setSelectedFilter(filter)}
    >
      <figure className={`filter-${filter}`}>
        {/* <img src="https://via.placeholder.com/88" alt="" /> */}
        <img src={photoUrl} alt="" />
      </figure>
      <Text
        variant="smallestException"
        color="tertiary.light"
      >
        {filter}
      </Text>
    </FilterWrapper>
  );
}

FilterPlaceholder.propTypes = {
  filter: PropTypes.string.isRequired,
  photoUrl: PropTypes.string.isRequired,
  setSelectedFilter: PropTypes.func.isRequired,
};
