import cx from 'classnames';

import styles from './header.module.css';

function Header({className}) {
  return <div className={cx(styles.root, className)}>header</div>;
}

export default Header;
