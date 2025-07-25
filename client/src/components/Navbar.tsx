import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="w-full flex justify-between items-center bg-[#7a725e] px-4 py-4">
            <div>
                <Link to="/" className="text-2xl font-bold tracking-wide text-white">KYOKAI</Link>
            </div>
            <div className="flex gap-x-6">
                <Link to="/" className="text-white">HOME</Link>
                <Link to="/Analysis" className="text-white">ANALYSIS</Link>
                <Link to="/settings" className="text-white">SETTINGS</Link>
                <Link
                    to="/BuymeAcoffee"
                    className="text-white text-2xl font-['Noto_Color_Emoji']"
                >
                    &#9749;
                </Link>

            </div>
        </div>
    );
}
