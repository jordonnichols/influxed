import LinkCopy from '../global/LinkCopy'
import LinkTo from '../global/LinkTo'

export default function Footer() {
  return (
    <div className="fixed text-white bottom-2 right-1/2 translate-x-1/2">
      <div className="flex gap-4 text-xl lg:text-3xl">
        <LinkTo href="https://github.com/influxion">github</LinkTo>
        <LinkTo href="https://www.linkedin.com/in/jordon-nichols/">
          linkedin
        </LinkTo>
        <LinkCopy copyText="jordon@influxed.io">email</LinkCopy>
      </div>
    </div>
  )
}
