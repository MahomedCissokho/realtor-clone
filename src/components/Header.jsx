// import { Link } from "react-router-dom";

const Header = () => {
    return(
        <div className="bg-white border-b shadow-sm sticky">
            <header className="flex justify-between px-3 py-2 items-center max-w-6xl mx-auto">
                <div>
                    <img src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg" className="w-40 h-10 cursor-pointer " alt='logo'/>
                </div>
                <div>
                    <ul className="flex space-x-10 text-lg">
                        <li>Home</li>
                        <li>Offers</li>
                        <li>Sign In</li>
                    </ul>
                </div>
            </header>
        </div>
    )
}

export default Header ;