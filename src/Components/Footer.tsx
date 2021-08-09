import React from 'react'

function Footer(): JSX.Element {
  return (
    <footer className='mt-auto text-center'>
      <p>
        Build with React by VD Inc., based on{' '}
        <a target='_blank' rel='noopener noreferrer' href='https://github.com/kozakdenys/qr-code-styling'>
          QR Code Styling JS library.
        </a>
        {' - '}{' '}
        <a target='_blank' rel='noopener noreferrer' href='https://github.com/Vansh186'>
          Github
        </a>
        {' - '}{' '}
        <a target='_blank' rel='noopener noreferrer' href='https://vanshdh.vercel.app'>
          VD Inc.
        </a>
      </p>
    </footer>
  )
}

export default Footer
