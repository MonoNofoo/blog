import { RefObject, useEffect, useRef, useState } from 'react';

/**
 * アコーディオンの開閉ロジックが書かれているカスタムフック
 */
export default function useAccordion({
  isOpen,
  setIsOpen,
  contentRef,
  transitionTime,
}: {
  isOpen: boolean;
  setIsOpen: (nextIsOpen: boolean) => void;
  contentRef: RefObject<HTMLElement>;
  transitionTime: number;
}) {
  const [isCompleted, setIsCompleted] = useState(true);
  const [status, setStatus] = useState('closed');
  const [nextStatus, setNextStatus] = useState('closed');
  useEffect(() => {
    setStatus(nextStatus);
  }, [nextStatus]);
  const [height, setHeight] = useState('');
  // eslint-disable-next-line no-undef
  const timeoutId = useRef<NodeJS.Timeout>();

  const getContentHeight = (): number =>
    contentRef.current.getBoundingClientRect().height;

  const newStatus = (() => {
    if (!isOpen && isCompleted) {
      return 'closed';
    }
    if (isOpen && !isCompleted) {
      return 'opening';
    }
    if (isOpen && isCompleted) {
      return 'opened';
    }
    if (!isOpen && !isCompleted) {
      return 'closing';
    }
    throw new Error(
      `IllegalArgument: ${JSON.stringify({ isOpen, isCompleted })}`,
    );
  })();

  const toggleHandler = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsCompleted(false);
  }, [isOpen]);

  // before update
  useEffect(() => {
    // NOTE: height が反映された後にステータスを更新したいので
    setNextStatus(newStatus);

    // transition を発火させる為、コンテントのHeight値を設定
    // opened -> closing の場合、useEffect 内で直ちに clearHeight することで ??px -> 0px に変更する
    if (newStatus === 'opening' || status === 'opened') {
      setHeight(`${getContentHeight()}px`);
    }

    if (newStatus === 'opening' || newStatus === 'closing') {
      // 遷移中の考慮：既存のコールバック処理を削除
      clearTimeout(timeoutId.current);

      // 遷移完了時のイベント発行
      timeoutId.current = setTimeout(() => {
        setIsCompleted(true);
        timeoutId.current = undefined;
      }, transitionTime);
    }

    return () => {
      clearTimeout(timeoutId.current);
    };
  }, [newStatus]);

  useEffect(() => {
    // opening の場合のみ遷移完了後に clearHeight 呼出
    if (newStatus === 'opening') {
      return;
    }
    setHeight('');
  }, [status]);

  return { status, toggleHandler, height };
}
