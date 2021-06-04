import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { ArrowForwardOutline as ArrowIcon } from '@styled-icons/evaicons-outline/ArrowForwardOutline';
import Text from '../../foundation/Text';
import TextField from '../../forms/TextField';
import { Button } from '../../commons/Button';
import { Grid } from '../../foundation/layout/Grid';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';
import { useForm } from '../../../infra/hooks/forms/useForm';
import { postService } from '../../../services/post/postService';
import { UserContext } from '../../wrappers/WebsitePage/context/user';

const FILTERS = [
  'nenhum',
  '1977',
  'aden',
  'amaro',
  'ashby',
  'brannan',
  'brooklyn',
  'charmes',
  'clarendon',
  'crema',
  'dogpatch',
  'earlybird',
  'gingham',
  'ginza',
  'hefe',
  'helena',
  'hudson',
  'inkwell',
  'kelvin',
  'juno',
  'lark',
  'lofi',
  'ludwig',
  'maven',
  'mayfair',
  'moon',
  'nashville',
  'perpetua',
  'poprocket',
  'reyes',
  'rise',
  'sierra',
  'skyline',
  'slumber',
  'stinson',
  'sutro',
  'toaster',
  'valencia',
  'vesper',
  'walden',
  'willow',
  'xpro-ii',
];

const FormImagemWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background.light.color};
  width: 100%;
  max-width: 375px;
  max-height: 702px;
  position: relative;

  ${breakpointsMedia({
    md: css`
      border-radius: 8px;
    `,
  })}
`;

const ImagePlaceholderWrapper = styled.div`
  margin-top: 48px;
  height: 100vw;
  max-height: 375px;
  max-width: 375px;

  figure {
    margin: 0px;
    height: 100%;
    width: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

function ImagePlaceholder({ url, filter }) {
  const photoUrl = url || 'https://via.placeholder.com/200';

  return (
    <ImagePlaceholderWrapper>
      <figure className={`filter-${filter}`}>
        <img src={photoUrl} alt="" />
      </figure>
    </ImagePlaceholderWrapper>
  );
}

ImagePlaceholder.propTypes = {
  url: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired,
};

function InputSection({ form }) {
  return (
    <>
      <TextField
        name="photoUrl"
        placeholder="URL da Imagem"
        value={form.values.photoUrl}
        onChange={form.handleChange}
        isTouched={form.touched.usuario}
        error={form.errors.usuario}
        onBlur={form.handleBlur}
      >
        <Button
          variant="secondary.main"
          onClick={() => {}}
          style={{
            position: 'absolute',
            right: '0px',
            height: '100%',
            width: '48px',
            padding: '12px 12px',
          }}
        >
          <ArrowIcon size={24} fill="white" />
        </Button>
      </TextField>
      <Text
        variant="paragraph2"
        color="tertiary.light"
        textAlign="center"
        marginTop="-9px"
      >
        Formatos suportados: jpg, png, svg e xpto.
      </Text>
    </>
  );
}

InputSection.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  form: PropTypes.object.isRequired,
};

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

function FilterPlaceholder({ filter, photoUrl, setSelectedFilter }) {
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

function FilterSection({ photoUrl, setSelectedFilter }) {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'nowrap',
        justifyContent: 'flex-start',
        columnGap: '16px',
        overflowX: 'auto',
        overflowY: 'hidden',
      }}
    >
      {FILTERS.map((filterOption) => (
        <FilterPlaceholder
          filter={filterOption}
          photoUrl={photoUrl}
          setSelectedFilter={setSelectedFilter}
          key={filterOption}
        />
      ))}
    </div>
    // <FilterPlaceholder filter="" />
  );
}

FilterSection.propTypes = {
  photoUrl: PropTypes.string.isRequired,
  setSelectedFilter: PropTypes.func.isRequired,
};

function ButtonForm({ isSecondPage, children, onClick }) {
  return (
    <Button
      variant="primary.main"
      margin={isSecondPage ? '24px 0px 32px 0px' : '38px 0px 32px 0px'}
      onClick={onClick}
      style={{ width: '100%' }}
    >
      <Text
        variant="paragraph2bold"
        style={{ color: 'white' }}
      >
        {/* {(isSecondPage && 'Postar') || 'Avançar'} */}
        {children}
      </Text>
    </Button>
  );
}

ButtonForm.propTypes = {
  isSecondPage: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

// eslint-disable-next-line react/prop-types
export default function FormImagem({ ModalCloseButton, propsDoModal, onSubmit }) {
  const [secondPage, setSecondPage] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('nenhum');
  const { posts, setPosts } = React.useContext(UserContext);

  const postSchema = {};

  const form = useForm({
    initialValues: {
      photoUrl: '',
      description: 'ma oe',
      filter: selectedFilter,
    },
    onSubmit: (values) => {
      form.setIsFormDisabled(true);
      postService.post({
        photoUrl: values.photoUrl,
        description: values.description,
        filter: selectedFilter,
      })
        .then((post) => {
          setPosts([post, ...posts]);
          // Mensagem de sucesso
        })
        .catch(() => {
          // Faça alguma coisa com o erro
          form.setIsFormDisabled(false);
        });
    },
    async validateSchema(values) {
      return postSchema.validate(values, {
        abortEarly: false,
      });
    },
  });

  function togglePage() {
    setSecondPage(!secondPage);
  }

  return (
    <FormImagemWrapper
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...propsDoModal}
    >
      <ModalCloseButton />
      <ImagePlaceholder url={form.values.photoUrl} filter={selectedFilter} />
      <Grid.Container
        marginTop={secondPage ? '24px' : '48px'}
      >
        <Grid.Row>
          <Grid.Col
            display="flex"
            flexDirection="column"
          >
            {(secondPage
              && (
                <form
                  id="formImagem"
                  onSubmit={onSubmit || form.handleSubmit}
                >
                  <FilterSection
                    form={form}
                    photoUrl={form.values.photoUrl}
                    setSelectedFilter={setSelectedFilter}
                  />
                  <ButtonForm type="submit" isSecondPage={secondPage}>
                    Postar
                  </ButtonForm>
                </form>
              )) || (
                <>
                  <InputSection form={form} />
                  <ButtonForm
                    type="button"
                    onClick={() => togglePage()}
                    isSecondPage={secondPage}
                  >
                    Avançar
                  </ButtonForm>
                </>
            )}
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>

    </FormImagemWrapper>
  );
}

FormImagem.defaultProps = {
  onSubmit: null,
};

FormImagem.propTypes = {
  onSubmit: PropTypes.func,
};
