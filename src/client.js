import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'sire7k8p',
  dataset: 'production',
  apiVersion: '2022-07-17',
  useCdn: true,
  token: ''
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
