export interface FeedItem {
  id: string;
  type: 'violence' | 'banal' | 'meme' | 'ad' | 'tragedy';
  tag: string;
  source: string;
  timeAgo: string;
  headline: string;
  bodyText: string;
  censored: boolean;
  censoredLabel?: string;
  imageSrc?: string;
  censorLevel?: 'heavy' | 'medium' | 'partial';
  imagePromptDescription?: string;
  likes: number;
  commentsCount: number;
  shares: number;
  comments: { user: string; text: string; time: string }[];
}

export interface FloatingAlert {
  id: string;
  text: string;
  subtext?: string;
  level: number;
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  styleType: 'banner' | 'stamp' | 'modal' | 'pill' | 'glitchBox';
  dismissed: boolean;
}

export interface ReaderMetrics {
  warningsGenerated: number;
  warningsDismissed: number;
  scrollDepthPercentage: number;
  secondsElapsed: number;
  redactionsClicked: number;
  feedInteractions: number;
}
