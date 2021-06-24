import React, { FC } from 'react'

// styles
import styles from '../styles/components/Button.module.css';

interface Props {
	onClick: () => void,
	children: string,
}

const Button: FC<Props> = ({ onClick, children }) => {
	return (
		<button className={styles.button} onClick={onClick}>
			{children}
		</button>
	)
}

export default Button
