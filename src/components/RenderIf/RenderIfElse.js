import React from 'react'
import RenderIf from './RenderIf'

const RenderIfElse = ({ renderFirst, children }) => {
  if (children.length > 2 || !Array.isArray(children)) {
    console.log('error to many children or one children in RenderIfElse')
    return null
  }
  return (
    <>
      <RenderIf isRender={renderFirst}>{children[0]}</RenderIf>
      <RenderIf isRender={!renderFirst}>{children[1]}</RenderIf>
    </>
  )
}

export default RenderIfElse
