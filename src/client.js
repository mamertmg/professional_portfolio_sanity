import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'sire7k8p',
  dataset: 'production',
  apiVersion: '2022-07-17',
  useCdn: true,
  token: 'skN9AZ6lJfhhXWQdUxV1fQLzEBIyxiYUbt5nbxPMDn9wa91FsEj6xjg04AMChiKP28ZDFpJYYI7kvP5vo7Vi5CVLMc9ybAZLyo1gJRbrRAekK4KWmYaeqgCEAqTRNDQuCP5LzugY6JZwKCFSJZAJWVMXFqHFshlf0EuGxY0OqYIbabjkPgX1'
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);