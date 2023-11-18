export default function autoImport() {
  return [
    "Captura de tela 2023-11-09 165846.png",
    "Captura de tela 2023-11-09 170125.png",
    "Captura de tela 2023-11-09 170238.png",
    "Captura de tela 2023-11-09 170455.png",
    "Captura de tela 2023-11-09 170607.png",
    "Captura de tela 2023-11-10 153540.png",
    "Captura de tela 2023-11-10 153806.png",
    "Captura de tela 2023-11-10 154112.png",
    "Captura de tela 2023-11-10 154253.png",
  ]
    .map(
      (i) =>
        `${window.location.protocol}//${window.location.host}/public/site/site/${i}`
    )
    .map((i) => i.replaceAll(" ", "%20"));
}
