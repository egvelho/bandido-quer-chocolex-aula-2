import Link from 'next/link';
import Cabecalho from './cabecalho';
import Rodape from '@/app/rodape';
import Title from '@/components/title';

export default function HomePage() {
  return <div>
    <Cabecalho />
    <Title cor="red">Esse é o título da home</Title>
    ballerina capuccina <br />
    <a href="/golfinho">ir para golfinho (versão ruim)</a> <br />
    <Link href="/golfinho">ir para golfinho (versão boa)</Link> <br />
    <Link href="/cegonha">ir para cegonha</Link>
    <Rodape />
  </div>
}