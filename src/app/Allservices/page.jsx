import { KeyboardArrowRightRounded, KeyboardDoubleArrowRightRounded } from '@mui/icons-material';
import React from 'react';


const Allservices = () => {
    const services = [
        {
            title: 'Branding & Design',
            description: 'Connect your favorite databases, frontend frameworks, or static site generators.',
            image: '../images/branding&design.svg',

        },
        {
            title: 'UI/UX Design',
            description: 'Connect your favorite databases, frontend frameworks, or static site generators.',
            image: '../images/UI/UX Design.png',

        },
        {
            title: 'Web Development',
            description: 'Connect your favorite databases, frontend frameworks, or static site generators.',
            image: '../images/WebDevelopment.png',

        },
        {
            title: 'E-commerce Store',
            description: 'Connect your favorite databases, frontend frameworks, or static site generators.',
            image: '../images/E-commerceStore.png',
        },
        {
            title: 'Landing Pages',
            description: 'Connect your favorite databases, frontend frameworks, or static site generators.',
            image: '../images/LandingPages.png',

        },
        {

            title: 'WordPress Development',
            description: 'Connect your favorite databases, frontend frameworks, or static site generators.',
            image: '../images/WordPressDevelopment.png',

        },

    ];

    const styles = {
        backgroundImage: 'url("/images/Group 226.png")'
    }

    return (
        <>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-64 pt-32">
            {services.map((service, index) => (
                <>
                    <div key={index} className="rounded-lg shadow p-6 " style={styles}>
                        <img src={service.image} width={62.11} height={62.56} alt="" className="mb-4" />
                        <h2 className="text-xl font-medium mb-2 pt-8">{service.title}</h2>
                        <p className="text-gray-500">{service.description}</p>
                        <a href="#" className="mt-4 inline-flex items-center text-green-500">
                            Learn more <KeyboardArrowRightRounded className="ml-2" />
                        </a>
                    </div>
                </>
            ))} 
            <div className='w-1'></div>
            <div className='flex justify-center items-center m-auto'>
                <button type="button" className="py-2.5 px-5  text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">All Services</button>
            </div>
        </div>
       
        </>
    );
};

export default Allservices;