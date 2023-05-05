import {Dessert} from "./Product/Dessert";
import React from "react";
import axios from "axios";
import Skelet from "./Product/Skelet";
import debounce from "lodash.debounce";


export const Product = () => {
    const [products, setProducts] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(false)

    const [searchValue, setSearchValue] = React.useState('')
    const [value, setValue] = React.useState('')

    const onClear = () => {
        setSearchValue('')
        setValue('')
        ref.current.focus()
    }

    const updateSearchValue = React.useCallback(
        debounce((str) => {
            setSearchValue(str)
        }, 600), [])

    const onChangeInput = (event) => {
        setValue(event.target.value)
        updateSearchValue(event.target.value);
    }

    const ref = React.useRef()

    const skeletons = [...new Array(4)].map((_, index) => <Skelet key={index}/>)

    React.useEffect(() => {
        (async () => {
            try {
                setIsLoading(true)
                axios.get(`http://localhost:3000/Products?q=${searchValue}`)
                    .then(res => {
                        setProducts(res.data)
                        setIsLoading(false)
                    })
            } catch (error) {
                alert('Ошибка при загрузке данных')
            }
        })()
    }, [searchValue])

    return (
        <div className='max-w-[1100px] mx-auto'>
            <div className='mt-5 pb-10 text-center'>
                <h3 className='text-graytext text-[42px] italic'>Наши десерты самые лучшие!</h3>
                <p className='text-graytext text-[18px] italic'>Ознакомьтесь с нашим каталогом и выберите то, что вам по
                    душе!</p>
            </div>
            <div className='max-w-[1095px] border-2 border-[graytext] rounded-xl'>
                <div className='max-w-[1080px] border-2 border-[graytext] rounded-xl m-2'>
                    <div className='relative mt-2 max-w-[300px] mx-auto'>
                        <input ref={ref} onChange={(event) => onChangeInput(event)}
                               className='w-full py-[12px] px-2 bg-[#f0e3d8] rounded-xl focus:outline-[graytext] mt-5'
                               value={value} type="text" placeholder='Искать по названию...'/>
                        {searchValue && <svg onClick={onClear}
                                             className='max-w-[20px] absolute right-[10px] top-[15px] cursor-pointer'
                                             xmlns="http://www.w3.org/2000/svg"
                                             enableBackground="new 0 0 512 512" id="Layer_1" version="1.1"
                                             viewBox="0 0 512 512">
                            <linearGradient gradientUnits="userSpaceOnUse" id="SVGID_1_" x1="256" x2="256" y1="512"
                                            y2="-9.094947e-013">
                                <stop offset="0"/>
                                <stop offset="1"/>
                            </linearGradient>
                            <circle cx="256" cy="256" fill="url(#SVGID_1_)" r="256"/>
                            <path
                                d="M268.7,256l119.6-119.6c3.2-3.2,3.2-8.3,0-11.4c-3.2-3.2-8.3-3.2-11.4,0L257.2,244.6L135.1,122.5
                    c-3.2-3.2-8.3-3.2-11.4,0c-3.2,3.2-3.2,8.3,0,11.4L245.8,256L123.7,378.1c-3.2,3.2-3.2,8.3,0,11.4c1.6,1.6,3.7,2.4,5.7,2.4
                    c2.1,0,4.1-0.8,5.7-2.4l122.1-122.1l119.6,119.6c1.6,1.6,3.7,2.4,5.7,2.4c2.1,0,4.1-0.8,5.7-2.4c3.2-3.2,3.2-8.3,0-11.4L268.7,256z"
                                fill="#FFFFFF"/>
                        </svg>}
                    </div>
                    <div>
                        <h3 className='text-graytext text-[42px] italic px-5'>Каталог</h3>
                    </div>
                    <div className='grid grid-cols-4 items-center p-5 mt-5 gap-4 lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1'>
                        {isLoading ? skeletons : products.map((item, idx) =>
                            <Dessert
                                key={idx}
                                {...item}
                            />)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}