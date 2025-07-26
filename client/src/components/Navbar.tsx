import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
export default function Navbar() {
    const [isdark, setIsdark] = useState(() => {
        return localStorage.getItem('theme') === 'dark'
    })
    useEffect(() => {
        const html = document.documentElement;
        if (isdark) {
            html.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            html.classList.remove('dark');
            localStorage.setItem('theme', 'dark');
        }
    }, [isdark]);
    return (
        <div className="w-full flex justify-between items-center bg-[#7a725e] px-4 py-4">
            <div>
                <Link to="/" className="text-2xl font-bold tracking-wide text-white">KYOKAI</Link>
            </div>
            <div className="flex gap-x-6">
                <button
                    onClick={() => setIsdark(prev => !prev)}
                    className=""
                >
                    {isdark ? '☀️' : '🌙'}
                </button>
                <Link to="/" className="text-white">HOME</Link>
                <Link to="/Analysis" className="text-white">ANALYSIS</Link>
                <Link to="/settings" className="text-white">SETTINGS</Link>
                <Link to="/Auth" className="text-white">AUTH</Link>

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
