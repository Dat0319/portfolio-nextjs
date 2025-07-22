import styles from '@/app/scroll.module.scss';
import LocalConfig from '@/constants/config';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const ResumeButton = () => {
  return (
    <Link
      className={styles.resumeButton}
      href={LocalConfig.values.NEXT_PUBLIC_RESUME_LINK}
      target="_blank"
    >
      {/* Download Resume */}
      <FontAwesomeIcon icon={faDownload} />
    </Link>
  );
};

export default ResumeButton;
