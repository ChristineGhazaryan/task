import { Outlet } from "react-router-dom"
import st from './style.module.css'
import { useState } from "react"
import { useAppDispatch } from "../../app/hooks"
import { searchWether } from "../../features/weather/weatherAPI"

const Layout = () => {
    const [text, setText] = useState<string>('')
    const dispatch = useAppDispatch()


    const handleSearch = () => {
        dispatch(searchWether(text)).unwrap().catch((er) => {
            alert('Wrong location!!!')
        })
    }

    return <>
        <header className={st.header}>
            <div>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                <button onClick={handleSearch}>Search City</button>
            </div>
            <div className={st.degree}>
                {/* checked */}
                <input type="radio" name="" id="" />
                <label htmlFor="">&deg;C</label>
                <input type="radio" name="" id="" />
                <label htmlFor="">&deg;F</label>
            </div>
        </header>
        <main>
            <Outlet />
        </main>
    </>
}

export default Layout