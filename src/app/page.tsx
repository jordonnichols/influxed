export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 font-medium">
      <div className="flex flex-col gap-4 text-center">
        <a href="/tools/minifier-encoder" className="hover:underline">
          JS to Char Code String
        </a>
        <a href="/tools/minifier" className="hover:underline">
          JS Minifier
        </a>
        <a href="/tools/commands" className="hover:underline">
          Commands
        </a>
      </div>
    </div>
  )
}
