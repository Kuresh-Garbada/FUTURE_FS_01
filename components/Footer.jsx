import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Footer = () => {
  return (
    <div>
      <div>
        <p
          className="text-[#0449df] text-[28px] font-serif w-36 mx-auto mb-2"
          style={{ textShadow: '2px 2px 4px #aaa' }}
        >
          KURESH
        </p>

        <div className="w-max flex items-center gap-2 mx-auto">
          <Image src={assets.mail_icon} alt="" className="w-6" />
          <span>kureshgarbada@gmail.com</span>
        </div>
      </div>

      {/* ✅ Updated this section below */}
      <div className="border-t border-gray-400 mx-[10%] mt-12 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
          <p className="text-sm">© 2025 Kuresh Garbada. All rights reserved.</p>

          <ul className="flex items-center gap-6">
            <li>
              <a target="_blank" href="https://github.com/Kuresh-Garbada" className="hover:underline">
                GitHub
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.linkedin.com/in/kuresh-garbada-ba75a3326/" className="hover:underline">
                LinkedIn
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.instagram.com/kuresh_garbada7" className="hover:underline">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
