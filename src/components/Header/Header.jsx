import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { AiOutlineUser, AiOutlineShoppingCart, AiOutlineClose } from 'react-icons/ai'
import SelectCities from './SelectCities'
const Header = () => {
  const [showSearchForm, setShowSearchForm] = useState(false)
  const [searchText, setSearchText] = useState('')
  const [showSearchResult, setShowSearchResult] = useState(false)
  const showSearch = () => {
    setShowSearchForm(!showSearchForm)
    setShowSearchResult(false)
  }
  const handleSearchInputChange = (e) => {
    const value = e.target.value
    setSearchText(value)
  }
  const clearText = () => {
    setSearchText('')
    setShowSearchResult(false)

  }
  useEffect(() => {
    const events = setTimeout(() => {
      searchText ? setShowSearchResult(true) : setShowSearchResult(false)
    }, 2000)
    return () => {
      clearTimeout(events)
    }
  }, [searchText])
  return (
    <header>
      <nav className='container'>
        {/* Logo */}
        <div className='logo-container'>
          <Link href='/'>
            FoodD
          </Link>
        </div>

        <SelectCities />

        {/* Cta */}
        <div className='cta'>
          <button onClick={showSearch}><BsSearch /></button>
          <Link href='/dang-ky'>
            <AiOutlineUser />
          </Link>
          <Link href='/cart'>
            <AiOutlineShoppingCart />
          </Link>
        </div>

        {/* SearchForm */}
        <div className={`searh-form-container ${showSearchForm ? 'active' : ''}`}>
          <div className='input-container'>
            <div className='input-search-container'>
              <span><BsSearch /></span>
              <input type='text' placeholder='tìm kiếm...' value={searchText} onChange={handleSearchInputChange} />
              <button
                disabled={!searchText}
                className={`${searchText ? 'active' : ''}`} onClick={clearText}><AiOutlineClose /></button>
            </div>
            {
              showSearchResult ?
                <div className='input-search-result-container'>
                  <p>
                    Không có kết quả</p>
                </div>
                : <></>
            }
          </div>
          <button onClick={showSearch}><AiOutlineClose /></button>
        </div>
      </nav>
    </header>
  )
}

export default Header