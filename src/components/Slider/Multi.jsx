import Image from 'next/image';
import React from 'react'
import Slider from "react-slick";
import { logoBrands } from '../../../data/data.js'
const Multi = () => {
    console.log('first', logoBrands)
    const settings = {
        slidesToShow: 2,
        speed: 500,
        rows: 2,
        slidesPerRow: 2
    };
    return (
        <div className='multi'>
            <Slider {...settings}>
                {
                    logoBrands?.map((ev,index) =>
                        <div className='multi-items' key={index}>
                            <Image src={ev} alt='logo' width={100} height={100} />
                        </div>
                    )
                }
            </Slider>
        </div>
    )
}

export default Multi