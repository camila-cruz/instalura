import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Text from '../../foundation/Text';
import TextField from '../../forms/TextField';
import { Button } from '../../commons/Button';
import { Grid } from '../../foundation/layout/Grid';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';
import { useForm } from '../../../infra/hooks/forms/useForm';
import { postService } from '../../../services/post/postService';

const FILTERS = [
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

const ImagePlaceholder = styled.div`
  margin-top: 48px;
  height: 100vw;
  max-height: 375px;
  max-width: 375px;
  border: 1px solid black;
`;

function InputSection({ form, onSubmit }) {
  return (
    <form id="formImagem" onSubmit={onSubmit || form.handleSubmit}>
      <TextField
        name="imageUrl"
        placeholder="URL da Imagem"
        value={form.values.photoUrl}
        onChange={form.handleChange}
        isTouched={form.touched.usuario}
        error={form.errors.usuario}
        onBlur={form.handleBlur}
      />
      <Text
        variant="paragraph2"
        color="tertiary.light"
        textAlign="center"
        marginTop="-9px"
      >
        Formatos suportados: jpg, png, svg e xpto.
      </Text>
    </form>
  );
}

InputSection.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  form: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

function FilterPlaceholder({ filter }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        rowGap: '12px',
      }}
    >
      <figure className={`filter-${filter}`} style={{ margin: 0 }}>
        <img src="https://via.placeholder.com/88" alt="" />
      </figure>
      <Text
        variant="smallestException"
        color="tertiary.light"
      >
        {filter}
      </Text>
    </div>
  );
}

FilterPlaceholder.propTypes = {
  filter: PropTypes.string.isRequired,
};

function FilterSection() {
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
      {FILTERS.map((filter) => <FilterPlaceholder filter={filter} />)}
    </div>
    // <FilterPlaceholder filter="" />
  );
}

// eslint-disable-next-line react/prop-types
export default function FormImagem({ ModalCloseButton, propsDoModal }) {
  const [secondPage, setSecondPage] = useState(false);

  const postSchema = {};

  const form = useForm({
    initialValues: {
      photoUrl: '',
      description: 'ma oe',
      filter: '',
    },
    onSubmit: (values) => {
      form.setIsFormDisabled(true);
      postService.post({
        photoUrl: values.photoUrl,
        description: values.description,
        filter: values.filter,
      })
        .then(() => {
          // Mensagem de sucesso
          console.log('sucesso!');
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
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FormImagemWrapper {...propsDoModal}>
      <ModalCloseButton />
      <ImagePlaceholder />
      <Grid.Container
        marginTop={secondPage ? '24px' : '48px'}
      >
        <Grid.Row>
          <Grid.Col
            display="flex"
            flexDirection="column"
          >
            {(secondPage
              && <FilterSection form={form} />)
              || <InputSection form={form} onSubmit={form.handleSubmit} />}

            <Button
              variant="primary.main"
              margin={secondPage ? '24px 0px 32px 0px' : '38px 0px 32px 0px'}
              onClick={() => togglePage()}
            >
              <Text
                variant="paragraph2bold"
                style={{ color: 'white' }}
              >
                {(secondPage && 'Postar') || 'Avançar'}
              </Text>
            </Button>
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
