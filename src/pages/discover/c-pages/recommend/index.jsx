import React, { useEffect } from 'react'
import { requestAPI } from '@/service/'

export default function Recommend() {
  useEffect(() => {
    requestAPI('GET', { url: 'banner' }).then(res => {
      console.log(res);
    })
  })
  return (
    <div>
      
    </div>
  )
}
