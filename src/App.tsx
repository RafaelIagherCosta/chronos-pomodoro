import { Container } from './components/Container';
import { Heading } from './components/Heading';
import { Logo } from './components/Logo';

import './styles/theme.css';
import './styles/global.css';

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Heading>Logo</Heading>
      </Container>
      <Container>
        <Heading>Logo</Heading>
      </Container>
    </>
  );
}
