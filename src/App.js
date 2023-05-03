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
                                        <img className='max-w-[120px] mx-auto rounded-[50%]' src="/assets/worker1.jpg" alt="worker1"/>
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
                                        <img className='max-w-[120px] mx-auto rounded-[50%]' src="/assets/worker2.jpg" alt="worker2"/>
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
                                        <img className='max-w-[120px] mx-auto rounded-[50%]' src="/assets/worker3.jpg" alt="worker1"/>
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
                                        <img className='max-w-[120px] mx-auto rounded-[50%]' src="/assets/worker4.jpg" alt="worker1"/>
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
                                <a className='px-[36px] py-[12px] border-2 rounded-xl italic border-[graytext] hover:text-white hover:bg-[rgba(255,97,85,1)] transition-colors' href="#">Каталог продуктов</a>
                            </div>

                        </div>
                    </section>

                </main>
            </div>
        </div>
    );
}

export default App;
