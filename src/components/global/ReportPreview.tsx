'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { urlForImage } from 'src/lib/sanity.image'

export default function ReportItem({
  excerpt,
  date,
  category,
  image,
  title,
  slug,
  number,
  setSelectedPreview,
  selectedPreview,
}) {
  function formatShortMonthDate(date: Date) {
    return `${new Date(date).toLocaleString('en-US', {
      month: 'short',
    })}, ${new Date(date).toLocaleString('en-US', {
      year: 'numeric',
    })}`
  }

  const handleMouseEnter = () => {
    setSelectedPreview(number)
  }

  const handleMouseLeave = () => {
    setSelectedPreview()
  }
  return (
    <div
      className={`text-sm lg:text-lg bg-white/5 p-6 lg:p-12 flex flex-col justify-between border-white/5 border-2 rounded-lg lg:w-[420px] w-[300px] lg:h-[420px] h-[300px] transition-all  bg-gradient-to-t relative select-none overflow-hidden ${
        selectedPreview === number
          ? '!border-red-500 !from-red-500/25 !shadow-red-500/25 !shadow-lg !rounded-br-4xl'
          : ''
      }`}
      onMouseEnter={handleMouseEnter}
      onBlur={handleMouseLeave}
      onFocus={handleMouseEnter}
      onTouchStart={handleMouseEnter}
      onTouchCancel={handleMouseLeave}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href={`/posts/${slug}`}
        className={`text-base lg:text-xl bg-red-600 absolute bottom-8 right-8 flex gap-2 items-center rounded-full px-6 py-4 duration-200 hover:drop-shadow-lg hover:bg-red-500 ${
          selectedPreview === number ? 'translate-y-0' : 'translate-y-32'
        }`}
      >
        <span>Go to Report</span>
        <i className="fa-solid fa-arrow-right"></i>
      </Link>
      <div className="h-fit relative">
        <Image
          className="object-contain h-fit lg:max-h-[90px] max-h-[80px]"
          width={90}
          height={90}
          alt={`Cover Image for ${title}`}
          src={urlForImage(image).url()}
        />
      </div>
      <p className="flex gap-2">
        <span>{formatShortMonthDate(date)}</span>
        <span className="text-white/25">/</span>
        <span className="text-white/25">{category}</span>
      </p>
      <p>
        <span>{excerpt.split('.', 1)[0]}.</span>
        <span className="text-white/50">
          {excerpt.substr(excerpt.split('.', 1)[0].length + 1)}
        </span>
      </p>
    </div>
  )
}
