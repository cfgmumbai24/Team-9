import { faker } from "@faker-js/faker";

export function generateImageUrls(count) {
  const urls = [];
  for (let i = 0; i < count; i++) {
    urls.push(faker.image.imageUrl());
  }
  return urls;
}
