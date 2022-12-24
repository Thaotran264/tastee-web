import React from 'react'

const SelectCities = () => {
  return (
           <select class="header-select" aria-label="Default select example">
    <option selected>Chọn thành phố</option>
    <option value="1">Hồ Chí Minh</option>
    <option value="2">Đà Nẵng</option>
    <option value="3">Hà Nội</option>
  </select>
  )
}

export default SelectCities