import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { getDailyWether } from "../../features/weather/weatherAPI"


const DailyWeather = () => {
    // ------------------ 
    const dispatch = useAppDispatch()
    // ------------------ 
    const { dailyWetherData } = useAppSelector(st => st.weather)

    useEffect(() => {
        dispatch(getDailyWether())
    }, [])
    // -------------------

    return <div>
        {
            dailyWetherData.map((elm, i) => {
                {/* how to compare date ?????  */ }
                return <div key={i}>
                    <p>{elm.dt_txt} {elm.wind.deg}&deg;F</p>
                    {
                        elm.weather && <img src={`https://openweathermap.org/img/wn/${elm?.weather[0]?.icon}@4x.png`} />
                    }
                </div>
            })
        }

    </div>
}

export default DailyWeather