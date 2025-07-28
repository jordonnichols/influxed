export default function DownloadPage() {
  const name = 'cove#v1#ff447581-d1f4-0594-bae9-60e7c9633bdd#.exe'
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-lg p-4 bg-white rounded shadow space-y-4">
        <a href={`/assets/${name}`}>{name}</a>
      </div>
    </div>
  )
}
