import Menu from '../src/components/commons/Menu';
import Footer from '../src/components/commons/Footer';

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
            <Footer />
        </div>
    )
}
