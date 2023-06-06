import { useLocation, useNavigate } from "react-router";

const Header = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const pathname = (route) => {
        return location.pathname === route ? "border-red-400 text-black" : "border-b-transparent"
    }
   

    return(
        <div className="bg-white border-b shadow-sm sticky font-jura">
            <header className="flex justify-between px-3 items-center max-w-6xl mx-auto">
                <div>
                    <img src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg" className="w-40 h-10 cursor-pointer " alt='logo' onClick={() => navigate("/")}/>
                </div>
                <div>
                    <ul className="flex space-x-10 text-[#828080] font-semibold">
                        <li className={`border-b-4 py-4 ${pathname("/")} cursor-pointer`} onClick={() => navigate("/")}>Home</li>
                        <li className={`border-b-4 ${pathname("/offers")} cursor-pointer py-4`} onClick={() => navigate("/offers")}>Offers</li>
                        <li className={`border-b-4 ${pathname("/sign-in")} cursor-pointer py-4`} onClick={() => navigate("/sign-in")}>Sign In</li>
                    </ul>
                </div>
            </header>
        </div>
    )
}

export default Header ;