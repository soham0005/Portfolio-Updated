import "./Experience.css";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Experience = () => {
    return (
        <div className="p-3  pl-5 pb-20 text-center block ">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                <span className="block lg:text-5xl  font-bold leading-tight text-3xl text-white">
                    Work
                </span>
                <span className="block pt-3 text-indigo-500 text-2xl">
                    Industry Experience
                    <br />
                    <span className="hide">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores voluptas aliquid nam eligendi blanditiis pariatur deleniti quo autem nostrum laudantium non, qui rerum hic quod praesentium neque harum unde ex?</span>
                </span>
            </h2>

            <VerticalTimeline>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                        background: 'rgba(33, 150, 243, 0.1)',
                        color: '#fff',
                        borderRadius: '10px',
                        padding: '20px',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        backdropFilter: 'blur(10px)',
                        transition: 'background-color 0.3s ease-in-out, border-color 0.3s ease-in-out',
                        animation: 'animateColor 5s infinite alternate'
                    }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="October 2024 - December 2024"
                    iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
                    icon={<img src="https://user-images.githubusercontent.com/63473496/153487849-4f094c16-d21c-463e-9971-98a8af7ba372.png" alt="Work" />}
                >
                    <h3 className="vertical-timeline-element-title">Project Admin</h3>
                    <h4 className="vertical-timeline-element-subtitle">GirlScript Summer of Code</h4>

                </VerticalTimelineElement>

                

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                        background: 'rgba(33, 150, 243, 0.1)',
                        color: '#fff',
                        borderRadius: '10px',
                        padding: '20px',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        backdropFilter: 'blur(10px)',
                        transition: 'background-color 0.3s ease-in-out, border-color 0.3s ease-in-out',
                        animation: 'animateColor 5s infinite alternate'
                    }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="May 2024 - July 2024"
                    iconStyle={{ background: 'rgb(255, 255, 255)' }}
                    icon={<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Deutsche_Bank_logo_without_wordmark.svg/1024px-Deutsche_Bank_logo_without_wordmark.svg.png" alt="Work" />}
                >
                    <h3 className="vertical-timeline-element-title">Technology and Data Innovation Intern</h3>
                    <h4 className="vertical-timeline-element-subtitle">Deutsche Bank</h4>

                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                        background: 'rgba(33, 150, 243, 0.1)',
                        color: '#fff',
                        borderRadius: '10px',
                        padding: '20px',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        backdropFilter: 'blur(10px)',
                        transition: 'background-color 0.3s ease-in-out, border-color 0.3s ease-in-out',
                        animation: 'animateColor 5s infinite alternate'
                    }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="May 2024 - September 2024"
                    iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
                    icon={<img src="https://user-images.githubusercontent.com/63473496/153487849-4f094c16-d21c-463e-9971-98a8af7ba372.png" alt="Work" />}
                >
                    <h3 className="vertical-timeline-element-title">Open Source Contributor</h3>
                    <h4 className="vertical-timeline-element-subtitle">GirlScript Summer of Code</h4>

                </VerticalTimelineElement>

                

            </VerticalTimeline>
        </div>

    );
};

export default Experience;

