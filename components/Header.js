import React from 'react'
import Link from 'next/link'

const nfaDependencyVersion =
  require('../package.json').dependencies['next-firebase-auth']
const nextDependencyVersion = require('../package.json').dependencies.next
const firebaseDependencyVersion =
  require('../package.json').dependencies.firebase

const Header = ({ email, signOut }) => {
  return (
    <div>

      {email ? (
        <button
          type="button"
          onClick={() => {
            signOut()
          }}
        >
          Sign out
        </button>
      ) : (
        <Link href="/auth">
          <a>
            <button type="button">
              Sign in
            </button>
          </a>
        </Link>
      )}
    </div>
  )
}

export default Header
