import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import { useTaskContext } from '../../contexts/TaskContext';

export function MainForm() {
  const { setState } = useTaskContext();
  function handleClick() {
    setState(prevState => {
      return {
        ...prevState,
        formmatedSecondsRemaining: '21:00',
      };
    });
  }

  return (
    <form className='form' action=''>
      <div>
        <button onClick={handleClick}></button>
      </div>
      <div className='formRow'>
        <DefaultInput
          labelText='task'
          id='meuInput'
          type='text'
          placeholder='Ex: estudar para a prova'
        />
      </div>

      <div className='formRow'>
        <p>Lorem ipsum dolor sit amet.25 min</p>
      </div>

      <div className='formRow'>
        <Cycles />
      </div>

      <div className='formRow'>
        <DefaultButton icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
}
