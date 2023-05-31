import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

export default function SolarSystem() {
  return (
    <div data-testid="solar-system">
      <Title headline="Planetas" />
      {planets.map((planet) => (<PlanetCard
        planetImage={ planet.image }
        planetName={ planet.name }
        key={ planet.name }
      />))}
    </div>
  );
}
