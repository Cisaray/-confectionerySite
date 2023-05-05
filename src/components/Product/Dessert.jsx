import React from "react";

export const Dessert = () => {
    const [show, setShow] = React.useState(false)
    return (
        <>
            <div className='flex flex-col shadow-[0px_0px_9px_0px_#99999740] rounded-xl'>
                <img className='rounded-xl' src="/assets/product1.JPG" alt="img"/>
                <p className='font-semibold text-[18px] mt-3 px-2'>Название товара</p>
                <p className='text-[14px] text-justify px-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error,
                    iusto!</p>
                <div className='text-center'>
                    <button
                        onClick={() => setShow(true)}
                        className='mt-6 px-[30px] py-[8px] mb-3 border-2 border-[graytext] rounded-xl hover:bg-[rgba(255,97,85,1)] hover:text-amber-50 transition-colors'>Узнать
                        больше
                    </button>
                </div>
            </div>
            <div onClick={() => setShow(false)}
                 className={show ? 'modal active' : 'modal'}>
                <div onClick={e => e.stopPropagation()}
                     className="modal_content p-5 rounded-xl bg-amber-50 max-w-[800px] overflow-auto">
                    <div className='flex justify-between items-center'>
                        <h3 className='text-center font-semibold text-[30px] mt-3'>Название товара</h3>
                        <img onClick={()=>setShow(false)} className='cursor-pointer max-w-[30px] w-full h-auto' src="/assets/close.svg" alt=""/>
                    </div>
                    <div className='max-w-[400px] mt-5 mx-auto'>
                        <img className='rounded-xl max-w-full w-full h-auto' src="/assets/product1.JPG" alt="img"/>
                    </div>
                    <h3 className='mt-3 text-[28px] font-semibold'>Описание</h3>
                    <p className='text-[20px] text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Beatae libero natus quam qui quis reiciendis sed! Accusantium amet aspernatur autem
                        dolor eius hic incidunt ipsa itaque iusto laboriosam nesciunt, nulla obcaecati officiis quas
                        quis quos suscipit temporibus ut. Alias aliquam doloremque ipsa mollitia optio placeat quia
                        ratione unde vel vitae.</p>
                    <h3 className='mt-3 text-[28px] font-semibold'>Состав: </h3>
                    <p className='text-[20px] text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Beatae libero natus quam qui quis reiciendis sed! Accusantium amet aspernatur autem
                        dolor eius hic incidunt ipsa itaque iusto laboriosam nesciunt, nulla obcaecati officiis quas
                        quis quos suscipit temporibus ut. Alias aliquam doloremque ipsa mollitia optio placeat quia
                        ratione unde vel vitae.</p>

                </div>
            </div>
        </>
    )
}