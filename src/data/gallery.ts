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
  track: string;    // SoundCloud track URL
  photos: Photo[];
}

export const albums: Album[] = [
  {
    slug: 'nostalgia',
    title: 'nostalgia shot on phones',
    x: 0.558,
    y: 0.558,
    track: 'https://soundcloud.com/paramore/misguided-ghosts',
    photos: [
      { src: 'gallery/nostalgia/cloud_blue_eyes.jpg', alt: 'Cloud with blue eyes', caption: 'Cloud with blue eyes' },
      { src: 'gallery/nostalgia/angela.jpg', alt: '姐姐', caption: '姐姐' },
      { src: 'gallery/nostalgia/baby_cloud.jpg', alt: 'Baby Cloud', caption: 'Baby Cloud' },
      { src: 'gallery/nostalgia/Brandon.jpg', alt: '哥哥', caption: '哥哥' },
      { src: 'gallery/nostalgia/daniel.jpg', alt: 'Canoe adventures with 表侄', caption: 'Canoe adventures with 表侄' },
      { src: 'gallery/nostalgia/golden_cloud.jpg', alt: 'Golden Cloud', caption: 'Golden Cloud' },
      { src: 'gallery/nostalgia/good_old_days.jpg', alt: 'Cloud in her dandelion years', caption: 'Cloud in her dandelion years' },
      { src: 'gallery/nostalgia/hadestown.jpg', alt: 'Hadestown original cast in NYC!', caption: 'Hadestown original cast in NYC!' },
      { src: 'gallery/nostalgia/konza_again.jpg', alt: 'Konza Prairie trail during summer', caption: 'Konza Prairie trail during summer' },
      { src: 'gallery/nostalgia/konza_golden_hour.jpg', alt: 'Konza Prairie golden hour during summer', caption: 'Konza Prairie golden hour during summer' },
      { src: 'gallery/nostalgia/konza.jpg', alt: 'A summer morning in Konza Prairie', caption: 'A summer morning in Konza Prairie' },
      { src: 'gallery/nostalgia/KS_winter_sunset.jpg', alt: 'A KS winter sunset', caption: 'A KS winter sunset' },
      { src: 'gallery/nostalgia/KSsunset.jpg', alt: 'A KS summer sunset', caption: 'A KS summer sunset' },
      { src: 'gallery/nostalgia/landon_at_konza.jpg', alt: 'Landon at Konza Prairie', caption: 'Landon at Konza Prairie' },
      { src: 'gallery/nostalgia/live_oak_and_dad.jpg', alt: '爸爸 + live oak', caption: '爸爸 + live oak' },
      { src: 'gallery/nostalgia/mom_in_NYC.jpg', alt: '妈妈 in NYC', caption: '妈妈 in NYC' },
      { src: 'gallery/nostalgia/NYC_safe_asians.jpg', alt: 'In the future, our Asian community is safe -- NYC', caption: 'In the future, our Asian community is safe -- NYC' },
      { src: 'gallery/nostalgia/sideways_cap.jpg', alt: 'Sideways cap -- NYC', caption: 'Sideways cap -- NYC' },
      { src: 'gallery/nostalgia/thanksgiving2022.jpg', alt: 'Thanksgiving morning 2021', caption: 'Thanksgiving morning 2021' },
      { src: 'gallery/nostalgia/uncles_restaurant.jpg', alt: '舅舅的饭馆', caption: '舅舅的饭馆' },
    ],
  },
  {
    slug: 'olympic',
    title: 'Olympic National Park',
    x: 0.4,
    y: 0.4,
    track: 'https://soundcloud.com/rubii33395/jealousy',
    photos: [
      { src: 'gallery/olympic/always_snapping_a_pic.jpg', alt: 'Always snapping a pic', caption: 'Always snapping a pic' },
      { src: 'gallery/olympic/big_maple_leaves.jpg', alt: 'Big maple leaves', caption: 'Big maple leaves' },
      { src: 'gallery/olympic/flowers.jpg', alt: 'Field of flowers', caption: 'Field of flowers' },
      { src: 'gallery/olympic/golden_hoh.jpg', alt: 'Hoh Rainforest but gold', caption: 'Hoh Rainforest but gold' },
      { src: 'gallery/olympic/hurricane_ridge.jpg', alt: 'Hurricane Ridge', caption: 'Hurricane Ridge' },
      { src: 'gallery/olympic/kalaloch_beach.jpg', alt: 'Kalaloch Beach', caption: 'Kalaloch Beach' },
      { src: 'gallery/olympic/landon_resting.jpg', alt: 'Landon resting while I take photos', caption: 'Landon resting while I take photos' },
      { src: 'gallery/olympic/lupines.jpg', alt: 'Better than bluebonnets', caption: 'Better than bluebonnets' },
      { src: 'gallery/olympic/marmot.jpg', alt: 'An Olympic friend', caption: 'An Olympic friend' },
      { src: 'gallery/olympic/mount_storm_king_hug.jpg', alt: 'Mount Storm King summit hug', caption: 'Mount Storm King summit hug' },
      { src: 'gallery/olympic/mount_storm_king.jpg', alt: 'Mount Storm King from my view', caption: 'Mount Storm King from my view' },
      { src: 'gallery/olympic/olympic_mountains.jpg', alt: 'Olympic Mountains', caption: 'Olympic Mountains' },
      { src: 'gallery/olympic/pj_lake.jpg', alt: 'A peaceful moment at PJ Lake', caption: 'A peaceful moment at PJ Lake' },
      { src: 'gallery/olympic/poster_attempt.jpg', alt: 'Attempted the iconic Sol Duc Falls shot', caption: 'Attempted the iconic Sol Duc Falls shot' },
      { src: 'gallery/olympic/purple_mushroom.jpg', alt: 'A K-State mushroom', caption: 'A K-State mushroom' },
      { src: 'gallery/olympic/red_berries.jpg', alt: 'Was tempted to taste them', caption: 'Was tempted to taste them' },
      { src: 'gallery/olympic/ruby_beach.jpg', alt: 'Ruby Beach', caption: 'Ruby Beach' },
      { src: 'gallery/olympic/salmon_falls.jpg', alt: 'Salmon Falls', caption: 'Salmon Falls' },
      { src: 'gallery/olympic/so_many_ferns.jpg', alt: 'Ferns and more ferns', caption: 'Ferns and more ferns' },
      { src: 'gallery/olympic/sol_duc_falls.jpg', alt: 'Better than my iconic Sol Duc Falls shot mimic', caption: 'Better than my iconic Sol Duc Falls shot mimic' },
      { src: 'gallery/olympic/started_climbing.jpg', alt: 'The trail that got us into rock climbing', caption: 'The trail that got us into rock climbing' },
      { src: 'gallery/olympic/taking_a_rest.jpg', alt: 'Rest with a view', caption: 'Rest with a view' },
      { src: 'gallery/olympic/tree_of_life.jpg', alt: 'Tree of life', caption: 'Tree of life' },
      { src: 'gallery/olympic/vibes.jpg', alt: 'Vibes were good, but shadows were not', caption: 'Vibes were good, but shadows were not' },
    ],
  },
  {
    slug: 'redwoods',
    title: 'Redwood National & State Parks',
    x: 0.558,
    y: 0.328,
    track: 'https://soundcloud.com/bohanphoenix/buy-some-time',
    photos: [
      { src: 'gallery/redwoods/fern_canyon.jpg', alt: 'Fern Canyon', caption: 'Fern Canyon' },
      { src: 'gallery/redwoods/fern_closeup.jpg', alt: 'Fern close-up', caption: 'Fern close-up' },
      { src: 'gallery/redwoods/elk_pasture.jpg', alt: 'Huge herd of elk', caption: 'Huge herd of elk' },
      { src: 'gallery/redwoods/gorgeous_cali_coast.jpg', alt: 'Gorgeous Cali coast', caption: 'Gorgeous Cali coast' },
      { src: 'gallery/redwoods/trolling_seal.jpg', alt: 'The seal that trolled me', caption: 'The seal that trolled me' },
      { src: 'gallery/redwoods/sheep_house.jpg', alt: 'The sheep house on Dolason Prairie', caption: 'The sheep house on Dolason Prairie' },
      { src: 'gallery/redwoods/fav_dolason_prairie_view.jpg', alt: 'Fav Dolason Prairie view', caption: 'Fav Dolason Prairie view' },
      { src: 'gallery/redwoods/dolason_prairie_trailhead.jpg', alt: 'Dolason Prairie trailhead', caption: 'Dolason Prairie trailhead' },
      { src: 'gallery/redwoods/broken_bridge.jpg', alt: 'End of the Dolason Prairie trail', caption: 'End of the Dolason Prairie trail' },
      { src: 'gallery/redwoods/smith_river.jpg', alt: 'Smith River', caption: 'Smith River' },
      { src: 'gallery/redwoods/smith_river_walk.jpg', alt: 'Landon in the Smith River', caption: 'Landon in the Smith River' },
      { src: 'gallery/redwoods/perfect_lighting.jpg', alt: 'Perfect lighting', caption: 'Perfect lighting' },
      { src: 'gallery/redwoods/hint_of_red.jpg', alt: 'A hint of red', caption: 'A hint of red' },
      { src: 'gallery/redwoods/big_tree.jpg', alt: 'Landon next to a thick, tall, old tree', caption: 'Landon next to a thick, tall, old tree' },
      { src: 'gallery/redwoods/tree_hugger.jpg', alt: 'Certified tree hugger', caption: 'Certified tree hugger' },
      { src: 'gallery/redwoods/redwood_noodles.jpg', alt: 'Campsite noodles', caption: 'Campsite noodles' },
      { src: 'gallery/redwoods/redwood_dumplings.jpg', alt: 'Campsite dumplings', caption: 'Campsite dumplings' },
      { src: 'gallery/redwoods/banana_slugs.jpg', alt: 'Banana slugs', caption: 'Banana slugs' },
      { src: 'gallery/redwoods/dense_forest.jpg', alt: 'Dense forest', caption: 'Dense forest' },
      { src: 'gallery/redwoods/tent_view.jpg', alt: 'Shoes off in the Asian tent', caption: 'Shoes off in the Asian tent' },
    ],
  },
  
  // Copy an album block above (from { to },) for each new album.
];