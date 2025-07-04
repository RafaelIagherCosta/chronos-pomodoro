import type { HomeProps } from '../../pages/Home';
import styles from './styles.module.css';

export function CountDown({ homeState }: HomeProps) {
  return (
    <div className={styles.container}>
      {homeState.formattedSecondsRemaining}
    </div>
  );
}
