import React from 'react'

import styles from '../../styles/styles'
import { logoSmall } from "../../assets/img";

const AllInOne = ({ data = [] }) => {
    return (
        <section className=' py-15'>
            <div className={`${styles.gutter}`}>
                <div className='pb-7'>
                    <div className='flex'>
                        <div className="flex text-xs leading-4">
                            <img src={logoSmall} alt="logo" />
                            {data.topText.map((textObj, textIndex) => (
                                <p key={textIndex} className={`${textObj.className}`}>
                                    {textObj.content}
                                </p>
                            ))}
                        </div>
                    </div>
                    <h3 className={`${styles.heading2} pt-2`}>
                        {data.heading}
                    </h3>
                </div>
                <div className='flex flex-col gap-16 py-15'>
                    <img src={data.col1.img} alt={data.col1.alt} />
                    <div className='flex flex-col gap-2'>
                        <h4 className={`${styles.subHeading}`}>{data.col1.subHeading}</h4>
                        <h5 className={`${styles.heading3}`}>{data.col1.heading}</h5>
                        <p className={`${styles.text}`}>{data.col1.text}</p>
                    </div>
                </div>
                <div className='flex flex-col gap-16 py-15'>
                    <img src={data.col2.img} alt={data.col2.alt} />
                    <div className='flex flex-col gap-2'>
                        <h4 className={`${styles.subHeading}`}>{data.col2.subHeading}</h4>
                        <h5 className={`${styles.heading3}`}>{data.col2.heading}</h5>
                        <p className={`${styles.text}`}>{data.col2.text}</p>
                    </div>
                </div>
                <div className='flex flex-col gap-16 py-15'>
                    <img src={data.col3.img} alt={data.col3.alt} />
                    <div className='flex flex-col gap-2'>
                        <h4 className={`${styles.subHeading}`}>{data.col3.subHeading}</h4>
                        <h5 className={`${styles.heading3}`}>{data.col3.heading}</h5>
                        <p className={`${styles.text}`}>{data.col3.text}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AllInOne