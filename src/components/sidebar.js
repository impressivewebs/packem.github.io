/** @jsx jsx */
import React from 'react'
import { jsx, Box } from 'theme-ui'
// import { Global } from '@emotion/core'
import { MDXProvider } from '@mdx-js/react'
import NavLink from './nav-link'
import Content from '../sidebar.mdx'

const components = {
  a: NavLink,
}

export default React.forwardRef((props, ref) => (
  <React.Fragment>
    {/* {props.open && (
      <Box
        onClick={props.onClick}
        css={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        }}>
        <Global
          styles={{
            body: {
              overflow: 'hidden',
            }
          }}
        />
      </Box>
    )} */}
    <Box
      {...props}
      ref={ref}
      css={{
        position: 'sticky',
        top: 0,
        zIndex: 1,
        minWidth: 0,
        width: 256,
        flex: 'none',
        px: 3,
        py: 3,
        maxHeight: 'calc(100vh - 64px)',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        [props.fullwidth ? '@media screen' : '@media screen and (max-width: 39.99em)']: {
          bg: 'background',
          marginLeft: -256,
          transition: 'transform .2s ease-out',
          transform: props.open ? 'translateX(100%)' : 'translateX(0)',
        },
        ul: {
          listStyle: 'none',
          m: 0,
          p: 0,
        },
        "li ul": {
          marginLeft: 15,
          borderLeft: "1px dashed #c4c4c4",
          marginTop: "2px",
          marginBottom: "5px"
        },
        "li ul *": {
          fontWeight: "normal"
        }
      }}>
      <MDXProvider components={components}>
        <Content />
      </MDXProvider>
    </Box>
  </React.Fragment>
))
