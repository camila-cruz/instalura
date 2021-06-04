import React from 'react';
import PropTypes from 'prop-types';
import { ArrowForwardOutline as ArrowIcon } from '@styled-icons/evaicons-outline/ArrowForwardOutline';
import TextField from '../../../forms/TextField';
import { Button } from '../../../commons/Button';
import Text from '../../../foundation/Text';

export function InputSection({ form }) {
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
