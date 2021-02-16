import Menu from '../src/components/commons/Menu';
import Footer from '../src/components/commons/Footer';
import Text from '../src/components/foundation/Text';
import { Button } from '../src/components/commons/Button';
import { Grid } from '../src/components/foundation/layout/Grid';

export default function Home() {
    return (
        <div style={{
            display: 'flex',    // Deixa o footer na parte de baixo da tela
            flex: '1',
            flexWrap: 'wrap',
            flexDirection: 'column',
            justifyContent: 'space-between',
        }}>
            <Menu />
            
            <Grid.Container>
                <Grid.Row>
                    <Grid.Col
                        offset={{   // quantas colunas são "puladas" para essa daqui começar
                            xs: 0,
                            md: 1,
                        }}
                        value={{    // quantas colunas imaginárias essa coluna ocupa
                            xs: 12,
                            md: 5,
                        }}
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
                            style={{
                                textAlign: 'center'
                            }}
                        >
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                            Vero voluptates veniam asperiores inventore architecto, dicta est temporibus ipsam, 
                            repellat provident libero perspiciatis corrupti in illo!
                        </Text>
                        <Button 
                            variant="primary.main"
                            margin={{
                                xs: 'auto',
                                md: 'initial'
                            }}
                            display="block"
                        >
                            Cadastrar
                        </Button>
                    </Grid.Col>
                    <Grid.Col
                        value={{
                            xs: 12,
                            md: 6
                        }}
                    >
                        <img
                            style={{ display: 'block', margin: 'auto' }}
                            src="https://bootcamp-alura-01-git-modulo01.omariosouto.vercel.app/images/phones.png"
                        />
                    </Grid.Col>
                </Grid.Row>
            </Grid.Container>
            <Footer />
        </div>
    )
}
