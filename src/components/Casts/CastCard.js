export function CastCard({ profile, name, character }) {
  return (
    <div className="cast-card">
      <img src={profile} alt={name + " Profile Photo"} />
      <div className="cast-details">
        <p>{name}</p>
        <p>Character: {character}</p>
      </div>
    </div>
  );
}
