export default function Footer() {
  const date = new Date();

  return (
    <footer>
      <span>{date.getFullYear()}</span>
      <span>Copyright &#169;</span>
    </footer>
  );
}
