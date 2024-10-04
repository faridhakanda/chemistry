import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Header = () => {
    const contact_list = [
        {
            id: 1,
            title: 'Facebook',
            url: '/facebook.com',
            image: '/facebook.png',
            width: '32',
            height: '32'
        },
        {
            id: 2,
            title: 'Messanger',
            url: '/messenger',
            image: '/messenger.png',
            width: '32',
            height: '32'
        },
        {
            id: 3,
            title: 'Telegram',
            url: '/t.me',
            image: '/telegram.png',
            width: '32',
            height: '32'
        },
        // {
        //     id: 4,
        //     title: 'Tiktok',
        //     url: '/tiktok.com',
        //     image: '/tiktokround.png',
        //     width: '30',
        //     height: '30'
        // }
    ]
    
    
  return (
    <div className="fixed w-full justify-around flex bg-slate-100 shadow-lg p-2">
        <div>
            <Link href="/">
                <Image src="/atom.png" alt="atomic_logo" width="32" height="32" />
            </Link>
        </div>
        <div className="flex gap-2">
            {
                contact_list.map(contact => {
                    return (
                        <div key={contact.id}>
                            
                            <Image src={contact.image} alt={contact.title} width={contact.width} height={contact.height} />
                        </div>
                    )
                })
            }

        </div>
        
    </div>
  )
}

export default Header