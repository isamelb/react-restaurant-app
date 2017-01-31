export function formatPrice(cents) {
  return `$${(cents / 100).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
}

export function rando(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function slugify(text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}

export function getFunName() {
  const adjectives = ['peluca', 'bella', 'sucia', 'chocolate', 'elegante', 'rica', 'golosa', 'pete', 'largo', 'petardo', 'sapeee', 'loquita', 'sapeee', 'peluca', 'trolazo', 'putazo', 'chupapija', 'lechero', 'mcgivergota'];

  const nouns = ['mujer', 'hombre', 'niño', 'trolazo', 'loquita', 'gente', 'padre', 'concha', 'prima', 'primo', 'traviesa', 'esposa', 'monja', 'pie', 'enfermera', 'panadero', 'delalora'];

  return `${rando(adjectives)}-${rando(adjectives)}-${rando(nouns)}`;
}
