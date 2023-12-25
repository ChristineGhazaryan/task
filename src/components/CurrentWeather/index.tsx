import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { getCurrentWether, getDailyWether } from "../../features/weather/weatherAPI"
import st from './style.module.css'

const CurrentWeather = () => {
    // ------------------ 
    const dispatch = useAppDispatch()
    const { currentWetherData, dailyWetherData } = useAppSelector(st => st.weather)


    // ------------------
    useEffect(() => {
        dispatch(getCurrentWether())
        dispatch(getDailyWether())
    }, [])

    // ------------------
    return <div className={st.section1}>
        <div className={st.section1_1}>
            <h3>{currentWetherData.name} {currentWetherData?.wind?.deg}&deg;C</h3>
            {currentWetherData?.weather && <>
                <img src={`https://openweathermap.org/img/wn/${currentWetherData?.weather[0]?.icon}@4x.png`} alt="" />
                <h4>{currentWetherData?.weather[0]?.main}</h4>
            </>
            }
        </div>
        <div className={st.section1_2}>
            {
                // bad idea, wrong code 
                dailyWetherData.slice(0, 4).map((elm, i) => {
                    return <div key={i} className={st.item} >
                        <p>{elm.dt_txt} {elm.wind.deg}&deg;F</p>
                        {
                            elm.weather && <img src={`https://openweathermap.org/img/wn/${elm?.weather[0]?.icon}@4x.png`} />
                        }
                    </div>
                })
            }
        </div>
    </div>
}

export default CurrentWeather