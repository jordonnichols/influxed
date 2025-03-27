import { promises as fs } from 'fs'
import path from 'path'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'

export default async function ReadmePage() {
  const filePath = path.join(
    process.cwd(),
    'public',
    'assets',
    'oscp_cheatsheat.txt'
  )

  // Read the file contents
  const content = await fs.readFile(filePath, 'utf-8')

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100">
      <div className="container mx-auto px-4 py-8">
        {/* <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-zinc-100">README Viewer</h1>
        </div> */}
        <div className="bg-zinc-800 rounded-lg shadow-lg p-6">
          <div className="prose prose-invert max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
              components={{
                code({
                  node,
                  inline,
                  className,
                  children,
                  ...props
                }: {
                  node: any
                  inline?: boolean
                  className?: string
                  children: React.ReactNode
                }) {
                  const match = /language-(\w+)/.exec(className || '')
                  return !inline && match ? (
                    <SyntaxHighlighter
                      style={vscDarkPlus}
                      language={match[1]}
                      PreTag="div"
                      {...props}
                    >
                      {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  )
                },
                // Customize other elements with fixed dark theme colors
                a: ({ node, ...props }) => (
                  <a
                    className="text-zinc-300 hover:text-white underline"
                    {...props}
                  />
                ),
                h1: ({ node, ...props }) => (
                  <h1
                    className="text-zinc-100 text-3xl font-bold mt-6 mb-4"
                    {...props}
                  />
                ),
                h2: ({ node, ...props }) => (
                  <h2
                    className="text-zinc-100 text-2xl font-bold mt-5 mb-3"
                    {...props}
                  />
                ),
                h3: ({ node, ...props }) => (
                  <h3
                    className="text-zinc-100 text-xl font-bold mt-4 mb-2"
                    {...props}
                  />
                ),
                p: ({ node, ...props }) => (
                  <p className="text-zinc-300 my-3" {...props} />
                ),
                ul: ({ node, ...props }) => (
                  <ul
                    className="text-zinc-300 list-disc pl-6 my-3"
                    {...props}
                  />
                ),
                ol: ({ node, ...props }) => (
                  <ol
                    className="text-zinc-300 list-decimal pl-6 my-3"
                    {...props}
                  />
                ),
                li: ({ node, ...props }) => (
                  <li className="text-zinc-300 my-1" {...props} />
                ),
                blockquote: ({ node, ...props }) => (
                  <blockquote
                    className="border-l-4 border-zinc-600 pl-4 italic text-zinc-400 my-3"
                    {...props}
                  />
                ),
                table: ({ node, ...props }) => (
                  <table
                    className="border-collapse table-auto w-full my-4"
                    {...props}
                  />
                ),
                th: ({ node, ...props }) => (
                  <th
                    className="border border-zinc-700 px-4 py-2 text-left bg-zinc-700 text-zinc-100"
                    {...props}
                  />
                ),
                td: ({ node, ...props }) => (
                  <td
                    className="border border-zinc-700 px-4 py-2 text-zinc-300"
                    {...props}
                  />
                ),
              }}
            >
              {content}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  )
}
