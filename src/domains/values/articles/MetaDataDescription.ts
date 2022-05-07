export type MetaDataDescription = string;

export const OmitMetaDataDescription = (description: MetaDataDescription) => {
  if (description.length <= 40) {
    return description;
  }

  return `${description.substring(0, 40)}…`;
};
