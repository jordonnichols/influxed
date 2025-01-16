'use client'

import { useEffect, useState } from 'react'
import { minify } from 'terser'

export default function HomePage() {
  const [encodeInput, setEncodeInput] = useState('')
  const [encodedOutput, setEncodedOutput] = useState('')

  // Helper to select all text when a user clicks the read-only textarea
  function selectAllText(e: React.MouseEvent<HTMLTextAreaElement>) {
    const target = e.target as HTMLTextAreaElement
    target.select()
  }

  // Clears both inputs
  function clearAll() {
    setEncodeInput('')
    setEncodedOutput('')
  }

  // Whenever "encodeInput" changes, minify + convert to comma-separated char codes
  useEffect(() => {
    if (!encodeInput.trim()) {
      setEncodedOutput('')
      return
    }

    ;(async () => {
      try {
        const result = await minify(encodeInput)
        const minifiedCode = result.code ?? encodeInput
        setEncodedOutput(encodeToCharCode(minifiedCode))
      } catch (err) {
        console.error('Minification failed:', err)
      }
    })()
  }, [encodeInput])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md p-4 bg-white rounded shadow space-y-4">
        <h1 className="text-xl font-semibold">JavaScript Minifier & Encoder</h1>
        <p className="text-gray-600">
          Enter your JavaScript code below to minify and encode it as
          comma-separated character codes.
        </p>

        {/* Text to Encode */}
        <textarea
          id="encode"
          value={encodeInput}
          placeholder="Enter JavaScript code here"
          onChange={(e) => setEncodeInput(e.target.value)}
          className="w-full h-32 resize-none bg-gray-100 rounded-md p-2"
        />

        {/* Encoded Output (read-only) */}
        <textarea
          id="encodedOutput"
          value={encodedOutput}
          readOnly
          onClick={selectAllText}
          placeholder="Encoded result will appear here"
          className="w-full h-32 resize-none bg-gray-100 rounded-md p-2"
        />

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

// Converts a string to comma-separated char codes
function encodeToCharCode(str: string): string {
  let output = ''
  for (let i = 0; i < str.length; i++) {
    output += str.charCodeAt(i)
    if (i < str.length - 1) {
      output += ','
    }
  }
  return output
}
