import {createClient} from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'if672j6q',
  dataset: 'production',
  apiVersion: '2025-07-25',
  useCdn: true,
  token: 'skwVzzXhaY2Vg2IAVwutNxHqn3tBgjwuDGt1jPCSn40mE58MguRXmO7aoPs7z0RhVmw1TfgS0OrKHIzjekDIuWUX6zRbcL0eRcBpHmFiawyRnw82wAGkg0Bcc6pJN4tQNFfqDNGiIAhhnqmBrQza36IfS3TwRcaGAngq6lPlnnzJIosHOzhf',
});

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source);