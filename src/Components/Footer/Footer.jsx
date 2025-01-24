import { useEffect, useState } from "react";
import moment from "moment";
import './Footer.css'

const Footer = () => {
    const [currentDateTime, setCurrentDateTime] = useState(moment().format('dddd, MMMM Do YYYY, h:mm:ss A'));

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDateTime(moment().format('dddd, MMMM Do YYYY, h:mm:ss A'));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <footer>
            <nav className="w-full">
                <div className="flex justify-between">
                    <ul className="headerList">
                        <li>Made Using</li>
                        <li><a href="#">React</a></li>
                        <li><a href="#">Tailwind</a></li>
                        <li><a href="#">Javascript</a></li>
                    </ul>

                    <ul className="headerList rightPart">
                        <li>{currentDateTime}</li>
                        <li>UTF-8</li>
                        <li>Port: 443</li>
                    </ul>

                </div>
            </nav>


        </footer>
    );
};

export default Footer;