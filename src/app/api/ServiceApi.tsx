export interface Pokemon {
  name: string,
  url: string
}

export interface PokemonApiResponse {
  count: number,
  next: string | null,
  previous: string | null,
  results: Pokemon[]
}

const ServiceApi = async (): Promise<PokemonApiResponse | null> => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
    if(!res.ok){
      throw new Error('Error a obtener datos')
    }
    const data: PokemonApiResponse = await res.json();
    return data
  } catch (error) {
    console.log(error);
    return null
  }
};

export default ServiceApi;
