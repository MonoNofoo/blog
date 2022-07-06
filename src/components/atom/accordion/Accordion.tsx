import { MouseEventHandler, useRef, useState } from 'react';
import * as styles from '@/components/atom/accordion/Accordion.css';
import useAccordion from '@/components/atom/accordion/useAccordion';

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(true);
  const contentElmRef = useRef<HTMLDivElement>(null);
  const { toggleHandler, status, height } = useAccordion({
    isOpen,
    setIsOpen,
    contentRef: contentElmRef,
    transitionTime: 300,
  });

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();

    toggleHandler();
  };

  console.log(status);

  return (
    <details open>
      <summary className={styles.summary} onClick={handleClick}>
        accordion label
      </summary>
      <div
        className={styles.contentBox}
        style={{ height }}
        data-status={status}
      >
        <div className={styles.box} ref={contentElmRef}>
          test
        </div>
      </div>
    </details>
  );
};

export default Accordion;
