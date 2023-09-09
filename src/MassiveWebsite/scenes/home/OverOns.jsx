import React from 'react'
import styles from '../../styles/styles'
import { NavLink } from 'react-router-dom'

import { logoSmall, purpleCheckmark } from '../../assets/img'

const OverOns = ({ data = [] }) => {
    return (
        <section className={`${styles.gutter} ${styles.mdHorizontalCenter} py-15 md:w-full `}>
            {/* <img src={data.img} alt={data.alt} className='radial-img-gradient md:order-2 md:absolute top-1/2 right-0 transform translate-y-[-50%] md:w-[40%] rotate-[330deg] md:max-w-none' /> */}
            <div className={` flex flex-col gap-8 md:w-[725px]`}>
                <div className='flex flex-col gap-4'>
                    <div className="flex text-xs leading-4">
                        <img src={logoSmall} alt="logo" />
                        {data.topText.map((textObj, textIndex) => (
                            <p key={textIndex} className={`${textObj.className}`}>
                                {textObj.content}
                            </p>
                        ))}
                    </div>
                    <h3 className={`${styles.heading2}`}>{data.heading}</h3>
                    <p className={`${styles.text}`}>{data.text}</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <div className="text-sm leading-4 font-medium text-secondary-700">
                        <NavLink to={data.cta[0].link}>
                            {data.cta[0].text}
                        </NavLink>
                    </div>
                    <div className='flex flex-wrap gap-2'>
                        {data.tags.map((tag, index) => (
                            <div key={index} className='flex pl-1 pr-4 py-1 gap-1.5 bg-secondary-100 rounded-full'>
                                <img src={purpleCheckmark} alt="" />
                                <h4 className='text-xs leading-4 font-medium self-center text-secondary-500'>{tag.text}</h4> {/* Use tag.text instead of tag.content */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OverOns