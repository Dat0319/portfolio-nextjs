'use client';

import styles from '@/app/scroll.module.scss';
import { faArrowUpLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import ResumeButton from '../home/ui/ResumeButton';

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState<boolean>(false);

  useEffect(() => {
    const handleShowBtn = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener('scroll', handleShowBtn);

    return () => window.removeEventListener('scroll', handleShowBtn);
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className={styles.topToBottom}>
      {showTopBtn ? (
        <>
          <ResumeButton />
          <button onClick={goToTop} className={styles.btnStyle}>
            <FontAwesomeIcon
              icon={faArrowUpLong}
              className={styles.iconStyle}
            />
          </button>
        </>
      ) : null}
    </div>
  );
};
export default ScrollToTop;
