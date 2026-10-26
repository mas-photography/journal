import logansPass from '../assets/logans_pass.jpg';

/**
 * Hero copy and background settings for one page.
 */
export interface HeroSectionConfig {
  /**
   * Main hero headline text.
   */
  text: string;
  /**
   * Optional hero subtitle text.
   */
  subtitle?: string;
  /**
   * Hero background image URL.
   */
  backgroundImage: string;
}

/**
 * Centralized hero configuration for all top-level pages and post fallback.
 */
export interface HeroConfig {
  home: HeroSectionConfig;
  about: HeroSectionConfig;
  /**
   * Default hero image shared by all article pages.
   */
  postDefaultBackground: string;
}

export const heroConfig: HeroConfig = {
  home: {
    text: 'engineer by day, photographer by night',
    subtitle: 'telling the stories behind my favorite shots',
    backgroundImage: logansPass.src,
  },
  about: {
    text: 'about',
    subtitle: 'the mind behind the lens',
    backgroundImage: logansPass.src,
  },
  postDefaultBackground: logansPass.src,
};