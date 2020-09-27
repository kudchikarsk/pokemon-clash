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