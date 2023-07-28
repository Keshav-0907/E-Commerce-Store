import React from 'react'
import Link from 'next/link';
import { BsChevronDown } from 'react-icons/bs'

const data = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "About", url: "/about" },
    { id: 3, name: "Categories", subMenu: true },
    { id: 4, name: "Contact", url: "/contact" },

];

const subMenuData = [
    { id: 1, name: "Jordan", doc_count: 11 },
    { id: 2, name: "Sneakers", doc_count: 8 },
    { id: 3, name: "Running shoes", doc_count: 64 },
    { id: 4, name: "Football shoes", doc_count: 107 },
];

const Menumobile = ({ showCatMenu, setshowCatMenu, setMobileMenu }) => {
    return (
        <ul className='flex flex-col md:hidden absolute left-0 font-bold top-[100px] w-full h-[calx(100vh-50px)] bg-white border-t text-black'>
            {data.map((item) => {
                return (
                    <React.Fragment key={item.id}>
                        {!!item?.subMenu ? (
                            <li className='cursor-pointer flex border-b py-2 px-5 relative flex-col'
                               onClick={()=>setshowCatMenu(!showCatMenu)}
                            >
                                <div className='flex justify-between items-center'>
                                    {item.name}
                                    <BsChevronDown size={14} />
                                </div>

                                {showCatMenu && (
                                    <ul className='bg-black/[0.05] -mx-5 mt-4 -mb-4'>
                                        {
                                            subMenuData.map((subitem) => {
                                                return (
                                                    <Link href="/"
                                                        key={subitem.id}
                                                        onClick={() =>{
                                                            setshowCatMenu(false)
                                                            setMobileMenu(false)
                                                        }}>

                                                        <li className="py-2 px-5 border-t flex justify-between">
                                                            {subitem.name}
                                                            <span className='text-sm text-gray-500'>
                                                                ({subitem.doc_count})
                                                            </span>
                                                        </li>

                                                    </Link>
                                                )
                                            })
                                        }
                                    </ul>
                                )}
                            </li>
                        ) : (
                            <Link className='cursor-pointer py-2 border-b px-5' onClick={() => setMobileMenu(false)} href={item.url}>  {item.name} </Link>
                        )}
                    </React.Fragment>
                )
            })}
        </ul>
    )
}

export default Menumobile 