import type { Schema, Struct } from '@strapi/strapi';

export interface SharedHomeBentoCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_home_bento_cards';
  info: {
    displayName: 'home.bento-card';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Text;
    featured_wide: Schema.Attribute.Integer;
    icon_name: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    image_alt: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedHomeFooterLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_home_footer_links';
  info: {
    displayName: 'home.footer-link';
    icon: 'check';
  };
  attributes: {
    text: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedHomeReasonCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_home_reason_cards';
  info: {
    displayName: 'home.reason-card';
    icon: 'clock';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon_name: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedHomeReviewItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_home_review_items';
  info: {
    displayName: 'home.review-item';
    icon: 'cog';
  };
  attributes: {
    name: Schema.Attribute.String;
    quote: Schema.Attribute.Text;
    role: Schema.Attribute.String;
    stars: Schema.Attribute.Integer;
  };
}

export interface SharedHomeTabPreviewItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_home_tab_preview_items';
  info: {
    displayName: 'home.tab-preview-item';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    image_alt: Schema.Attribute.String;
    tab_key: Schema.Attribute.String;
    tab_label: Schema.Attribute.String;
  };
}

export interface SharedHomeTickerItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_home_ticker_items';
  info: {
    displayName: 'home.ticker-item';
  };
  attributes: {
    label: Schema.Attribute.String;
  };
}

export interface SharedHomeTrustItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_home_trust_items';
  info: {
    displayName: 'home.trust-item';
    icon: 'attachment';
  };
  attributes: {
    icon_name: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface SharedLinkItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_link_items';
  info: {
    displayName: 'shared.link-item';
  };
  attributes: {
    is_external: Schema.Attribute.Integer;
    text: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
  };
  attributes: {
    canonical_url: Schema.Attribute.String;
    meta_description: Schema.Attribute.Text;
    meta_keywords: Schema.Attribute.String;
    meta_title: Schema.Attribute.String;
    og_description: Schema.Attribute.Text;
    og_image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    og_title: Schema.Attribute.String;
    robots: Schema.Attribute.Enumeration<
      ['index,follow', 'noindex,follow', 'noindex,nofollow']
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.home-bento-card': SharedHomeBentoCard;
      'shared.home-footer-link': SharedHomeFooterLink;
      'shared.home-reason-card': SharedHomeReasonCard;
      'shared.home-review-item': SharedHomeReviewItem;
      'shared.home-tab-preview-item': SharedHomeTabPreviewItem;
      'shared.home-ticker-item': SharedHomeTickerItem;
      'shared.home-trust-item': SharedHomeTrustItem;
      'shared.link-item': SharedLinkItem;
      'shared.seo': SharedSeo;
    }
  }
}
