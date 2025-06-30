import { Container } from './components/Container';

import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { Footer } from './components/Footer';
import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';
import { Cycles } from './components/Cycles';
import { DefaultButton } from './components/DefaultButton';
import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { useState } from 'react';

export function App() {
  //Quero que todos os componentes que usam "numero"
  // saimbam das mudancas em seu valor.

  //Sempre que eu usar useState, nao vou usar atribuicao diretamente regra!
  //const [numero, setNumero] = useState((0) => {
  // console.log('Lazy initialization)
  //return 0
  //});
  const [numero, setNumero] = useState(0);

  function handleClick() {
    setNumero(prevState => prevState + 1);
    setNumero(1);
  }

  return (
    <>
      <Heading>Add commentMore actions Número: {numero}</Heading>
      <button onClick={handleClick}>Aumenta</button>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
      <Container>
        <CountDown />
      </Container>
      <Container>
        <form className='form' action=''>
          <div className='formRow'>
            <DefaultInput
              labelText={numero.toString()}
              id='meuInput'
              type='text'
              placeholder='Ex: estudar para a prova'
            />
          </div>

          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className='formRow'>
            <Cycles />
          </div>

          <div className='formRow'>
            <DefaultButton icon={<PlayCircleIcon />} />
            <DefaultButton icon={<StopCircleIcon />} />
          </div>
        </form>
      </Container>
      <Container>
        <Footer />
      </Container>
    </>
  );
}
