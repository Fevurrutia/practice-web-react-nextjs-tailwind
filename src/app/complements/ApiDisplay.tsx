import { Pokemon } from "../api/ServiceApi";
export interface PokemonListProps {
  dataPoke: Pokemon[];
}

const ApiDisplay = ({ dataPoke }: PokemonListProps) => {
  return (
    <div id="api" className="mt-10 max-w-5xl mx-auto">
      <p className="uppercase text-3xl text-slate-500 font-bold tracking-wider text-center mb-5">
        API Service
      </p>
      <section className="grid grid-cols-2 gap-3">
        {dataPoke.map((poke, index) => (
          <article key={index} className="bg-slate-600 rounded-md p-6">
            <div className="flex gap-2">
              <p className="font-bold text-white">Nombre: </p>
              <span className="font-thin text-white">{poke.name}</span>
            </div>
            <div className="flex gap-2">
              <p className="font-bold text-white">Url: </p>
              <span className="font-thin text-white">{poke.url}</span>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};

export default ApiDisplay;
