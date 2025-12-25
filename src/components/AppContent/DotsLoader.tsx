import "./DotsLoader.scss";

export default function DotsLoader() {
  return (
    <section className="dots-loader skeleton">
      <div>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <span>Loading...</span>
    </section>
  );
}
