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

const Menu = ({ showCatMenu, setshowCatMenu }) => {
    return (
        <ul className='hidden md:flex items-center gap-8 text-black'>
            {data.map((item) => {
                return (
                    <React.Fragment key={item.id}>
                        {item?.subMenu ? (
                            <li className='cursor-pointer flex items-center gap-2 relative'
                                onMouseEnter={() => setshowCatMenu(true)}
                                onMouseLeave={() => setshowCatMenu(false)}
                                 >
                                {item.name}
                                <BsChevronDown size={14} />

                                {showCatMenu && (
                                    <ul className='bg-white absolute top-6 min-w-[250px] text-center border border-gray-300 rounded-lg'>
                                        {
                                            subMenuData.map((subitem, c) => {
                                                return (
                                                    <Link href={`/category/${c.slug}`} key={subitem.id} onClick={() => setshowCatMenu(false)}>
                                                        <li className='hover:bg-black/[0.3] h-12 px-3 rounded-sm flex justify-between items-center '>
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
                            <Link className='cursor-pointer' href={item.url}>  {item.name} </Link>
                        )}
                    </React.Fragment>
                )
            })}
        </ul>
    )
}

export default Menu