import './App.css';

function App() {
    return (
        <div>
            <div className='max-w-[1200px] mx-auto bg-amber-50 bg-[#f0e9e9]'>
                <header className='flex justify-between mt-5 py-[40px] px-[200px] items-center sm:flex-col'>
                    <div>
                        <img src="" alt="logo"/>
                    </div>
                    <div>
                        <ul className='flex gap-3 items-center sm:pt-3 xs:flex-col'>
                            <li><a
                                className='text-[##3f3a47] text-[16px] italic hover:text-[#767080] transition-colors relative after:absolute after:h-[1px] after:w-full after:left-0 after:-bottom-1 after:bg-[graytext] after:scale-0 hover:after:scale-100 after:transition-transform'
                                href="#">HOME</a></li>
                            <li><a
                                className='text-[##3f3a47] text-[16px] italic hover:text-[#767080] transition-colors relative after:absolute after:h-[1px] after:w-full after:left-0 after:-bottom-1 after:bg-[graytext] after:scale-0 hover:after:scale-100 after:transition-transform'
                                href="#">PRODUCTS</a></li>
                            <li><a
                                className='text-[##3f3a47] text-[16px] italic hover:text-[#767080] transition-colors relative after:absolute after:h-[1px] after:w-full after:left-0 after:-bottom-1 after:bg-[graytext] after:scale-0 hover:after:scale-100 after:transition-transform'
                                href="#">REVIEWS</a></li>
                            <li><a
                                className='text-[##3f3a47] text-[16px] italic hover:text-[#767080] transition-colors relative after:absolute after:h-[1px] after:w-full after:left-0 after:-bottom-1 after:bg-[graytext] after:scale-0 hover:after:scale-100 after:transition-transform'
                                href="#">CONTACTS</a></li>
                        </ul>
                    </div>

                </header>
                <main>
                    {/*Section 1*/}
                    <section className='max-w-[908px] mx-auto text-center mt-2 pb-5 px-5'>
                        <p className='text-graytext font-medium italic text-[42px] sm:text-[35px]'>Hi there! We are the
                            new kids on the block
                            and we build awesome websites and mobile apps.</p>
                        <button
                            className='px-[30px] py-[12px] border-2 border-[graytext] mt-4 rounded-xl hover:text-white hover:bg-[rgba(255,97,85,1)] transition-colors'>WORK
                            WITH US!
                        </button>
                    </section>
                    {/*Section 2*/}
                    <section className='bg-firstBack bg-cover bg-center px-5 pb-5'>
                        <div className='text-center pt-[100px] max-w-[570px] mx-auto'>
                            <h2 className='italic font-semibold text-[#f0e9e9] text-[40px]'>SERVICES WE PROVIDE</h2>
                            <p className='text-[#f0e9e9] mt-6 text-[18px] italic'>We are working with both individuals
                                and businesses from all over the globe
                                to create awesome websites and applications.</p>
                        </div>
                        <div className="flex px-[195px] items-center mt-10 gap-10 md:flex-col">
                            <div
                                className='flex flex-col items-center backdrop-blur p-5 rounded-[20px]'>
                                <div>
                                    <img className='max-w-[120px] w-full h-auto' src="/assets/icon1.jpg" alt="icon1"/>
                                </div>
                                <div className='text-center'>
                                    <h3 className='text-[#f0e9e9] italic text-[20px] mt-2'>Название услуги</h3>
                                    <p className='text-[#f0e9e9] italic mt-2'>Lorem ipsum dolor sit amet,
                                        consectetuer adipiscing elit,
                                        sed diam nonummy nibh.(описание услуги)</p>
                                </div>
                            </div>
                            <div
                                className='flex flex-col items-center backdrop-blur p-5 rounded-[20px]'>
                                <div>
                                    <img className='max-w-[120px] w-full h-auto' src="/assets/icon2.jpg" alt="icon1"/>
                                </div>
                                <div className='text-center'>
                                    <h3 className='text-[#f0e9e9] italic text-[20px] mt-2'>Название услуги</h3>
                                    <p className='text-[#f0e9e9] italic mt-2'>Lorem ipsum dolor sit amet,
                                        consectetuer adipiscing elit,
                                        sed diam nonummy nibh.(описание услуги)</p>
                                </div>
                            </div>
                            <div
                                className='flex flex-col items-center backdrop-blur p-5 rounded-[20px]'>
                                <div>
                                    <img className='max-w-[120px] w-full h-auto' src="/assets/icon3.jpg" alt="icon1"/>
                                </div>
                                <div className='text-center'>
                                    <h3 className='text-[#f0e9e9] italic text-[20px] mt-2'>Название услуги</h3>
                                    <p className='text-[#f0e9e9] italic mt-2'>Lorem ipsum dolor sit amet,
                                        consectetuer adipiscing elit,
                                        sed diam nonummy nibh.(описание услуги)</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*Section 3*/}
                    <section className='px-5 pb-10'>
                        <div className='max-w-[1040px] mx-auto'>
                            <div className='text-center pt-[100px] max-w-[570px] mx-auto'>
                                <h2 className='italic font-semibold text-graytext text-[40px]'>НАША ЗАМЕЧАТЕЛЬНАЯ
                                    КОМАНДА</h2>
                                <p className='text-graytext mt-6 text-[18px] italic'>Наша команда кондитеров одна из
                                    лучших в своём деле</p>
                            </div>
                            <div className='mt-[75px] grid grid-cols-4 items-center justify-center'>
                                <div>
                                    <div>
                                        <img className='max-w-[120px] mx-auto rounded-[50%]' src="/assets/worker1.jpg"
                                             alt="worker1"/>
                                    </div>
                                    <div className='text-center  mt-[34px]'>
                                        <span className='font-bold text-[24px]'>Иван Иванов</span>
                                        <p className='text-blue-400'>Должность</p>
                                        <p className='m-2'>Lorem ipsum dolor sit amet,
                                            consectetuer adipiscing elit,
                                            sed diam nonummy nibh
                                            euismod tincidunt ut laoreet
                                            dolore magna.</p>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <img className='max-w-[120px] mx-auto rounded-[50%]' src="/assets/worker2.jpg"
                                             alt="worker2"/>
                                    </div>
                                    <div className='text-center  mt-[34px]'>
                                        <span className='font-bold text-[24px]'>Люда Иванова</span>
                                        <p className='text-blue-400'>Должность</p>
                                        <p className='m-2'>Lorem ipsum dolor sit amet,
                                            consectetuer adipiscing elit,
                                            sed diam nonummy nibh
                                            euismod tincidunt ut laoreet
                                            dolore magna.</p>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <img className='max-w-[120px] mx-auto rounded-[50%]' src="/assets/worker3.jpg"
                                             alt="worker1"/>
                                    </div>
                                    <div className='text-center  mt-[34px]'>
                                        <span className='font-bold text-[24px]'>Иван Иванов</span>
                                        <p className='text-blue-400'>Должность</p>
                                        <p className='m-2'>Lorem ipsum dolor sit amet,
                                            consectetuer adipiscing elit,
                                            sed diam nonummy nibh
                                            euismod tincidunt ut laoreet
                                            dolore magna.</p>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <img className='max-w-[120px] mx-auto rounded-[50%]' src="/assets/worker4.jpg"
                                             alt="worker1"/>
                                    </div>
                                    <div className='text-center  mt-[34px]'>
                                        <span className='font-bold text-[24px]'>Иван Иванов</span>
                                        <p className='text-blue-400'>Должность</p>
                                        <p className='m-2'>Lorem ipsum dolor sit amet,
                                            consectetuer adipiscing elit,
                                            sed diam nonummy nibh
                                            euismod tincidunt ut laoreet
                                            dolore magna.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*Section 4*/}
                    <section className='px-5 pb-10'>
                        <div className='max-w-[1100px] mx-auto'>
                            <div className='text-center pt-[100px] max-w-[570px] mx-auto'>
                                <h2 className='italic font-semibold text-graytext text-[40px]'>НАШИ ПРОДУКТЫ</h2>
                                <p className='text-graytext mt-6 text-[18px] italic'>Neque porro quisquam est, qui
                                    dolorem ipsum quia dolor sit amet
                                    consectetur, adipisci velit, sed quia non numquam</p>
                            </div>
                            <div className='mt-10 grid grid-cols-3 items-center'>
                                <div className='max-w-[200px] mx-auto'>
                                    <div>
                                        <img className='max-w-[200px] mx-auto rounded-[40px]' src="/assets/product1.JPG"
                                             alt="product1"/>
                                    </div>
                                    <div className='mt-2'>
                                        <p className='italic text-[24px] font-semibold'>Название товара</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, id?</p>
                                    </div>
                                </div>
                                <div className='max-w-[200px] mx-auto'>
                                    <div>
                                        <img className='max-w-[200px] mx-auto rounded-[40px]' src="/assets/product2.JPG"
                                             alt="product1"/>
                                    </div>
                                    <div className='mt-2'>
                                        <p className='italic text-[24px] font-semibold'>Название товара</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, id?</p>
                                    </div>
                                </div>
                                <div className='max-w-[200px] mx-auto'>
                                    <div>
                                        <img className='max-w-[200px] mx-auto rounded-[40px]' src="/assets/product2.JPG"
                                             alt="product1"/>
                                    </div>
                                    <div className='mt-2'>
                                        <p className='italic text-[24px] font-semibold'>Название товара</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, id?</p>
                                    </div>
                                </div>
                            </div>
                            <div className='text-center mt-[60px]'>
                                <a className='px-[36px] py-[12px] border-2 rounded-xl italic border-[graytext] hover:text-white hover:bg-[rgba(255,97,85,1)] transition-colors'
                                   href="#">Каталог продуктов</a>
                            </div>

                        </div>
                    </section>
                    {/*Section 5*/}
                    <section className='bg-thirdBack bg-cover gb-center px-5 pb-10'>
                        <div className='max-w-[1070px] mx-auto'>
                            <div className='text-center pt-[100px] max-w-[570px] mx-auto'>
                                <h2 className='italic font-semibold text-graytext text-[40px]'>ОТЗЫВЫ О НАС</h2>
                                <p className='text-graytext mt-6 text-[18px] italic'>Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit. Architecto aut autem cum eum excepturi id illum ipsa
                                    odio tempora voluptates.</p>
                            </div>
                            <div className='grid grid-cols-2 items-center gap-10 mt-[50px]'>
                                <div className='flex'>
                                    <div className='pr-[15px]'>
                                        <img className='rounded-[50%] max-w-full w-full h-auto'
                                             src="/assets/review1.jpg" alt="review"/>
                                    </div>
                                    <div className='flex flex-col justify-center'>
                                        <p className='text-graytext italic'>“Nullam dapibus blandit orci,
                                            viverra gravida dui lobortis eget. Maecenas
                                            fringilla urna eu nisl scelerisque.”
                                        </p>
                                        <p className='mt-5 text-graytext font-semibold text-[24px]'>Chanel Iman</p>
                                        <p className='text-graytext'>CEO Pinterest</p>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div className='pr-[15px]'>
                                        <img className='rounded-[50%] max-w-full w-full h-auto'
                                             src="/assets/review2.jpg" alt="review"/>
                                    </div>
                                    <div className='flex flex-col justify-center'>
                                        <p className='text-graytext italic'>“Vivamus luctus urna sed urna ultricies
                                            ac tempor dui sagittis. In condimentum
                                            facilisis porta.”
                                        </p>
                                        <p className='mt-5 text-graytext font-semibold text-[24px]'>ADRIANA LIMA</p>
                                        <p className='text-graytext'>Founder of Instagram</p>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div className='pr-[15px]'>
                                        <img className='rounded-[50%] max-w-full w-full h-auto'
                                             src="/assets/review3.jpg" alt="review"/>
                                    </div>
                                    <div className='flex flex-col justify-center'>
                                        <p className='text-graytext italic'>“Vivamus luctus urna sed urna ultricies
                                            ac tempor dui sagittis. In condimentum
                                            facilisis porta.”
                                        </p>
                                        <p className='mt-5 text-graytext font-semibold text-[24px]'>ANNE HATHAWAY</p>
                                        <p className='text-graytext'>Lead Designer at Behance</p>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div className='pr-[15px]'>
                                        <img className='rounded-[50%] max-w-full w-full h-auto'
                                             src="/assets/review4.jpg" alt="review"/>
                                    </div>
                                    <div className='flex flex-col justify-center'>
                                        <p className='text-graytext italic'>“Phasellus non purus vel arcu tempor
                                            commodo. Fusce semper, purus vel luctus
                                            molestie, risus sem cursus neque.”
                                        </p>
                                        <p className='mt-5 text-graytext font-semibold text-[24px]'>EMMA STONE</p>
                                        <p className='text-graytext'>Co-Founder of Shazam</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*footer*/}
                    <footer className='px-5 py-10'>
                        <div className='flex items-center justify-between'>
                            <div>
                                <span className='text-graytext text-[20px] italic'>Чудо-Печь 2023</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <div className='max-w-[50px] mx-auto'>
                                    <svg viewBox="0 0 1024 1024" fill="#000000" className="icon " version="1.1"
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

                </main>
            </div>
        </div>
    );
}

export default App;
