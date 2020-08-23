import { useState, useCallback } from "react"

const useSelect = (initValue='') => {
  const [value, setValue] = useState(initValue)
  
  const handleChange = useCallback((e) => {
    const { value } = e.target;
    setValue(value);
  }, [])

  return ({
    value,
    setValue,
    handleChange,
  })
}

export default useSelect