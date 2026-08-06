export type MusicItem = {
  id: string;
  artist: string;
  title: string;
  year?: number;
  genre?: string;
  note?: string;
  placeholder?: boolean;
};

export type MusicConfig = {
  featuredAlbumId?: string;
  albums: MusicItem[];
  artists: MusicItem[];
  note: string;
};
