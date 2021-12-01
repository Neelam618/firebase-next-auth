import React from 'react'
import { withAuthUser, AuthAction } from 'next-firebase-auth'
import FirebaseAuth from '../components/FirebaseAuth'

const styles = {
  content: {
    padding: `8px 32px`,
    display: 'flex',
    alignItems: 'center',
    height: `100vh`
  },
  textContainer: {
    display: 'flex',
    justifyContent: 'center',
    margin: 16,
  },
}

const Auth = () => (
  <div style={styles.content}>
    {/* <h3>Sign in</h3> */}
    {/* <div style={styles.textContainer}>
      <p>
        This auth page is <b>static</b>. It will redirect on the client side if
        the user is already authenticated.
      </p>
    </div> */}
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto'}}>
      <div style={{width: '30%'}}>
        <h1>Ready to scale your business?</h1>
        <p>Easily collaborate with your team with shared Zaps and app connections, a centralized login, and more</p>
      </div>
      <div style={{flexBasis: '281px'}}>
      <FirebaseAuth />
      </div>
    </div>
  </div>
)

export default withAuthUser({
  whenAuthed: AuthAction.REDIRECT_TO_APP,
  whenUnauthedBeforeInit: AuthAction.RETURN_NULL,
  whenUnauthedAfterInit: AuthAction.RENDER,
})(Auth)
