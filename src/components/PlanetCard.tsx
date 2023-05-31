type PlanetProps = {
  planetName:string,
  planetImage:string,
};

export default function PlanetCard({ planetImage, planetName }:PlanetProps) {
  return (
    <div data-testid="planet-card">
      <p data-testid="planet-name">{planetName}</p>
      <img src={ planetImage } alt={ `Planeta ${planetName}` } />
    </div>
  );
}
