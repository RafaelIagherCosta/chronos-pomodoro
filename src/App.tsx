import { TimerIcon } from 'lucide-react';

import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';

export function App() {
  return (
    <>
      {/* React Fragment <> */}
      <Heading>
        Ola mundo 1
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
        assumenda minus, pariatur deserunt eveniet nam sit quas, dolore in quos
        sunt quasi sapiente repellat consequatur. Laudantium sed adipisci dolor
        ipsum.
      </p>
    </>
  );
}
