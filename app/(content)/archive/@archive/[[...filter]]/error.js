"use client";

export default function ErrorPage({ error }) {
  return (
    <div id="error">
      <h1>{error.message}</h1>
      <p>The filter you're looking for doesn't exist.</p>
    </div>
  );
}
