const stringToBinary = (str: string): string =>
  str
    .trim()
    .split("")
    .map((char) => char.charCodeAt(0).toString(2).padStart(8, "0"))
    .join("");

const binaryToString = (bin: string): string => {
  const chunks = bin.match(/.{8}/g) || [];

  return chunks
    .map((chunk) => String.fromCharCode(parseInt(chunk, 2)))
    .join("");
};

const bitwiseXOR = (a: string, b: string): string => {
  return [...a].map((char, index) => +char ^ +b[index]).join("");
};

export const encrypt = (textoClaro: string, chave: string): string => {
  const textoClaroBinario = stringToBinary(textoClaro);
  const chaveBinaria = stringToBinary(chave);

  const textoCifrado = bitwiseXOR(textoClaroBinario, chaveBinaria);

  return textoCifrado;
};

export const decrypt = (textoCifrado: string, chave: string): string => {
  const chaveBinaria = stringToBinary(chave);

  const textoClaroBinario = bitwiseXOR(textoCifrado, chaveBinaria);
  const textoClaro = binaryToString(textoClaroBinario);

  return textoClaro;
};
