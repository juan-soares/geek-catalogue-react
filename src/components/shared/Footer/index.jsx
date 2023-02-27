export default function Footer() {
  const actualYear = new Date();

  return <footer>{actualYear.getFullYear()}</footer>;
}
