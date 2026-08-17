import Link from 'next/link';
import Cabecalho from '../cabecalho';
import Rodape from '@/app/rodape';

export default function GolfinhoPage() {
    return <div>
        <Cabecalho />
        golfinho golfão roubou meu coração <br />
    <Link href="/golfinho/do-bem">Ir para golfinho do bem</Link><br />
    <Link href="/golfinho/do-mal">Ir para golfinho do mal</Link>
    <Rodape />
    </div>
}