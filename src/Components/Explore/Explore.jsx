import './Explore.css';
// import { useState } from 'react'

import { AboutSectionData } from '../../JSON/data';
const Explore = () => {
    return (
        <div>
            <h5 className='overflow-hidden'>EXPLORER</h5>

            {/* hover:bg-gray-700 */}


            <div className="w-full max-w-xs text-white rounded-md shadow-md h-full overflow-y-auto">
                <div>
                    {/* About Section */}
                    <details className="group">
                        <summary className="flex items-center justify-between cursor-pointer px-4 rounded-md mt-2">
                            <span className="flex items-center text-xs">

                                <span className="transform group-open:rotate-90 mr-2 inline-block">
                                    <div className="w-2 h-2 border-r-2 border-t-2 border-white rotate-45"></div>
                                </span>

                                About
                            </span>
                        </summary>

                        <div className="pl-8 mt-2 hidden group-open:block list">
                            {AboutSectionData.map((item, index) => (
                                <div key={index} className="flex items-center hover:bg-gray-700 cursor-pointer">
                                    <span
                                        className="inline-block"
                                        dangerouslySetInnerHTML={{ __html: item.svgPath }}
                                    ></span>
                                    &nbsp;
                                    <span className="explore-section">{item.name}</span>
                                </div>
                            ))}
                        </div>
                    </details>

                   
                    {/* Projects Section */}
                    <details className="group">
                        <summary className="flex items-center justify-between cursor-pointer px-4 rounded-md mt-2">
                            <span className="flex items-center text-xs">

                                <span className="transform group-open:rotate-90 mr-2 inline-block">
                                    <div className="w-2 h-2 border-r-2 border-t-2 border-white rotate-45"></div>
                                </span>

                                Project
                            </span>
                        </summary>
                        
                        <div className="pl-8 mt-2 hidden group-open:block list">
                            {AboutSectionData.map((item, index) => (
                                <div key={index} className="flex items-center hover:bg-gray-700 cursor-pointer">
                                    <span
                                        className="inline-block"
                                        dangerouslySetInnerHTML={{ __html: item.svgPath }}
                                    ></span>
                                    &nbsp;
                                    <span className="explore-section">{item.name}</span>
                                </div>
                            ))}
                        </div>
                    </details>

                </div>
            </div>
        </div>
    )
}

export default Explore
