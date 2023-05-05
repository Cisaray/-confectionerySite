import {Link} from "react-router-dom";
import React from "react";



export const Header = ({handleClickFooter, handleClickReview}) =>{
    return(
        <header className='flex justify-between mt-5 py-[40px] px-[200px] items-center sm:flex-col'>
            <Link to='/'>
                <div>
                    <img className='max-w-[120px] w-full h-auto' src="/assets/logo.svg" alt="logo"/>
                </div>
            </Link>
            <div>
                <ul className='flex gap-3 items-center sm:pt-3 xs:flex-col'>
                    <Link to='/'>
                        <li><a
                            className='default text-[##3f3a47] text-[16px] italic hover:text-[#767080] transition-colors relative after:absolute after:h-[1px] after:w-full after:left-0 after:-bottom-1 after:bg-[graytext] after:scale-0 hover:after:scale-100 after:transition-transform'
                            href="#">HOME</a></li>
                    </Link>
                    <Link to='/products'>
                        <li><a
                            className='text-[##3f3a47] text-[16px] italic hover:text-[#767080] transition-colors relative after:absolute after:h-[1px] after:w-full after:left-0 after:-bottom-1 after:bg-[graytext] after:scale-0 hover:after:scale-100 after:transition-transform'
                            href="#">PRODUCTS</a></li>
                    </Link>
                    <li><button
                        className='text-[##3f3a47] text-[16px] italic hover:text-[#767080] transition-colors relative after:absolute after:h-[1px] after:w-full after:left-0 after:-bottom-1 after:bg-[graytext] after:scale-0 hover:after:scale-100 after:transition-transform'
                        onClick={handleClickReview} >REVIEWS</button></li>
                    <li><button
                        className='text-[##3f3a47] text-[16px] italic hover:text-[#767080] transition-colors relative after:absolute after:h-[1px] after:w-full after:left-0 after:-bottom-1 after:bg-[graytext] after:scale-0 hover:after:scale-100 after:transition-transform'
                        onClick={handleClickFooter}>CONTACTS</button></li>
                </ul>
            </div>
        </header>
    )
}