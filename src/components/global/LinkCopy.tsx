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
    <p
      onClick={handleCopyClick}
      className={`font-bold hover:text-red-500 hover:underline px-2 rounded-md ${className}`}
    >
      {isCopied ? 'copied' : children}
    </p>
  )
}
