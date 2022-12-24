import React from 'react'
import { BsInstagram, BsYoutube } from 'react-icons/bs'
import { FaFacebookSquare } from 'react-icons/fa'
const Footer = () => {
    return (
        <footer>
            <div className='footer-top'>
                <div className='container footer-top-container'>
                    <div className='footer-items'>
                        <h2 className='footer-title'>Liên hệ</h2>
                        <p><span>Email: </span>cskh@tastee.com</p>
                        <p><span>Điện thoại: </span>0396296123</p>
                        <p><span>ĐKKD: </span>37 Hoàng Văn Thụ, P.x, Q.Phú Nhuận, HCM </p>
                        <p><span>Văn phòng: </span>Tầng 8 Tòa nhà Halo Tower, 37 Hoàng Văn Thụ, P15, Q.Phú Nhuận, HCM</p>
                        <div className='socials'>
                            <BsInstagram />
                            <FaFacebookSquare />
                            <BsYoutube />
                        </div>
                    </div>
                    <div className='footer-items'>
                        <h2 className='footer-title'>Thông tin</h2>
                        <ul>
                            <li>
                                <a>Giới thiệu về Tastee</a>
                            </li>
                            <li>
                                <a>Tuyển dụng nhân sự</a>
                            </li>
                            <li>
                                <a>Chính sách bảo mật</a>
                            </li>
                            <li>
                                <a>Điều khoản sử dụng</a>
                            </li>
                        </ul>
                    </div>
                    <div className='footer-items'>
                        <h2 className='footer-title'>Địa chỉ</h2>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.159164460223!2d106.67697751418271!3d10.799118961728889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528d7a839e4b3%3A0x4296396dc7eb4bb5!2zMzcgSG_DoG5nIFbEg24gVGjhu6UsIFBoxrDhu51uZyAxNSwgUGjDuiBOaHXhuq1uLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1671095798515!5m2!1svi!2s" width="300" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
            <div className='footer-bottom'>
                <p>© Copyright 2022 by <a>Tastee team</a> | All Rights Reserved</p>
            </div>
        </footer>
    )
}

export default Footer