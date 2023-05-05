import {Dessert} from "./Product/Dessert";


export const Product = () =>{
    window.scroll(0,0)
    return(
        <div className='max-w-[1100px] mx-auto'>
            <div className='mt-5 pb-10'>
                <h3 className='text-graytext text-[42px] italic'>Наши десерты самые лучшие!</h3>
                <p className='text-graytext text-[18px] italic'>Ознакомьтесь с нашим каталогом и выберите то, что вам по душе!</p>
            </div>
            <div className='max-w-[1095px] border-2 border-[graytext] rounded-xl'>
                <div className='max-w-[1080px] border-2 border-[graytext] rounded-xl m-2'>
                    <div className='mt-2 max-w-[300px] mx-auto'>
                        <input className='w-full py-[12px] px-2 bg-[#f0e3d8] rounded-xl focus:outline-[graytext]' type="text" placeholder='Искать...'/>
                    </div>
                    <div>
                        <h3 className='text-graytext text-[42px] italic px-5'>Каталог</h3>
                    </div>
                    <div className='grid grid-cols-4 items-center p-5 mt-5 gap-4'>
                        <Dessert/>
                        <Dessert/>
                        <Dessert/>
                        <Dessert/>
                        <Dessert/>
                        <Dessert/>
                        <Dessert/>
                        <Dessert/>
                    </div>
                </div>
            </div>
        </div>
    )
}