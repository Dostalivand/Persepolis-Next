import React from 'react'
import { FaRegArrowAltCircleLeft } from "react-icons/fa"

interface SectionHeaderProps {
    title: string
    btn?: boolean
    btntitle?: string
    icons?: React.ReactNode
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
    title,
    btn = false,
    btntitle,
    icons
}) => {
    return (
        <div className='mx-auto max-w-full px-5 md:px-9 lg:px-15' dir='rtl'>
            <div className='flex justify-between items-center'>
                {/* SectionHeader With Icon & Title */}
                <div className='flex items-center justify-center gap-1.5'>
                    <span className='text-2xl md:text-3xl text-orange-400'>{icons}</span>
                    <span className='text-xl lg:text-2xl xl:text-3xl text-gray-200 dark:text-gray-100 font-Kalameh'>{title}</span>
                </div>
                {/* Button With Icon & Title */}
                {
                    btn ? (
                        <div className='flex items-center justify-center gap-1 pt-3 md:mt-0'>
                            <span className='text-sm md:text-base mt-0.5 cursor-pointer hover:text-rose-600 transition-colors duration-300 text-gray-200'>{btntitle}</span>
                            <span className='text-sm md:text-base text-rose-600'><FaRegArrowAltCircleLeft /></span>
                        </div>
                    ) : null
                }
            </div>
        </div>
    )
}

export default SectionHeader
