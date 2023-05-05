import './App.css';
import {Product} from "./components/Products";
import {Home} from "./components/Catalog/Home";
import {Route, Routes} from "react-router-dom";
import React from "react";
import {Header} from "./components/Header";

function App() {
    const review = React.useRef(null)
    const contacts = React.useRef(null)

    const handleClickReview = () =>{
        review.current?.scrollIntoView({behavior:'smooth'})
    }
    const handleClickFooter = () =>{
        contacts.current?.scrollIntoView({behavior:'smooth'})
    }

    return (
        <div>
            <div className='max-w-[1200px] mx-auto bg-amber-50 bg-[#f0e9e9]'>
                <Header handleClickReview={handleClickReview} handleClickFooter={handleClickFooter}/>
                <Routes>
                    <Route path='/' exact element={<Home  review={review}/>}/>
                    <Route path='/products' exact element={<Product/>}/>
                </Routes>
                <footer ref={contacts} className='px-5 py-10'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-3'>
                            <img className='max-w-[40px] w-full h-auto' src="/assets/logo.svg" alt="logo"/>
                            <span className='text-graytext text-[20px] italic'>Чудо-Печь 2023</span>
                        </div>
                        <div className='flex items-center justify-center gap-2'>
                            <div>
                                <svg viewBox="0 0 1024 1024" fill="#000000" className="max-w-[40px] w-full h-auto" version="1.1"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            d="M737.6 934.4c-342.4 0-624.8-258.4-656.8-600.8v-0.8c-0.8-5.6-1.6-12.8-2.4-19.2 0-4.8-0.8-10.4-0.8-14.4 0.8-70.4 36-135.2 95.2-175.2 30.4-20.8 66.4-32.8 103.2-34.4h12.8c63.2 0 123.2 28 163.2 76.8 44 52.8 58.4 123.2 40.8 192-17.6 68-69.6 121.6-138.4 144l-22.4 7.2 14.4 18.4c63.2 80 140 143.2 228.8 188.8l18.4 9.6 4.8-20c16-72 80.8-125.6 158.4-129.6h8c94.4 0 173.6 72 181.6 164.8 2.4 25.6-1.6 51.2-9.6 76-22.4 62.4-77.6 107.2-144 116.8-4.8 0.8-8.8 0.8-13.6 1.6-13.6-2.4-28-1.6-41.6-1.6zM117.6 328c30.4 324 296.8 568 620 568 12.8 0 26.4-0.8 40-1.6h3.2c2.4 0 4.8 0 7.2-0.8 52.8-7.2 96-43.2 114.4-92 7.2-19.2 9.6-39.2 8-60-5.6-72-69.6-130.4-141.6-130.4h-6.4c-62.4 4-115.2 46.4-130.4 105.6-5.6 20.8-27.2 36.8-50.4 36.8-8 0-15.2-1.6-21.6-4.8-110.4-56-204.8-140.8-274.4-244-4-5.6-4-12.8-1.6-18.4 3.2-6.4 9.6-11.2 16.8-12 74.4-4.8 139.2-56 157.6-125.6 15.2-56.8 2.4-115.2-33.6-158.4-33.6-40-82.4-63.2-134.4-63.2H280c-30.4 1.6-60 12-84.8 28.8-48.8 32-78.4 86.4-78.4 144V312c-0.8 4.8 0 10.4 0.8 16z"
                                            fill=""></path>
                                    </g>
                                </svg>
                            </div>
                            <div>
                                <a href="tel:+79999999999">+7 999 999-99-99</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default App;
