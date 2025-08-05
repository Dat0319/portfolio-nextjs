import Row from '@/components/core/Row';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { isValidElement, ReactNode } from 'react';

const AppBar = ({ children }: Readonly<{ children?: string | ReactNode }>) => {
  return (
    <Row classNames="gap-4 items-center">
      <Link href="/" className="p-0 m-0">
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="text-xl/6 font-semibold text-[var(--textColor)]"
        />
      </Link>

      {children ? (
        isValidElement(children) ? (
          children
        ) : (
          <p className="text-lg/6 font-semibold">{children}</p>
        )
      ) : null}
    </Row>
  );
};

export default AppBar;
