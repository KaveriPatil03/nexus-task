import React from 'react'
import '../index.css'

import interiorFragrance from '../img/interior-fragrance.avif';
import aesopOnVitamins from '../img/aesop-on-vitamins.webp';
import corporateGifts from '../img/corporate_gifts.webp';
import storeLocator1 from '../img/store_locator_1.jpg';
import storeLocator2 from '../img/store_locator_2.jpg';
import storeLocator3 from '../img/store_locator_3.webp';
import SuperlativeSelection from './SuperlativeSelection';
import DomesticPleasures from './DomesticPleasures';
import SkinCare from './SkinCare';

const Home = () => {
  return (
    <>

      {/* SLIDER START */}
      <div id="carouselExample" className="carousel slide carousel-slider">
        <div className="carousel-inner">
          <div className="row">
            <div className="col-sm-2 col-lg-2 col-md-2 text-white pt-5 mt-5 ps-5">
              <h1>Aesop</h1>
            </div>
            <div className="col-sm-5 col-lg-4 col-md-4 text-white mt-5 pt-5">
              <h6>Home Fragrance</h6>
              <h2 className='mt-3'>Introducing Aromatique Incense</h2>
              <p className='mt-3'>Discover a trio of transportive aromas for wandering minds—Murasaki, Kagerou and Sarashina Aromatique Incense—and the Bronze Incense Holder that elevates their unassuming form.</p>
              <button type="button" className="btn btn-outline-light rounded-0 py-3 mt-3">Explore the collection <span className='ps-5 ms-5'><i className="fa-solid fa-arrow-right"></i></span> </button>
            </div>

          </div>
        </div>

      </div>
      {/* SLIDER END */}

      {/* DOMESTIC PLEASURES START */}
      <DomesticPleasures />
      {/* DOMESTIC PLEASURES START */}

      {/* INTERIOR FRAGRACES START */}
      <div className=" my-5 py-5">
        <div className="interior-fragrance">
          <div className="row">
            <div className="col-sm-12 col-md-7 col-lg-7">
              <div className="interior-fragrance-img">
                <img src={interiorFragrance} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-sm-12 col-md-5 col-lg-5 px-5">
              <div className="interior-fragrance-title">
                <h2 className='px-5'>Interior fragrances to lift the mood</h2>
                <p className='pt-3 px-5'>Ideal for home or office spaces in need of refreshment, our Home range comprises a number of fragrant preparations, from incense to room sprays.</p>
                <div className="px-5">
                  <button type="button" className="btn btn-outline-dark rounded-0 py-3 mt-3">Browse Scented Home <span className='ps-5 ms-5'><i className="fa-solid fa-arrow-right"></i></span> </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* INTERIOR FRAGRACES END */}

      {/* SUPERLATIE SELECTION START */}
      <SuperlativeSelection />
      {/* SUPERLATIE SELECTION START */}

      {/* AESOP ON VITAMINS START  */}
      <div className=" my-5 py-5">
        <div className="aesop-vitamins">
          <div className="row">

            <div className="col-sm-12 col-md-5 col-lg-5 px-5">
              <div className="aesop-vitamins-title">
                <p className='px-5'>The Athenaeum</p>
                <h2 className='px-5'>Aesop on Vitamins</h2>
                <p className='pt-3 px-5'>Among those we often return to in our formulations are a range of ingredients known to benefit the skin—vitamins C, B3, E and Provitamin B5. </p>
                <div className="px-5">
                  <button type="button" className="btn btn-outline-dark rounded-0 py-3 mt-3">Discover Vitamins <span className='ps-5 ms-5'><i className="fa-solid fa-arrow-right"></i></span> </button>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-7 col-lg-7">
              <div className="aesop-vitamins-img">
                <img src={aesopOnVitamins} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* AESOP ON VITAMINS END  */}

      {/* SKIN CARE START */}
      <SkinCare />
      {/* SKIN CARE START */}

      {/* CORPORATE GIFTS START */}
      <div className=" my-5 py-5">
        <div className="corporate-gifts">
          <div className="row">
            <div className="col-sm-12 col-md-7 col-lg-7">
              <div className="corporate-gifts-img">
                <img src={corporateGifts} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-sm-12 col-md-5 col-lg-5 px-5">
              <div className="corporate-gifts-title">
                <p className='px-5'>Tokens of appreciation</p>
                <h2 className='px-5'>Corporate gifts</h2>
                <p className='pt-3 px-5'>Find a variety of gift-giving options, ideal for honouring treasured colleagues and clients. Trained consultants will be pleased to guide your selections and assist with delivery. </p>
                <div className="px-5">
                  <button type="button" className="btn btn-outline-dark rounded-0 py-3 mt-3">Learn more about this service <span className='ps-5 ms-5'><i className="fa-solid fa-arrow-right"></i></span> </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* CORPORATE GIFTS END */}

      {/* STORE LOCATOR START */}
      <div className=" mt-5 mb-3 py-5">
        <div className="store-locator">
          <div className="row">

            <div className="col-sm-12 col-md-5 col-lg-5 px-5">
              <div className="store-locator-title">
                <h2 className='px-5'>Store locator</h2>
                <p className='pt-3 px-5'>Our consultants are available to host you in-store and provide tailored guidance on gift purchases. </p>
                <div className="px-5">
                  <button type="button" className="btn btn-outline-dark rounded-0 py-3 mt-3">Find a nearby store <span className='ps-5 ms-5'><i className="fa-solid fa-arrow-right"></i></span> </button>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-7 col-lg-7">
              <div className="store-locator-img">
                <div id="storeLocator" className="carousel slide">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src={storeLocator1} className="d-block w-100 img-fluid" alt="..." />
                    </div>
                    <div className="carousel-item">
                      <img src={storeLocator2} className="d-block w-100 img-fluid" alt="..." />
                    </div>
                    <div className="carousel-item">
                      <img src={storeLocator3} className="d-block w-100 img-fluid" alt="..." />
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#storeLocator" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#storeLocator" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className='text-center mt-5'>
            <p className='text-secondary'>Aesop Hollywood Road</p>
          </div>
        </div>
      </div>
      {/* STORE LOCATOR END */}

    </>
  )
}

export default Home