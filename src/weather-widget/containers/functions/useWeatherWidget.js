import useFetch from "../../lib/useFetch"
import { cwbApiUrl } from "../../API/api"
import { useEffect, useMemo } from "react"
import useSelect from "../../lib/useSelect"
import { DEFAULT_COUNTY } from "../../config"
import WeatherWidgetHandlers from "./WeatherPartHandlers"

const useWeatherWidget = () => {
  const fetchState = useFetch({
    apiUrl: cwbApiUrl,
    initResponseData: undefined,
  })
  const {
    handleFetch,
    responseData,
  } = fetchState

  const {
    value,
    handleChange  
  } = useSelect(DEFAULT_COUNTY)

  // 組件一mount好就fetch資料
  useEffect(() => {
    handleFetch()
  }, [handleFetch])

  // 儲存計算好的data
  const weatherWidgetData = useMemo(() => (
    WeatherWidgetHandlers.getCountyWeatherData(responseData, value)
  ), [responseData, value])

  const countyOptions = useMemo(() => (
    WeatherWidgetHandlers.getCountyOptions(responseData)
  ), [responseData])

  return ({
    ...fetchState,
    value,
    handleChange,
    weatherWidgetData,
    countyOptions,
  })
}

export default useWeatherWidget