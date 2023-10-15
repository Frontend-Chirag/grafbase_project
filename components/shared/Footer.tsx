import Image from 'next/image'
import React from 'react'
import FooterColumn from './FooterColumn'
import { footerLinks } from '@/contants'

const Footer = () => {
  return (
    <footer className='flexStart footer'>
      <div className='flex flex-col gap-12 w-full'>
        <div className='flex items-start sm:flex-row flex-col'>
          <Image
            src='/logo-purple.svg'
            width={115}
            height={15}
            alt='logo'
          />
          <p className='text-start text-sm font-normal sm:ml-9 sm:mt-0 mt-5 ml-2 max-w-xs'>
            Flexibble is the world's leading community for creative to share, grow and get hired
          </p>
        </div>

        <div className='flex flex-wrap gap-12'>
          <FooterColumn title={footerLinks[0].title} links={footerLinks[0].links} />
          <div className='flex flex-col gap-4'>
            <FooterColumn title={footerLinks[1].title} links={footerLinks[1].links} />
            <FooterColumn title={footerLinks[2].title} links={footerLinks[2].links} />
          </div>
          <FooterColumn title={footerLinks[3].title} links={footerLinks[3].links} />
          <div className='flex flex-col gap-4'>
            <FooterColumn title={footerLinks[4].title} links={footerLinks[4].links} />
            <FooterColumn title={footerLinks[5].title} links={footerLinks[5].links} />
          </div>
          <FooterColumn title={footerLinks[6].title} links={footerLinks[6].links} />
        </div>

        <div className='flexBetween footer_copyright'>
          <p>@ 2023 Flexibble. All rights reserved</p>
          <p className='text-gray'>
             <span className='text-black font-semibold'>
              10,213
             </span> Projects Submited
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer