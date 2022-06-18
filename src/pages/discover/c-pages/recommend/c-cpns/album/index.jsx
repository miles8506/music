import React, { memo } from 'react'

import { AlbumWrapper } from './style'
import ThemeHeaderRCM from '@/components/theme-header-rcm'

export default memo(function Album() {
  return (
    <AlbumWrapper>
      <ThemeHeaderRCM title="新碟上架"></ThemeHeaderRCM>
    </AlbumWrapper>
  )
})
