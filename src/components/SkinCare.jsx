import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';

import asesopSkinLucent from '../img/skin-care/Aesop_Skin_Lucent.png';
import asesopSkinB from '../img/skin-care/Aesop_Skin_B.webp';
import asesopSkinExalted from '../img/skin-care/Aesop_Skin_Exalted.png';
import asesopSkinSublime from '../img/skin-care/Aesop_Skin_Sublime.png';
import asesopSkinDamascan from '../img/skin-care/Aesop_Skin_Damascan.webp';

const SkinCare = () => {
    return (
        <>
            {/* SKIN CARE START */}

            <section className='my-5 pt-3'>
                <div className="container-fluid px-5">
            
                    <div className="owl-carousel-info ms-5 pt-4">
                        <OwlCarousel className='owl-theme'
                            items={3}
                            loop
                            margin={10}
                            dots={false}
                            responsive= {
                                {
                                    '1':{
                                        items: 2
                                    },
                                    '600':{
                                        items: 1
                                    },
                                    '1025': {
                                        items: 3
                                    }
                                }
                                
                            }
                            nav>
                            <div className='item owl-carousel-block border-0' style={{ width: "20rem" }}>
                                <div className="owl-carousel-info-title mb-5">
                                    <p>Skin Care+</p>
                                    <h3 className='pt-2'>Intensive formulations for complex skin</h3>
                                    <p className='pt-2'>Explore products formulated with mature skin and urban dwellers in mind, to provide daily hydration and the additional benefit of potent vitamins and anti-oxidants.</p>

                                    <p className='pt-2'><Link className='text-dark'>Browse formulations <span className='ps-1'><i className="fa-solid fa-arrow-right"></i></span></Link></p>
                                </div>
                            </div>

                            <div className='item owl-carousel-block border-0' style={{ width: "20rem" }}>
                                <div className='img-box'>
                                    <img src={asesopSkinLucent} alt="" className='img-fluid img-fluid' />
                                </div>

                                <div className='info-box text-center'>
                                    <h6 className="fw-bold">Lucent Facial Concentrate</h6>
                                    <p>A Vitamin C-rich layering serum </p>
                                </div>
                            </div>


                            <div className='item owl-carousel-block border-0' style={{ width: "20rem" }}>
                                <div className='img-box mt-5 pt-5'>
                                    <img src={asesopSkinB} alt="" className='mt-4 img-fluid' />
                                </div>
                                <div className='info-box text-center pt-4'>
                                    <h6 className="fw-bold">B Triple C Facial Balancing Gel</h6>
                                    <p>Embracing, vitamin-rich hydration</p>
                                </div>
                            </div>

                            <div className='item owl-carousel-block border-0' style={{ width: "20rem" }}>
                                <div className='img-box mt-2'>
                                    <img src={asesopSkinExalted} alt="" className='img-fluid' />
                                </div>
                                <div className='info-box text-center'>
                                    <h6 className="fw-bold">Exalted Eye Serum </h6>
                                    <p>Lightweight, vitamin-rich serum </p>
                                </div>
                            </div>

                            <div className='item owl-carousel-block border-0' style={{ width: "20rem" }}>
                                <div className='img-box mt-5 pt-5'>
                                    <img src={asesopSkinSublime} alt="" className='mt-5 img-fluid' />
                                </div>
                                <div className='info-box text-center pt-3'>
                                    <h6 className="fw-bold">Sublime Replenishing Night Masque</h6>
                                    <p>Richly nourishing hydration for overnight use</p>
                                </div>
                            </div>

                            <div className='item owl-carousel-block border-0' style={{ width: "20rem" }}>
                                <div className='img-box mt-4'>
                                    <img src={asesopSkinDamascan} alt="" className='card-img-top' height={300} />
                                </div>
                                <div className='info-box text-center'>
                                    <h6 className="fw-bold">Damascan Rose Facial Treatment</h6>
                                    <p>A blend of vitamin-rich botanical extracts</p>
                                </div>
                            </div>

                        </OwlCarousel>
                    </div>
                </div>
            </section>

            {/* SKIN CARE END */}



        </>
    )
}

export default SkinCare