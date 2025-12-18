import AppHeader from "../AppHeader";
import "./style.scss";

export default function MainLayout() {
  return (
    <section className="layout">
      <div className="container">
        <AppHeader />
      </div>
    </section>
  );
}
