export default function DownloadPage() {
  const name = 'cove-backup-manager.zip'
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-lg p-4 bg-white rounded shadow space-y-4">
        <a href={`/assets/${name}`}>{name}</a>
      </div>
    </div>
  )
}
