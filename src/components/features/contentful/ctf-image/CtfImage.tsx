import NextImage, { ImageProps as NextImageProps } from 'next/image';

import { ImageFieldsFragment } from '@src/lib/__generated/sdk';

// TODO: REMOVE HOTFIX >>>>>>>>
// import { InspectorModeTags } from '@contentful/live-preview/dist/types';
enum TagAttributes {
  FIELD_ID = "data-contentful-field-id",
  ENTRY_ID = "data-contentful-entry-id",
  LOCALE = "data-contentful-locale"
}
type InspectorModeTags = {
  [TagAttributes.ENTRY_ID]: string;
  [TagAttributes.FIELD_ID]: string;
  [TagAttributes.LOCALE]?: string;
} | null;
// TODO: REMOVE HOTFIX >>>>>>>>

interface ImageProps extends ImageFieldsFragment {
  imageProps?: Omit<NextImageProps, 'src' | 'alt'>;
  livePreviewProps?: InspectorModeTags;
}

export const CtfImage = ({
  url,
  width,
  height,
  title,
  imageProps,
  livePreviewProps,
}: ImageProps) => {
  if (!url || !width || !height) return null;

  const blurURL = new URL(url);
  blurURL.searchParams.set('w', '10');

  return (
    <NextImage
      src={url}
      width={width}
      height={height}
      alt={title || ''}
      sizes="(max-width: 1200px) 100vw, 50vw"
      placeholder="blur"
      blurDataURL={blurURL.toString()}
      {...imageProps}
      {...livePreviewProps}
    />
  );
};
