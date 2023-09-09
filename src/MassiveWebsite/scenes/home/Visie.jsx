import React from 'react'
import styles from '../../styles/styles'

const Visie = ({ data = []}) => {
  return (
    <section className='py-15'>
        <div className={`${styles.gutter} ${styles.mdHorizontalCenter} flex flex-col gap-5 text-center`}>
            <img src={data.logo} alt="logo" className='max-w-[56px] mx-auto' />
            <div className='w-full h-[1.5px] bg-secondary-300'></div>
            <p className={`${styles.textSmall} max-w-[520px] ${styles.horizontalCenter}`}>{data.text}</p>
        </div>
    </section>
  )
}

export default Visie