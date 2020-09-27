export function getImage(pokemon) {   
    return pokemon.sprites.other["official-artwork"].front_default
}

export function getDescription(species, version = "red") {
    return species.flavor_text_entries
        .filter(f => f.version.name == version)
        .map(f => f.flavor_text)
        .reduce((p, c) => p + c)
        .replace("\f"," ");
}

export const starterPack =[1,4,7,10,13,16,19,21,23,25,27,29,32,35,37,39,41,43];

export const defaultImage = `/images/poke.gif`;