import React from 'react'

const RenderIf = ({ isRender, children }) => {
  return isRender ? <>{children}</> : null
}

export default RenderIf
