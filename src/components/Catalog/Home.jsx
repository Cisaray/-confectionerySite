import {Link} from "react-router-dom";

export const Home = ({review}) => {
    return (
        <>
            <main>
                {/*Section 1*/}
                <section className='max-w-[908px] mx-auto text-center mt-2 pb-5 px-5'>
                    <p className='text-graytext font-medium italic text-[42px] sm:text-[35px]'>Hi there! We are the
                        new kids on the block
                        and we build awesome websites and mobile apps.</p>
                </section>
                {/*Section 2*/}
                <section className='bg-firstBack bg-cover bg-center px-5 pb-5'>
                    <div className='text-center pt-[100px] max-w-[570px] mx-auto'>
                        <h2 className='italic font-semibold text-[#f0e9e9] text-[40px]'>SERVICES WE PROVIDE</h2>
                        <p className='text-[#f0e9e9] mt-6 text-[18px] italic'>We are working with both individuals
                            and businesses from all over the globe
                            to create awesome websites and applications.</p>
                    </div>
                    <div className="grid grid-cols-3 px-[195px] items-center mt-10 gap-10 sm:grid-cols-1 md:px-[30px]">
                        <div
                            className='flex flex-col items-center shadow-[20px_20px_4px_0px_rgba(0,4,7,0.5)] backdrop-blur-xl p-5 rounded-[20px] h-[100%]'>
                            <div>
                                <img className='max-w-[65%] w-full h-auto mx-auto ' src="/assets/icon1.svg" alt="icon1"/>
                            </div>
                            <div className='text-center'>
                                <h3 className='text-[#f0e9e9] italic text-[20px] mt-2'>Название услуги</h3>
                                <p className='text-[#f0e9e9] italic mt-2'>Lorem ipsum dolor sit amet,
                                    consectetuer adipiscing elit,
                                    sed diam nonummy nibh.(описание услуги)</p>
                            </div>
                        </div>
                        <div
                            className='flex flex-col items-center backdrop-blur-xl shadow-[20px_20px_4px_0px_rgba(0,4,7,0.5)] p-5 rounded-[20px] h-[100%]'>
                            <div>
                                <img className='max-w-[65%] w-full h-auto mx-auto' src="/assets/icon2.svg" alt="icon1"/>
                            </div>
                            <div className='text-center'>
                                <h3 className='text-[#f0e9e9] italic text-[20px] mt-2'>Название услуги</h3>
                                <p className='text-[#f0e9e9] italic mt-2'>Lorem ipsum dolor sit amet,
                                    consectetuer adipiscing elit,
                                    sed diam nonummy nibh.(описание услуги)</p>
                            </div>
                        </div>
                        <div
                            className='flex flex-col items-center backdrop-blur-xl shadow-[20px_20px_4px_0px_rgba(0,4,7,0.5)] p-5 rounded-[20px] h-[100%]'>
                            <div>
                                <img className='max-w-[65%] w-full h-auto mx-auto' src="/assets/icon3.svg" alt="icon1"/>
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
                        <div className='text-center pt-[100px] max-w-[570px] mx-auto xs:pt-[40px]'>
                            <h2 className='italic font-semibold text-graytext text-[40px] sm:text-[30px] xs:text-[20px]'>НАША ЗАМЕЧАТЕЛЬНАЯ
                                КОМАНДА</h2>
                            <p className='text-graytext mt-6 text-[18px] italic sm:mt-3 xs:text-[14px]'>Наша команда кондитеров одна из
                                лучших в своём деле</p>
                        </div>
                        <div className='mt-[75px] grid grid-cols-4 items-center justify-center md:mt-[50px] md:grid-cols-2 md:gap-5 sm:mt-[25px] sm:grid-cols-1'>
                            <div>
                                <div>
                                    <img className='max-w-[120px] mx-auto rounded-[50%]' src="/assets/worker1.jpg"
                                         alt="worker1"/>
                                </div>
                                <div className='text-center  mt-[34px] sm:mt-[25px] xs:mt-[15px]'>
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
                                <div className='text-center  mt-[34px] sm:mt-[25px] xs:mt-[15px]'>
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
                                <div className='text-center  mt-[34px] sm:mt-[25px] xs:mt-[15px]'>
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
                                <div className='text-center  mt-[34px] sm:mt-[25px] xs:mt-[15px]'>
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
                        <div className='text-center pt-[100px] max-w-[570px] mx-auto xs:pt-[40px]'>
                            <h2 className='italic font-semibold text-graytext text-[40px] xs:text-[25px]'>НАШИ ПРОДУКТЫ</h2>
                            <p className='text-graytext mt-6 text-[18px] italic'>Neque porro quisquam est, qui
                                dolorem ipsum quia dolor sit amet
                                consectetur, adipisci velit, sed quia non numquam</p>
                        </div>
                        <div className='mt-10 grid grid-cols-3 items-center sm:grid-cols-1 sm:gap-5'>
                            <div className='max-w-[75%] mx-auto'>
                                <div>
                                    <img className='max-w-full w-full h-auto mx-auto rounded-[40px]' src="/assets/product1.JPG"
                                         alt="product1"/>
                                </div>
                                <div className='mt-2'>
                                    <p className='italic text-[24px] font-semibold'>Название товара</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, id?</p>
                                </div>
                            </div>
                            <div className='max-w-[75%] mx-auto'>
                                <div>
                                    <img className='max-w-full w-full h-auto mx-auto rounded-[40px]' src="/assets/product2.JPG"
                                         alt="product1"/>
                                </div>
                                <div className='mt-2'>
                                    <p className='italic text-[24px] font-semibold'>Название товара</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, id?</p>
                                </div>
                            </div>
                            <div className='max-w-[75%] mx-auto'>
                                <div>
                                    <img className='max-w-full w-full h-auto mx-auto rounded-[40px]' src="/assets/product2.JPG"
                                         alt="product1"/>
                                </div>
                                <div className='mt-2'>
                                    <p className='italic text-[24px] font-semibold'>Название товара</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, id?</p>
                                </div>
                            </div>
                        </div>
                        <div className='text-center mt-[60px]'>
                            <Link to='/products'>
                                <a className='px-[36px] py-[12px] border-2 rounded-xl italic border-[graytext] hover:text-white hover:bg-[rgba(255,97,85,1)] transition-colors xs:px-[25px]'
                                   href="src/components/Catalog/Home#">Каталог продуктов</a>
                            </Link>
                        </div>

                    </div>
                </section>
                {/*Section 5*/}
                <section className='bg-thirdBack bg-cover gb-center px-5 pb-10'>
                    <div className='max-w-[1070px] mx-auto'>
                        <div className='text-center pt-[100px] max-w-[570px] mx-auto sm:pt-[60px] xs:pt-[40px]'>
                            <h2 ref={review} className='italic font-semibold text-graytext text-[40px] sm:text-[30px] xs:text-[25px]'>ОТЗЫВЫ О НАС</h2>
                            <p className='text-graytext mt-6 text-[18px] italic xs:text-[14px]'>Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Architecto aut autem cum eum excepturi id illum ipsa
                                odio tempora voluptates.</p>
                        </div>
                        <div className='grid grid-cols-2 items-center gap-10 mt-[50px] sm:grid-cols-1 sm:gap-5'>
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
                                    <p className='mt-5 text-graytext font-semibold text-[24px] sm:mt-1 xs:text-[16px]'>Chanel Iman</p>
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
                                    <p className='mt-5 text-graytext font-semibold text-[24px] xs:text-[16px]'>ADRIANA LIMA</p>
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
                                    <p className='mt-5 text-graytext font-semibold text-[24px] xs:text-[16px]'>ANNE HATHAWAY</p>
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
                                    <p className='mt-5 text-graytext font-semibold text-[24px] xs:text-[16px]'>EMMA STONE</p>
                                    <p className='text-graytext'>Co-Founder of Shazam</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
        </>
    )
}