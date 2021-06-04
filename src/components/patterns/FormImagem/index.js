import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Grid } from '../../foundation/layout/Grid';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';
import { useForm } from '../../../infra/hooks/forms/useForm';
import { postService } from '../../../services/post/postService';
import { UserContext } from '../../wrappers/WebsitePage/context/user';
import { FilterSection } from './FilterSection';
import { ImagePlaceholder } from './ImagePlaceholder';
import { ButtonForm } from './ButtonForm';
import { InputSection } from './InputSection';

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
