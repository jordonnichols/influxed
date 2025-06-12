'use client'

import { useState, useEffect } from 'react'

export default function CaesarShiftPage() {
  const [inputText, setInputText] = useState('')
  const [shiftAmount, setShiftAmount] = useState(0)
  const [resultText, setResultText] = useState('')

  // Select all when clicking the result
  function selectAllText(e: React.MouseEvent<HTMLTextAreaElement>) {
    const target = e.target as HTMLTextAreaElement
    target.select()
    // copy to clipboard
    navigator.clipboard.writeText(target.value).then(() => {
      // brief flash to confirm
      target.classList.add('bg-green-100')
      setTimeout(() => target.classList.remove('bg-green-100'), 200)
    })
  }

  // Reset everything
  function clearAll() {
    setInputText('')
    setShiftAmount(0)
    setResultText('')
  }

  // Caesar shift logic
  function caesar(str: string, shift: number) {
    return Array.from(str)
      .map((char) => {
        const code = char.charCodeAt(0)
        // A–Z
        if (code >= 65 && code <= 90) {
          return String.fromCharCode(
            ((((code - 65 + shift) % 26) + 26) % 26) + 65
          )
        }
        // a–z
        if (code >= 97 && code <= 122) {
          return String.fromCharCode(
            ((((code - 97 + shift) % 26) + 26) % 26) + 97
          )
        }
        return char
      })
      .join('')
  }

  // Recalculate on input or shift change
  useEffect(() => {
    setResultText(caesar(inputText, shiftAmount))
  }, [inputText, shiftAmount])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-lg p-4 bg-white rounded shadow space-y-4">
        <h1 className="text-xl font-semibold">Caesar Cipher</h1>
        <p className="text-gray-600">
          Enter your text and choose a shift amount.
        </p>

        {/* Input Text */}
        <textarea
          id="inputText"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter text here"
          className="w-full h-36 resize-none bg-gray-100 rounded-md p-2"
        />

        {/* Shift Amount */}
        <input
          id="shiftAmount"
          type="number"
          value={shiftAmount}
          onChange={(e) => {
            const val = e.target.valueAsNumber
            setShiftAmount(Number.isNaN(val) ? 0 : val)
          }}
          placeholder="Shift amount (e.g. 3 or -2)"
          className="w-full h-12 bg-gray-100 rounded-md p-2"
        />

        {/* Result (click to copy) */}
        <textarea
          id="resultText"
          value={resultText}
          readOnly
          onClick={selectAllText}
          placeholder="Shifted result will appear here (click to copy)"
          className="w-full h-36 resize-none bg-gray-100 rounded-md p-2 cursor-pointer"
        />

        {/* Clear Button */}
        <button
          onClick={clearAll}
          className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md font-medium"
        >
          Clear
        </button>
      </div>
    </div>
  )
}
