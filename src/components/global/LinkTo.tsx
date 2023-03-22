import React from 'react'

export default function LinkTo({ children, href, className = '' }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`font-bold hover:text-red-500 hover:underline ${className}`}
    >
      {children}
    </a>
  )
}
