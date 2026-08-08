import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { Terminal } from "@/components/terminal/Terminal";
import { games } from "@/data/games";
import { music } from "@/data/music";
import { site } from "@/data/site";
import type { Game, GameStatus } from "@/types/game";

export const metadata: Metadata = {
  title: "Lab",
  description:
    "Experiments and hands-on builds — a terminal, small games, and music I'm into.",
  alternates: { canonical: "/lab" },
  openGraph: { url: new URL("/lab", site.url).toString() },
};

const gameStatusOrder: GameStatus[] = [
  "currently-playing",
  "finished",
  "favorite",
];

const gameStatusLabels: Record<GameStatus, string> = {
  "currently-playing": "Currently playing",
  finished: "Finished",
  favorite: "Favorites",
};

function groupGames(source: Game[]): Map<GameStatus, Game[]> {
  const grouped = new Map<GameStatus, Game[]>();
  for (const status of gameStatusOrder) grouped.set(status, []);
  for (const game of source) {
    const list = grouped.get(game.status) ?? [];
    list.push(game);
    grouped.set(game.status, list);
  }
  return grouped;
}

function EmptyCollection({ label }: { label: string }) {
  return (
    <div className="mt-6 border border-dashed border-line p-8 sm:p-10">
      <p className="font-mono text-xs uppercase tracking-[0.15em] text-ink-faint">
        Index — 01 / 02 / 03
      </p>
      <p className="mt-3 max-w-xl text-ink-soft">
        The {label.toLowerCase()} collection is in progress — entries land here
        as they&apos;re added.
      </p>
    </div>
  );
}

export default function LabPage() {
  const groupedGames = groupGames(games);
  const hasGames = games.length > 0;
  const hasMusic = music.albums.length > 0 || music.artists.length > 0;
  const featuredAlbum = music.albums.find(
    (album) => album.id === music.featuredAlbumId,
  );

  return (
    <Container className="py-section-sm md:py-20">
      <PageHeader
        index="03"
        label="Lab"
        title="Things I build and tinker with."
        lede="Interactive experiments, small games, and collections that don't belong in the portfolio proper."
      />

      <section aria-labelledby="lab-terminal" className="mt-14">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
          <h2
            id="lab-terminal"
            className="font-mono text-xs uppercase tracking-[0.2em] text-accent"
          >
            Prefer the command line?
          </h2>
          <p className="font-mono text-xs text-ink-faint">
            Read-only — nothing leaves your browser
          </p>
        </div>
        <div className="mt-5">
          <Terminal />
        </div>
      </section>

      <section aria-labelledby="lab-games" className="mt-20">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-t border-line pt-10">
          <h2
            id="lab-games"
            className="font-mono text-xs uppercase tracking-[0.2em] text-accent"
          >
            Games
          </h2>
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-ink-faint">
            {hasGames ? `${games.length} entries` : "Collection in progress"}
          </p>
        </div>

        {!hasGames ? (
          <EmptyCollection label="Games" />
        ) : (
          <div className="mt-6">
            {gameStatusOrder.map((status) => {
              const list = groupedGames.get(status) ?? [];
              if (list.length === 0) return null;
              return (
                <div key={status} className="border-b border-line py-8">
                  <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-ink-soft">
                    {gameStatusLabels[status]}
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {list.map((game) => (
                      <li
                        key={game.id}
                        className="flex flex-wrap items-baseline gap-x-3 gap-y-1"
                      >
                        <span className="font-medium tracking-tight text-ink">
                          {game.title}
                        </span>
                        <span className="font-mono text-xs text-ink-faint">
                          {game.genre}
                          {game.platform ? ` · ${game.platform}` : ""}
                        </span>
                        {game.note && (
                          <span className="w-full text-sm text-ink-soft sm:w-auto sm:flex-1 sm:text-right">
                            {game.note}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        )}
      </section>

      <section aria-labelledby="lab-music" className="mt-20">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-t border-line pt-10">
          <h2
            id="lab-music"
            className="font-mono text-xs uppercase tracking-[0.2em] text-accent"
          >
            Music
          </h2>
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-ink-faint">
            {hasMusic
              ? `${music.albums.length} albums · ${music.artists.length} artists`
              : "Collection in progress"}
          </p>
        </div>

        {!hasMusic ? (
          <EmptyCollection label="Music" />
        ) : (
          <div className="mt-6">
            {featuredAlbum && (
              <div className="border-b border-line py-8">
                <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-ink-soft">
                  On rotation
                </h3>
                <p className="mt-3 text-lg font-medium tracking-tight text-ink">
                  {featuredAlbum.artist} — {featuredAlbum.title}
                </p>
                {featuredAlbum.note && (
                  <p className="mt-1 text-sm text-ink-soft">
                    {featuredAlbum.note}
                  </p>
                )}
              </div>
            )}

            {music.albums.length > 0 && (
              <div className="border-b border-line py-8">
                <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-ink-soft">
                  Albums
                </h3>
                <ul className="mt-4 space-y-3">
                  {music.albums.map((album) => (
                    <li
                      key={album.id}
                      className="flex flex-wrap items-baseline gap-x-3 gap-y-1"
                    >
                      <span className="font-medium tracking-tight text-ink">
                        {album.artist} — {album.title}
                      </span>
                      {album.year && (
                        <span className="font-mono text-xs text-ink-faint">
                          {album.year}
                        </span>
                      )}
                      {album.note && (
                        <span className="w-full text-sm text-ink-soft sm:w-auto sm:flex-1 sm:text-right">
                          {album.note}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {music.artists.length > 0 && (
              <div className="py-8">
                <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-ink-soft">
                  Artists
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {music.artists.map((artist) => (
                    <li
                      key={artist.id}
                      className="border border-line px-3 py-1.5 font-mono text-xs text-ink-soft"
                    >
                      {artist.artist}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </section>
    </Container>
  );
}
