/**
 * 公開
 */
export const PUBLISH = 'PUBLISH';
/**
 * 非公開
 */
export const PRIVATE = 'PRIVATE';

export const MetaDataStatuses = [PUBLISH, PRIVATE] as const;

export type MetaDataStatus = (typeof MetaDataStatuses)[number];
