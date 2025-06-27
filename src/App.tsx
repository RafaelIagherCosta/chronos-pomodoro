import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';

export function App() {
  console.log('Oi');

  return (
    <>
      {/* React Fragment <> */}
      <Heading />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
        assumenda minus, pariatur deserunt eveniet nam sit quas, dolore in quos
        sunt quasi sapiente repellat consequatur. Laudantium sed adipisci dolor
        ipsum.
      </p>
    </>
  );
}
