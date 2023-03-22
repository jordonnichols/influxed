import LinkCopy from '../global/LinkCopy'
import LinkTo from '../global/LinkTo'

export default function Footer() {
  return (
    <div className="fixed text-white bottom-2 right-1/2 translate-x-1/2">
      <div className="flex gap-4 text-xl">
        <LinkTo href="https://github.com/influxion">Github</LinkTo>
        <LinkTo href="https://www.linkedin.com/in/jordon-nichols/">
          LinkedIn
        </LinkTo>
        <LinkCopy copyText="https://github.com/influxion">Email</LinkCopy>
      </div>
    </div>
  )
}
