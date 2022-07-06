import { MouseEventHandler, useState } from 'react';
import * as styles from '@/components/atom/accordion/Accordion.css';

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handleClick: MouseEventHandler<HTMLDetailsElement> = (e) => {
    e.preventDefault();

    setIsOpen(!isOpen);
  };

  return (
    <details open={isOpen}>
      <summary className={styles.summary} onClick={handleClick}>
        accordion label
      </summary>
      <div className={styles.contentBox}>
        <div className={styles.box}>test</div>
      </div>
    </details>
  );
};

export default Accordion;
