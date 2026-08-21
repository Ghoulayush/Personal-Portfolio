import Script from "next/script";

type CredlyBadgeProps = {
  badgeId: string;
};

/**
 * Renders a Credly shareable badge. The embed script replaces the placeholder
 * div with an iframe once it loads (deferred until after page load).
 */
export function CredlyBadge({ badgeId }: CredlyBadgeProps) {
  return (
    <>
      <div
        data-iframe-width="150"
        data-iframe-height="270"
        data-share-badge-id={badgeId}
        data-share-badge-host="https://www.credly.com"
      />
      <Script
        src="https://cdn.credly.com/assets/utilities/embed.js"
        strategy="lazyOnload"
      />
    </>
  );
}
