import React from 'react'
import { Box, Select, MenuItem } from '@material-ui/core'

const CountySelector = ({
  options=[], value='', onSelect, 
}) => {
  return (
    <Select
      value={value}
      onChange={onSelect}
      fullWidth={true}
    >
      {options.map((option, i) => (
          <MenuItem 
            key={ i } 
            value={ option.value }
          >
            { option.text }
          </MenuItem>
        ))}
    </Select>
  )
}

export default CountySelector