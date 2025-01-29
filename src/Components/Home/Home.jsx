import "./Home.css";

const Home = () => {
    return (
        <div className="mainContent flex flex-col mt-1 md:flex-row md:space-x-4">
            <div className="section1">
                <h2 className="text-5xl font-sans mb-2">Soham Adhyapak</h2>
                <h3 className="text-2xl font-sans text-gray-500 pt-1 mb-2">
                    Software Engineer
                </h3>
                <p className="text-xl text-gray-300 pt-5 mb-4">Start</p>

                <a href="">
                    <p className="text-blue-500 cursor-pointer text-sm pb-2 font-sans flex justify-start gap-1 items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                            ></path>
                        </svg>
                        Skills ...
                    </p>
                </a>

                <a href="/Projects">
                    <p className="text-blue-500 cursor-pointer text-sm pb-2 font-sans flex justify-start gap-1 items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776"
                            ></path>
                        </svg>
                        Projects ...
                    </p>
                </a>

                <a href="/Anime">
                    <p className="text-blue-500 cursor-pointer text-sm pb-2 font-sans flex justify-start gap-1 items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5"
                            ></path>
                        </svg>
                        Anime ...
                    </p>
                </a>

                <a href="/contact">
                    <p className="text-blue-500 cursor-pointer text-sm pb-2 font-sans flex justify-start gap-1 items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                            ></path>
                        </svg>
                        Get in Touch ...
                    </p>
                </a>

                <p className="text-xl text-gray-300 pt-6 mb-2 ">Recent</p>

                <div className="pt-1">
                    <a href="/anime">
                        <p className="text-blue-500 cursor-pointer text-sm pb-2 font-sans flex justify-start gap-1 items-center">
                            Anime{" "}
                            <p className="text-gray-300 pl-2 text-sm ">
                                E:/Soham/Anime
                            </p>
                        </p>
                    </a>
                    <a href="/gaming">
                        <p className="text-blue-500 cursor-pointer text-sm pb-2 font-sans flex justify-start gap-1 items-center">
                            Gaming{" "}
                            <p className="text-gray-300 pl-2 text-sm ">
                                E:/Soham/Games
                            </p>
                        </p>
                    </a>
                    <a href="/contact">
                        <p className="text-blue-500 cursor-pointer text-sm pb-2 font-sans flex justify-start gap-1 items-center">
                            Email{" "}
                            <p className="text-gray-300 pl-2 text-sm ">
                                C:/Soham/Email
                            </p>
                        </p>
                    </a>
                    <a href="/Projects">
                        <p className="text-blue-500 cursor-pointer text-sm pb-2 font-sans flex justify-start gap-1 items-center">
                            Projects{" "}
                            <p className="text-gray-300 pl-2 text-sm ">
                                E:/Soham/Projects
                            </p>
                        </p>
                    </a>
                    <a href="/Skills">
                        <p className="text-blue-500 cursor-pointer text-sm pb-2 font-sans flex justify-start gap-1 items-center">
                            Skills{" "}
                            <p className="text-gray-300 pl-2 text-sm ">
                                E:/Soham/Skills
                            </p>
                        </p>
                    </a>
                </div>
            </div>

            {/* Second Section, padding-top 12% ani width 40vw   */}
            <div className="section2 flex-1 p-2" style={{ paddingTop: "13%", width:"40vw" }}>
                <p className="text-xl text-gray-300 pt-6 mb-1">About</p>
                <div className="pt-1">
                    <div className="mt-4">
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/soham-adhyapak-34701a241">
                            <div
                                className="cursor-pointer w-full flex justify-start items-center pl-2 pr-2 p-1 rounded-sm gap-2 border-b border-blue-500"
                                style={{ backgroundColor: "rgb(38, 38, 38)", borderBottomWidth: "0.3rem" }}
                            >
                                <img
                                    src="https://img.icons8.com/fluency/30/null/linkedin-circled.png"
                                    alt="LinkedIn Profile"
                                    className="h-6 w-6"
                                />
                                <p className="text-gray-200 text-sm font-sans flex justify-start items-center">
                                    LinkedIn Profile
                                </p>
                            </div>
                        </a>
                    </div>
                    <div className="mt-4">
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/soham0005">
                            <div
                                className="cursor-pointer w-full flex justify-start items-center pl-2 pr-2 p-1 rounded-sm gap-2 border-b border-blue-500"
                                style={{ backgroundColor: "rgb(38, 38, 38)", borderBottomWidth: "0.3rem" }}
                            >
                                <img
                                    src="https://img.icons8.com/3d-fluency/28/null/github.png"
                                    alt="Github Page"
                                    className="h-6 w-6"
                                />
                                <p className="text-gray-200 text-sm font-sans flex justify-start items-center">
                                    Github Page
                                </p>
                            </div>
                        </a>
                    </div>
                    <div className="mt-4">
                        <a target="_blank" rel="noopener noreferrer" href="https://x.com/sohamA_215">
                            <div
                                className="cursor-pointer w-full flex justify-start items-center pl-2 pr-2 p-1 rounded-sm gap-2 border-b border-blue-500"
                                style={{ backgroundColor: "rgb(38, 38, 38)", borderBottomWidth: "0.3rem" }}
                            >
                                <img
                                    src="https://img.icons8.com/color/28/null/twitter--v1.png"
                                    alt="Twitter Handle"
                                    className="h-6 w-6"
                                />
                                <p className="text-gray-200 text-sm font-sans flex justify-start items-center">
                                    Twitter Handle
                                </p>
                            </div>
                        </a>
                    </div>
                    <div className="mt-4">
                        <a target="_blank" rel="noopener noreferrer" href="https://www.producthunt.com/">
                            <div
                                className="cursor-pointer w-full flex justify-start items-center pl-2 pr-2 p-1 rounded-sm gap-2 border-b border-blue-500"
                                style={{ backgroundColor: "rgb(38, 38, 38)", borderBottomWidth: "0.3rem" }}
                            >
                                <img
                                    src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/null/external-product-hunt-is-a-curation-of-the-best-new-products-every-day-logo-color-tal-revivo.png"
                                    alt="Product Hunt Page"
                                    className="h-6 w-6"
                                />
                                <p className="text-gray-200 text-sm font-sans flex justify-start items-center">
                                    Product Hunt Page
                                </p>
                            </div>
                        </a>
                    </div>
                    <div className="mt-4">
                        <a target="_blank" rel="noopener noreferrer" href="https://peerlist.io/soham215">
                            <div
                                className="cursor-pointer w-full flex justify-start items-center pl-2 pr-2 p-1 rounded-sm gap-2 border-b border-blue-500"
                                style={{ backgroundColor: "rgb(38, 38, 38)", borderBottomWidth: "0.3rem" }}
                            >
                                <img
                                    src="https://media.licdn.com/dms/image/v2/C4D0BAQGjCtiL8FcUcw/company-logo_200_200/company-logo_200_200/0/1646835555233/peerlist_logo?e=2147483647&v=beta&t=BDkNItLoTzk-wReBiGgHqakmvc5iQnulzdCTPafcRMU"
                                    alt="Peerlist Page"
                                    className="h-6 w-6 rounded-full"
                                />
                                <p className="text-gray-200 text-sm font-sans flex justify-start items-center">
                                    Peerlist Page
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            
            

        </div>
        
    );
};

export default Home;
