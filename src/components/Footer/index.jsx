//ok-Deve mostrar o ano atual.

export default function Footer() {
  return <footer>{new Date().getFullYear()}</footer>;
}
