import React, { useState } from 'react';
import Menu from '../src/components/commons/Menu';
import Footer from '../src/components/commons/Footer';
import Text from '../src/components/foundation/Text';
import { Button } from '../src/components/commons/Button';
import { Grid } from '../src/components/foundation/layout/Grid';
import { Box } from '../src/components/foundation/layout/Box';
import Modal from '../src/components/commons/Modal';

export default function Home() {
  const [isModalOpen, setModal] = useState(false);

  return (
    <Box
      flex="1"
      display="flex" // Deixa o footer na parte de baixo da tela
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="space-between"
      backgroundImage="url(/images/bubbles.svg)"
      backgroundRepeat="no-repeat"
      backgroundPosition="bottom right"
    >
      <Modal isOpen={isModalOpen} onClose={() => setModal(false)}>
        {(propsDoModal) => (
          <Box
            backgroundColor="white"
            // eslint-disable-next-line react/jsx-props-no-spreading
            {... propsDoModal}
          >
            <div>
              Um modal aleatório
            </div>
          </Box>
        )}
      </Modal>
      <Menu />

      <Grid.Container>
        <Grid.Row>
          <Grid.Col
            offset={{ // quantas colunas são "puladas" para essa daqui começar
              xs: 0,
              md: 1,
            }}
            value={{ // quantas colunas imaginárias essa coluna ocupa
              xs: 12,
              md: 5,
            }}
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            justifyContent="center"
          >

            <Text
              variant="title"
              tag="h1"
              color="tertiary.main"
              textAlign={{
                xs: 'center',
                md: 'left',
              }}
            >
              Compartilhe momentos e conecte-se com amigos
            </Text>
            <Text
              variant="paragraph1"
              tag="p"
              color="tertiary.light"
              textAlign={{
                xs: 'center',
                md: 'left',
              }}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Saepe facilis dolorum debitis dolor.
              Quas vitae dolor fugiat quae voluptatum molestiae nam. At.
            </Text>
            <Button
              variant="primary.main"
              margin={{
                xs: 'auto',
                md: 'initial',
              }}
              display="block"
              onClick={() => setModal(!isModalOpen)}
            >
              Cadastrar
            </Button>
          </Grid.Col>
          <Grid.Col
            value={{
              xs: 12,
              md: 6,
            }}
          >
            <img
              alt="Instalura com perfil do Nicolas Cage"
              style={{ display: 'block', margin: 'auto' }}
              src="https://bootcamp-alura-01-git-modulo01.omariosouto.vercel.app/images/phones.png"
            />
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
      <Footer />
    </Box>
  );
}
