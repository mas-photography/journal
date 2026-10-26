// The background sky photo. Use its real pixel size from Properties > Details.
export const sky = {
  src: 'milky_way.jpg',
  width: 5000,
  height: 3333,
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
    title: 'Redwood National & State Parks',
    x: 0.558, // placeholder, you'll pick real spots with ?pick in step 3
    y: 0.328,
    photos: [
      { src: 'gallery/redwoods/fern_canyon.jpg', alt: 'Fern Canyon' },
      { src: 'gallery/redwoods/fern_closeup.jpg', alt: 'Fern close-up' },
      { src: 'gallery/redwoods/elk_pasture.jpg', alt: 'Huge herd of elk' },
      { src: 'gallery/redwoods/gorgeous_cali_coast.jpg', alt: 'Gorgeous Cali Coast' },
      { src: 'gallery/redwoods/trolling_seal.jpg', alt: 'The seal that trolled me' },
      { src: 'gallery/redwoods/sheep_house.jpg', alt: 'The sheep house on Dolason Prairie' },
      { src: 'gallery/redwoods/fav_dolason_prairie_view.jpg', alt: 'Fav Dolason Prairie view' },
      { src: 'gallery/redwoods/dolason_prairie_trailhead.jpg', alt: 'Dolason Prairie trailhead' },
      { src: 'gallery/redwoods/broken_bridge.jpg', alt: 'End of Dolason Prairie trail' },
      { src: 'gallery/redwoods/smith_river.jpg', alt: 'Smith River' },
      { src: 'gallery/redwoods/smith_river_walk.jpg', alt: 'Landon in the Smith River' },
      { src: 'gallery/redwoods/perfect_lighting.jpg', alt: 'A redwood in the perfect light' },
      { src: 'gallery/redwoods/hint_of_red.jpg', alt: 'A hint of red' },
      { src: 'gallery/redwoods/big_tree.jpg', alt: 'Landon next to a thick, tall, old tree' },
      { src: 'gallery/redwoods/tree_hugger.jpg', alt: 'Certified tree hugger' },
      { src: 'gallery/redwoods/redwood_noodles.jpg', alt: 'Me cooking noodles at the campsite, phone shot' },
      { src: 'gallery/redwoods/redwood_dumplings.jpg', alt: 'Dumplings, phone shot' },
    ],
  },
  // Copy the block above for each album.
];