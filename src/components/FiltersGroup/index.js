import {FaSearch} from 'react-icons/fa'

import './index.css'

const FiltersGroup = props => {
  const renderRatingList = () => {
    const {ratingsList} = props
    return ratingsList.map(each => {
      const {changeRating, activeRatingId} = props
      const onClickRatingItem = () => changeRating(each.ratingId)
      const isActive = each.ratingId === activeRatingId
      const ratingClassName = isActive ? 'active-list-item' : 'list-item'

      return (
        <li key={each.ratingId} onClick={onClickRatingItem}>
          <img
            src={each.imageUrl}
            alt={`rating ${each.ratingId}`}
            className="rating-image"
          />
          <p className={ratingClassName}>& up</p>
        </li>
      )
    })
  }

  const renderRating = () => (
    <>
      <h1 className="heading">Rating</h1>
      <ul className="list-container">{renderRatingList()}</ul>
    </>
  )

  const renderCategoryItemsList = () => {
    const {categoryOptions} = props

    return categoryOptions.map(each => {
      const {changeCategory, activeCategoryId} = props
      const onClickCategoryItem = () => changeCategory(each.categoryId)
      const isActive = each.categoryId === activeCategoryId
      const categoryListItem = isActive ? 'active-list-item' : 'list-item'
      return (
        <li key={each.categoryId} onClick={onClickCategoryItem}>
          <p className={categoryListItem}>{each.name}</p>
        </li>
      )
    })
  }

  const renderCategoryItems = () => (
    <>
      <h1 className="heading">Category</h1>
      <ul className="list-container">{renderCategoryItemsList()}</ul>
    </>
  )

  const onChangeSearchInput = event => {
    const {changeSearchInput} = props
    changeSearchInput(event.target.value)
  }

  const onClickEnter = event => {
    const {enterSearchInput} = props
    if (event.key === 'Enter') {
      enterSearchInput()
    }
  }

  const renderSearchInput = () => {
    const {searchInput} = props
    return (
      <div className="search-input-container">
        <input
          type="search"
          placeholder="Search"
          className="input-search"
          onChange={onChangeSearchInput}
          onKeyDown={onClickEnter}
          value={searchInput}
        />
        <FaSearch className="search-icon" />
      </div>
    )
  }
  const {clearFilters} = props

  return (
    <div className="filters-group-container">
      {renderSearchInput()}
      {renderCategoryItems()}
      {renderRating()}
      <button type="button" onClick={clearFilters}>
        Clear Filters
      </button>
    </div>
  )
}
export default FiltersGroup
