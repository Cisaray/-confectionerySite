import React from "react";

export const Dessert = ({title, description, compound, image}) => {
    const [show, setShow] = React.useState(false)
    return (
        <>
            <div className='flex flex-col shadow-[0px_0px_9px_0px_#99999740] rounded-xl h-[100%]'>
                <img className='rounded-xl' src={image} alt="img"/>
                <p className='font-semibold text-[20px] mt-4 px-2'>{title}</p>
                <p className='text-[16px] text-justify px-2'>{description}</p>
                <div className='mx-auto pt-[40px] my-auto pb-3'>
                    <button
                        onClick={() => setShow(true)}
                        className='px-[30px] py-[8px] border-2 border-[graytext] rounded-xl hover:bg-[rgba(255,97,85,1)] hover:text-amber-50 transition-colors'>Узнать
                        больше
                    </button>
                </div>
            </div>
            <div onClick={() => setShow(false)}
                 className={show ? 'modal active' : 'modal'}>
                <div onClick={e => e.stopPropagation()}
                     className="modal_content p-5 rounded-xl bg-amber-50 max-w-[1000px] overflow-auto">
                    <div className='flex justify-between items-center'>
                        <h3 className='text-center font-semibold text-[30px] mt-3'>{title}</h3>
                        <img onClick={()=>setShow(false)} className='cursor-pointer max-w-[30px] w-full h-auto' src="/assets/close.svg" alt=""/>
                    </div>
                    <div className='max-w-[600px] mt-5 mx-auto'>
                        <img className='rounded-xl max-w-full w-full h-auto' src={image} alt="img"/>
                    </div>
                    <h3 className='mt-3 text-[28px] font-semibold'>Описание:</h3>
                    <p className='text-[20px] text-justify'>{description}</p>
                    <h3 className='mt-3 text-[28px] font-semibold'>Состав: </h3>
                    <p className='text-[20px] text-justify'>{compound}</p>
                </div>
            </div>
        </>
    )
}