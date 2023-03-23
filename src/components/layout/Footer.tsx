import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import LinkCopy from '../global/LinkCopy'
import LinkTo from '../global/LinkTo'

export default function Footer() {
  return (
    <div className="fixed text-white bottom-4 right-1/2 translate-x-1/2">
      <div className="flex gap-4 text-3xl lg:text-5xl">
        <LinkTo href="https://www.linkedin.com/in/jordon-nichols/">
          <i className="fa-brands fa-linkedin-in"></i>
        </LinkTo>
        <LinkCopy copyText="jordon@influxed.io">
          <i className="fa-solid fa-envelope"></i>
        </LinkCopy>
        <LinkTo href="https://github.com/influxion">
          <i className="fa-brands fa-github"></i>
        </LinkTo>
      </div>
    </div>
  )
}
