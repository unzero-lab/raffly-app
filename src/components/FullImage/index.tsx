import React from 'react'
import { Image } from '@components/FullImage/style'
import { ImageRequireSource, ImageURISource } from 'react-native'

interface FullScreenImageProps {
  source: ImageURISource | ImageRequireSource
}

export function FullScreenImage({ source }: FullScreenImageProps) {
  return <Image source={source} />
}
