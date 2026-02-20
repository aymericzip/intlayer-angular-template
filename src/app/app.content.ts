import {
  t,
  enu,
  cond,
  gender,
  md,
  html,
  Dictionary,
  insert,
  file,
  nest,
} from 'intlayer';

const appContent = {
  key: 'app',
  content: {
    title: t({
      en: 'My Application',
      fr: 'Mon Application',
      es: 'Mi Aplicación',
    }),
    congratulations: t({
      en: 'Congratulations! Your app is running. 🎉',
      fr: "Félicitations! Votre application est en cours d'exécution. 🎉",
      es: '¡Felicidades! Tu aplicación está en ejecución. 🎉',
    }),
    markdownContent: md(
      t({
        en: '# Markdown Header\nThis is some **bold** text.',
        fr: '# En-tête Markdown\nCeci est du texte **gras**.',
        es: '# Encabezado Markdown\nEste es un texto **en negrita**.',
      }),
    ),
    cars: enu({
      '<-1': t({
        en: 'Negative cars',
        fr: 'Voitures négatives',
        es: 'Coches negativos',
      }),
      '0': t({ en: 'No cars', fr: 'Pas de voitures', es: 'Sin coches' }),
      '1': t({ en: 'One car', fr: 'Une voiture', es: 'Un coche' }),
      '>1': t({
        en: 'Multiple cars',
        fr: 'Plusieurs voitures',
        es: 'Múltiples coches',
      }),
    }),
    htmlContent: html(
      t({
        en: '<strong>Bold HTML</strong>',
        fr: '<strong>HTML Gras</strong>',
        es: '<strong>HTML Negrita</strong>',
      }),
    ),
    nested: {
      deep: {
        text: t({
          en: 'Deeply nested text',
          fr: 'Texte profondément imbriqué',
          es: 'Texto profundamente anidado',
        }),
      },
    },
    conditionalContent: cond({
      true: t({
        en: 'Condition is true',
        fr: 'La condition est vraie',
        es: 'La condición es verdadera',
      }),
      false: t({
        en: 'Condition is false',
        fr: 'La condition est fausse',
        es: 'La condición es falsa',
      }),
    }),
    genderContent: gender({
      male: t({
        en: 'Male content',
        fr: 'Contenu masculin',
        es: 'Contenido masculino',
      }),
      female: t({
        en: 'Female content',
        fr: 'Contenu féminin',
        es: 'Contenido femenino',
      }),
      fallback: t({
        en: 'Neutral content',
        fr: 'Contenu neutre',
        es: 'Contenido neutral',
      }),
    }),
    functionContent: () => 'Function executed',
    asyncFunctionContent: async () =>
      new Promise((resolve) =>
        setTimeout(() => resolve('Async function executed'), 100),
      ),
    insertionContent: insert(`Hello {{name}} from {{city}}`),
    fileContent: file('./fileContent.txt'),
  },
} satisfies Dictionary;

export default appContent;
