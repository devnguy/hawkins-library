/**
 * Link clones the Link component provided by next/link so that styling
 * can be added to the active link.
 */

import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default ({ href, children }) => {
  const router = useRouter()

  let className = children.props.className || ''
  if (router.pathname === href) {
    className = `${className} active-link`
  }

  return <Link href={href}>{React.cloneElement(children, { className })}</Link>
}
