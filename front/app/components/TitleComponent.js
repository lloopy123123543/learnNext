import React from 'react'

export default function TitleComponent({title}) {
  return (
    <div className="text-2xl font-bold w-full mx-auto text-rose-800">{title ? title : 'no title'}</div>
  )
}
