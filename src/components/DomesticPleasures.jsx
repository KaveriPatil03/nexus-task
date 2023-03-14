import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';

import aesopHomeMurasaki from '../img/domestic-pleasures/Aesop_Home_Murasaki.webp';
import aesopHomeKagerou from '../img/domestic-pleasures/Aesop_Home_Kagerou.webp';
import aesopHomeSarashina from '../img/domestic-pleasures/Aesop_Home_Sarashina.webp';
import aesopHomeBronze from '../img/domestic-pleasures/Aesop_Home_Bronze.webp';
import aesopHomeAganice from '../img/domestic-pleasures/Aesop_Home_Aganice.webp';
import aesopHomeCallippus from '../img/domestic-pleasures/Aesop_Home_Callippus.webp';
import aesopHomePtolemy from '../img/domestic-pleasures/Aesop_Home_Ptolemy.webp';
import aesopHomeRoomSpray from '../img/domestic-pleasures/Aesop-Home-Room-Spray.webp';
import aesopHomeRoomCythera from '../img/domestic-pleasures/Aesop_Home_Cythera.webp';
import aesopHomeRoom from '../img/domestic-pleasures/Aesop-Home-Room.webp';
import aesopOtherAesop from '../img/domestic-pleasures/Aesop-Other-Aesop.webp';

const DomesticPleasures = () => {
    return (
        <>
            {/* DOMESTIC PLEASURES START */}

            <section className='my-5 pt-5 pb-4'>
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
                                    <p>For the home</p>
                                    <h3 className='pt-2'>Domestic Pleasures</h3>
                                    <p className='pt-2'>Our range of aromatic formulations for the home are practical and pleasing in equal measure.</p>

                                    <p className='pt-2'><Link className='text-dark'>See all Home <span className='ps-1'><i className="fa-solid fa-arrow-right"></i></span></Link></p>
                                </div>
                            </div>

                            <div className='item owl-carousel-block border-0' style={{ width: "20rem" }}>
                                <div className='img-box'>
                                    <img src={aesopHomeMurasaki} alt="" className='img-fluid img-fluid' />
                                </div>

                                <div className='info-box text-center'>
                                    <h6 className='fw-bold'>Murasaki Aromatique Incense</h6>
                                    <p>For those who favour aromas of warm spice </p>
                                </div>
                            </div>


                            <div className='item owl-carousel-block border-0' style={{ width: "20rem" }}>
                                <div className='img-box'>
                                    <img src={aesopHomeKagerou} alt="" className='img-fluid' />
                                </div>
                                <div className='info-box text-center'>
                                    <h6 className='fw-bold'>Kagerou Aromatique Incense</h6>
                                    <p>For those particularly partial to Vetiver </p>
                                </div>
                            </div>

                            <div className='item owl-carousel-block border-0' style={{ width: "20rem" }}>
                                <div className='img-box'>
                                    <img src={aesopHomeSarashina} alt="" className='img-fluid' />
                                </div>
                                <div className='info-box text-center'>
                                    <h6 className='fw-bold'>Sarashina Aromatique Incense</h6>
                                    <p>For those particularly partial to Sandalwood </p>
                                </div>
                            </div>

                            <div className='item owl-carousel-block border-0' style={{ width: "20rem" }}>
                                <div className='img-box mt-5 pt-5'>
                                    <img src={aesopHomeBronze} alt="" className='mt-4 img-fluid' />
                                </div>
                                <div className='info-box text-center pt-4'>
                                    <h6 className='fw-bold'>Bronze Incense Holder</h6>
                                    <p>Suited to any interior </p>
                                </div>
                            </div>

                            <div className='item owl-carousel-block border-0' style={{ width: "20rem" }}>
                                <div className='img-box'>
                                    <img src={aesopHomeAganice} alt="" className='card-img-top' height={260} />
                                </div>
                                <div className='info-box text-center pt-4'>
                                    <h6 className='fw-bold'>Aganice Aromatique Candle</h6>
                                    <p>Cardamom, Mimosa, Tobacco</p>
                                </div>
                            </div>

                            <div className='item owl-carousel-block border-0' style={{ width: "20rem" }}>
                                <div className='img-box'>
                                    <img src={aesopHomeCallippus} alt="" className='img-fluid' height={260}/>
                                </div>
                                <div className='info-box text-center'>
                                    <h6 className='fw-bold'>Callippus Aromatique Candle</h6>
                                    <p>A marriage of deep greens and earthy spices</p>
                                </div>
                            </div>

                            <div className='item owl-carousel-block border-0' style={{ width: "20rem" }}>
                                <div className='img-box'>
                                    <img src={aesopHomePtolemy} alt="" className='img-fluid' />
                                </div>
                                <div className='info-box text-center'>
                                    <h6 className='fw-bold'>Ptolemy Aromatique Candle</h6>
                                    <p>A sensuous blend of leather, smoke and wood</p>
                                </div>
                            </div>

                            <div className='item owl-carousel-block border-0' style={{ width: "20rem" }}>
                                <div className='img-box'>
                                    <img src={aesopHomeRoomSpray} alt="" height={280} />
                                </div>
                                <div className='info-box text-center'>
                                    <h6 className='fw-bold'>Istros Aromatique Room Spray</h6>
                                    <p>Imbue spaces with evocative scent</p>
                                </div>
                            </div>
                            <div className='item owl-carousel-block border-0' style={{ width: "20rem" }}>
                                <div className='img-box'>
                                    <img src={aesopHomeRoomCythera} alt="" height={280} />
                                </div>
                                <div className='info-box text-center '>
                                    <h6 className='fw-bold'>Cythera Aromatique Room Spray</h6>
                                    <p>Veil of Geranium, warmth of Myrrh</p>
                                </div>
                            </div>
                            <div className='item owl-carousel-block border-0' style={{ width: "20rem" }}>
                                <div className='img-box'>
                                    <img src={aesopHomeRoom} alt="" height={280} />
                                </div>
                                <div className='info-box text-center'>
                                    <h6 className='fw-bold'>Olous Aromatique Room Spray</h6>
                                    <p>Refreshes the home</p>
                                </div>
                            </div>

                            <div className='item owl-carousel-block border-0' style={{ width: "20rem" }}>
                                <div className='img-box'>
                                    <img src={aesopOtherAesop} alt="" height={280} />
                                </div>
                                <div className='info-box text-center'>
                                    <h6 className='fw-bold'>Aesop: the book</h6>
                                    <p>For design aficionados; curious readers; aesthetes</p>
                                </div>
                            </div>

                        </OwlCarousel>
                    </div>
                </div>
            </section>

            {/* DOMESTIC PLEASURES END */}



        </>
    )
}

export default DomesticPleasures