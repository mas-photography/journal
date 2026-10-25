import type { ImageMetadata } from 'astro';
import avatarImg from '../assets/avatar.jpg';

/**
 * Allowed social entry keys in profile configuration.
 */
export type ProfileSocialKey = 'github' | 'x' | 'email' | 'website' | 'instagram' | 'linkedin' | 'beli';

/**
 * One social link item rendered on `/about`.
 */
export interface ProfileSocialLink {
  key: ProfileSocialKey;
  label: string;
  url: string;
}

/**
 * Personal profile settings used by About page and article author schema.
 */
export interface ProfileConfig {
  /**
   * Optional avatar URL for About page and structured data.
   */
  avatar?: string | ImageMetadata;
  /**
   * Display name used across the site.
   */
  name: string;
  /**
   * Short headline/title shown on About page.
   */
  title: string;
  /**
   * Short bio text shown on About page and in schema.
   */
  bio: string;
  /**
   * Optional location text.
   */
  location?: string;
  /**
   * Optional contact email.
   */
  email?: string;
  /**
   * Personal GitHub profile URL (separate from repo URL).
   */
  githubProfileUrl: string;
  /**
   * Social links displayed in About page social row.
   */
  socials: ProfileSocialLink[];
}

export const profileConfig: ProfileConfig = {
  avatar: avatarImg,
  name: 'Stephanie Ma | 马李天一',
  title: 'Engineer / Writer / Photographer',
  bio: 'Got bored of Instagram, so I built this with Astro & JavaScript to use instead. Camera: Sony Alpha 7 IV, lenses: Sigma 24-70 mm f/2.8 Art & Sony FE 400-800 mm f/6.3-8 G OSS',
  location: 'Houston, TX',
  email: 'stephanie.ma.2022@gmail.com',
  githubProfileUrl: 'https://example.com',
  socials: [
    { key: 'instagram', label: 'Instagram', url: 'https://www.instagram.com/ma.s_photography/' },
    { key: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/stephanie-m-b4a1bb128/' },
    { key: 'beli', label: 'Beli', url: 'https://beliapp.co/profile/stephanie_ma9' },
  ],
};