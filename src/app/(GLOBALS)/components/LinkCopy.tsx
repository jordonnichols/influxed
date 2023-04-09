'use client'
import React, { useState } from 'react'

export default function LinkCopy({ children, copyText, className = '' }) {
  const [isCopied, setIsCopied] = useState(false)
  const handleCopyClick = async () => {
    await navigator.clipboard.writeText(copyText)
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 2500)
  }
  return (
    <button
      onClick={handleCopyClick}
      className={`font-bold hover:text-red-500 focus:text-red-500 hover:underline px-2 rounded-md ${className}`}
    >
      {isCopied ? <i className="fa-solid fa-clipboard-check"></i> : children}
    </button>
  )
}
