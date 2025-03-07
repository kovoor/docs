import React, { useState, useContext, useEffect } from 'react'
import { styled, darkTheme } from '../stitches.config'
import Navigation from '../components/Navigation'
import { ThemeContext } from './themeContext'

export const SiteContainer = styled('section', {
  position: 'relative',
  backgroundColor: '$bgPrimary',
  width: '100vw',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  '@tablet': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
  },
})

export const WidthConstrain = styled('div', {
  flexGrow: '2',
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'stretch',
  justifyContent: 'center',

  '@tablet': {
    flexDirection: 'column',
    alignItems: 'stretch',
    width: '100%',
    margin: '0',
  },
})

export default function Layout({ children }) {
  const [mounted, setMounted] = useState(false)
  const themeContext = useContext(ThemeContext)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <SiteContainer
      className={themeContext.getActiveMode().name === 'dark' ? darkTheme : ''}
    >
      <WidthConstrain>
        <Navigation version="v2"></Navigation>
        {children}
      </WidthConstrain>
    </SiteContainer>
  )
}
