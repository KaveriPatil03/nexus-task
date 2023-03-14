import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import aesopFragranceRozu from '../img/Aesop_Fragrance_Rozu.webp';
import aesopKitsRick from '../img/Aesop_Kits_Rick.webp';
import aesopFragranceMiraceti from '../img/Aesop_Fragrance_Miraceti.webp';
import aesopFragranceMarrakech from '../img/Aesop_Fragrance_Marrakech.webp';
import aesopBodyGeranium from '../img/Aesop-Body-Geranium.webp';
import aesopSkinSublime from '../img/Aesop_Skin_Sublime.png';

const SuperlativeSelection = () => {
    // const  options = {
    //     responsive:{
    //         0:{
    //             items:1
    //         },
    //         600:{
    //             items:3
    //         },
           
    //     }
    // }
    return (
        <>
            {/* SUPERLATIVE SELECTION START */}

            <section>
                <div className="container-fluid px-5">
                    <div className="owl-carousel-info-title mb-5">
                        <h3 className='ps-4'>A superlative selection</h3>
                    </div>
                    <div className="owl-carousel-info ms-5 pt-4">
                        <OwlCarousel className='owl-theme'
                            items={3}
                            loop
                            margin={10}
                            dots={false}
                            responsiveRefreshRate = {200}
                            // responsiveClass = {options.responsive}
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
                            // navText= {['']}
                            nav                            
                            >

                            <div className='item owl-carousel-block border-0' style={{width: "20rem"}}>
                                <div className='img-box'>
                                    <img src={aesopFragranceRozu} alt="" className='img-fluid img-fluid'/>
                                </div>
                               
                                <div className='info-box text-center'>
                                   <h6 className="fw-bold">Rozu Eau de Partum</h6>
                                    <p>Both brazen and delicate</p>
                                </div>
                            </div>
                          

                            <div className='item owl-carousel-block border-0' style={{width: "20rem"}}>
                                <div className='img-box mt-5 pt-5'>
                                    <img src={aesopKitsRick} alt="" className='img-fluid' />
                                </div>
                                <div className='info-box text-center pt-4'>
                                   <h6 className="fw-bold">Aesop & Rick Owens Travel Kit</h6>
                                    <p>Fragrant essentials for journeys near or far </p>
                                </div>
                            </div>

                            <div className='item owl-carousel-block border-0' style={{width: "20rem"}}>
                                <div className='img-box'>
                                    <img src={aesopFragranceMiraceti} alt="" className=' img-fluid'/>
                                </div>
                                <div className='info-box text-center'>
                                   <h6 className="fw-bold">Miraceti Eau de Parfum</h6>
                                    <p>Resinous, woody, spicy fragrance</p>
                                </div>
                            </div>
                            
                            <div className='item owl-carousel-block border-0' style={{width: "20rem"}}>
                                <div className='img-box'>
                                    <img src={aesopFragranceMarrakech} alt="" className=' img-fluid'/>
                                </div>
                                <div className='info-box text-center'>
                                   <h6 className="fw-bold">Marrakech Intense Eau de Parfum</h6>
                                    <p>Woody, opulent, floral fragrance</p>
                                </div>
                            </div>

                            <div className='item owl-carousel-block border-0' style={{width: "20rem"}}>
                                <div className='img-box'>
                                    <img src={aesopBodyGeranium} alt="" className='' height={300}/>
                                </div>
                                <div className='info-box text-center pt-3'>
                                   <h6 className="fw-bold">Geranium Leaf Body Cleanser</h6>
                                    <p>A gentle, invigorating gel cleanser</p>
                                </div>
                            </div>

                            <div className='item owl-carousel-block border-0' style={{width: "20rem"}}>
                                <div className='img-box mt-5 pt-5'>
                                    <img src={aesopSkinSublime} alt="" className='mt-4  img-fluid'/>
                                </div>
                                <div className='info-box text-center pt-4'>
                                   <h6 className="fw-bold">Sublime Replenishing Night Masque</h6>
                                    <p>Balances the appearance of skin</p>
                                </div>
                            </div>
                            
                        </OwlCarousel>
                    </div>
                </div>
            </section>

            {/* SUPERLATIVE SELECTION END */}



        </>
    )
}

export default SuperlativeSelection