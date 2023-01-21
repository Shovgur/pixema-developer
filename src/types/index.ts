export type FilmType = {
  id: number;
  name: string;
  type: string;
  release_date: string;
  year: number;
  description: string;
  genre: any;
  tagline: string;
  poster: string;
  backdrop: string;
  runtime: number;
  trailer: any;
  budget: any;
  revenue: any;
  views: number;
  popularity: number;
  imdb_id: string;
  tmdb_id: number;
  season_count: number;
  fully_synced: boolean;
  allow_update: boolean;
  created_at: string;
  updated_at: string;
  language: string;
  country: any;
  original_title: string;
  affiliate_link: any;
  certification: string;
  episode_count: number;
  series_ended: boolean;
  is_series: boolean;
  show_videos: boolean;
  adult: boolean;
  rating: string;
  model_type: string;
  vote_count: number;
};

export type RegisterUserDataType = {
  first_name: string;
  email: string;
  password: string;
  password_confirmation: string;
  token_name: string;
  callback?: () => void;
};

export type LoginUserDataType = {
  email: string;
  password: string;
  token_name: string;
  callback?: () => void;
};
