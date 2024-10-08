import { NavLink } from "react-router-dom"
export const Header = () => {
    return (
        <header >
            <nav style={{ width: '100vw', backgroundColor: 'gray' }}>
                <ul>
                    <button> <NavLink to='/'>Home</NavLink></button>
                    <button> <NavLink to='dashboard'> Dashboard</NavLink></button>
                    <button> <NavLink to='contact'> Contact</NavLink></button>
                </ul>
            </nav>
        </header>


    )

}