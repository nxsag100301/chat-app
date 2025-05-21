import React from 'react'

const GenderCheckbox = ({ selectedGender, onCheckboxChange }) => {
  return (
    <div className='flex pt-2 pb-1 gap-2'>
      <div className='form-control'>
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === 'male' ? 'selected' : ''
          }`}
        >
          <span className='label-text'>Male</span>
          <input
            className='checkbox checkbox-primary checkbox-sm border-slate-900'
            type='checkbox'
            checked={selectedGender === 'male'}
            onChange={() => onCheckboxChange('male')}
          />
        </label>
      </div>
      <div className='form-control'>
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === 'female' ? 'selected' : ''
          }`}
        >
          <span className='label-text'>Female</span>
          <input
            className='checkbox checkbox-primary checkbox-sm border-slate-900'
            type='checkbox'
            checked={selectedGender === 'female'}
            onChange={() => onCheckboxChange('female')}
          />
        </label>
      </div>
    </div>
  )
}

export default GenderCheckbox
