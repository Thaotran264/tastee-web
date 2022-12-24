import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CartPage = () => {
    return (
        <div className='cart container'>
            <h1>Sản phẩm đã chọn</h1>
            <div className='row'>
                <div className='col-8 col-left'>
                    <Image src='/images/ysl-600x600.png' width={40} height={40} alt='image' />
                    <div>
                        <h2>Y EDP - 100ml</h2>
                        <p>3.350.000đ</p>
                    </div>
                    <input type='number' />
                    <button>Xóa</button>
                </div>
                <div className='col-4 col-right'>
                    <h2>Phiếu thanh toán</h2>
                    <p><span>Tạm tính: </span> 3.500.000đ</p>
                    <hr />
                    <p><span>Tổng: </span> 3.500.000đ</p>
                    <div className='group-button'>
                        <button>Mua ngay</button>
                        <Link href='/'>Tiến hành thanh toán</Link>
                    </div>
                    <div class="accordion accordion-flush" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    trợ giúp ?
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Thông tin ship ?
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    đổi trả và hoàn tiền
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div>
                <p>Chưa có sản phẩm nào trong giỏ hàng.</p>
            </div>
            <Link href='/'>Quay trở lại cửa hàng</Link>
        </div>
    )
}

export default CartPage