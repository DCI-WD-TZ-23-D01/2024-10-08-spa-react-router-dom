import { NavLink } from "react-router-dom"
export const Home = () => {
    return (<>
        <h2>Hello Home</h2>

        <button> <NavLink to='dashboard'> Link to dashboard</NavLink></button>


    </>)
}