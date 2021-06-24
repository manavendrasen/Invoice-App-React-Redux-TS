import React, { useState } from 'react'

// styles
import styles from '../styles/components/SearchBox.module.css'

// icon
import { FiSearch } from 'react-icons/fi';
const SearchBox = () => {
	const [search, setSearch] = useState('')
	return (
		<div className={styles.searchBox}>
			<span className={styles.searchBox__icon}><FiSearch /></span>
			<input className={styles.searchBox__field} placeholder="Search Invoice" type="search" name="search" value={search} onChange={(e) => setSearch(e.target.value)} />
		</div>
	)
}

export default SearchBox
