import Image from 'next/image';
import React from 'react'
import Slider from "react-slick";
const Single = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
  };
  return (
    <div className='single-slide'>
      <Slider {...settings}>
        {
          data?.map(ev =>
            <div class="card" key={ev.id}>
              <Image src={ev.image} width={1024} height={800} alt={ev.id} />
              <div class="card-body">
                <h5 class="card-title">{ev.brandName}</h5>
                <hr />
                <p class="card-text">{ev.name}</p>
                <span>{ev.price} đ</span>
              </div>
            </div>
          )
        }

      </Slider>
    </div>
  )
}

export default Single