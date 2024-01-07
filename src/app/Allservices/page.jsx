import Image from 'next/image'
import React from 'react'


const Allservices = () => {
    const styles = {
        backgroundImage: 'url("./images/brandingbackground.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        // backgroundColor: "red"
    };

    return (
        <div className="conatiner flex">
            <div className="p-80 pt-20">
                <div className="px-0 pr-11 flex" >
                    <div style={styles}>
                        <div className='pl-12 pt-7'>
                            <img src="../images/branding&design.svg" width={62.11} height={62.56} alt="" className='' />
                            <h2 className='text-xl/[1.50] font-medium pt-6'>Branding & Design</h2>
                            <p className='mt-1 text-lg/[1.125] pt-1'>Connect your favorite databases, frontend frameworks, or static site generators. </p>
                            <a href="#">Read More</a>
                        </div>

                    </div>
                    <div style={styles}>
                        <div className='pl-12 pt-7'> <img src="../images/branding&design.svg" width={62.11} height={62.56} alt="" className='' />
                            <h2 className='text-xl/[1.50] font-medium pt-6'>UI/UX Design</h2>
                            <p className='mt-1 text-lg/[1.125] pt-1'>Connect your favorite databases, frontend frameworks, or static site generators. </p>
                            <a href="#">Read More</a>
                        </div>

                    </div>
                    <div style={styles}>
                        <div className='pl-12 pt-7'>
                            <img src="../images/branding&design.svg" width={62.11} height={62.56} alt="" className='' />
                            <h2 className='text-xl/[1.50] font-medium pt-6'>Web Development</h2>
                            <p className='mt-1 text-lg/[1.125] pt-1'>Connect your favorite databases, frontend frameworks, or static site generators.</p>
                            <a href="#">Read More</a>
                        </div>

                    </div>
                </div>

            </div>
        </div>

    )
}

export default Allservices