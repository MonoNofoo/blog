export const TYPE_SCRIPT = 'TYPE_SCRIPT';
export const NEXT_JS = 'NEXT_JS';
export const REACT = 'REACT';
export const SEO = 'SEO';

export const MetaDataTagIds = [TYPE_SCRIPT, NEXT_JS, REACT, SEO] as const;

export type MetaDataTagId = typeof MetaDataTagIds[number];

export type MetaDataTagEnumValue<K extends MetaDataTagId = MetaDataTagId> = {
  id: K;
  urlValue: string;
  label: string;
};
export const MetaDataTagEnum: {
  [K in MetaDataTagId]: MetaDataTagEnumValue<K>;
} = {
  [TYPE_SCRIPT]: {
    id: TYPE_SCRIPT,
    urlValue: 'type-script',
    label: 'TypeScript',
  },
  [NEXT_JS]: {
    id: NEXT_JS,
    urlValue: 'next-js',
    label: 'Next.js',
  },
  [REACT]: {
    id: REACT,
    urlValue: 'react',
    label: 'React',
  },
  [SEO]: {
    id: SEO,
    urlValue: 'seo',
    label: 'SEO',
  },
};
