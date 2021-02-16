import Menu from '../src/components/commons/Menu';
import Footer from '../src/components/commons/Footer';
import Text from '../src/components/foundation/Text';
import { Button } from '../src/components/commons/Button';

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

            <div>
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
            </div>
            <Footer />
        </div>
    )
}
