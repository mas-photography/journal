// The background sky photo. Use its real pixel size from Properties > Details.
export const sky = {
  src: 'milky_way.jpg',
  width: 7032,
  height: 4688,
};

export interface Photo {
  src: string;      // path inside public/, e.g. 'gallery/redwoods/01.jpg'
  alt: string;      // short description for screen readers
  caption?: string; // optional text shown under the photo
}

export interface Album {
  slug: string;     // short id, no spaces, matches the folder name
  title: string;    // name shown to visitors
  x: number;        // position on the sky, 0 (left) to 1 (right)
  y: number;        // position on the sky, 0 (top) to 1 (bottom)
  photos: Photo[];
}

export const albums: Album[] = [
  {
    slug: 'redwoods',
    title: 'Redwoods',
    x: 0.3, // placeholder, you'll pick real spots in step 5
    y: 0.4,
    photos: [
      { src: 'gallery/redwoods/01.jpg', alt: 'Tall redwood trunks in morning fog' },
      { src: 'gallery/redwoods/02.jpg', alt: 'Sunlight through the canopy' },
    ],
  },
  // Copy the block above for each album.
];