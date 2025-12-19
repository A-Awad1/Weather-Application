import AppHeader from "../AppHeader";
import MainHeading from "../MainHeading";
import "./index.scss";

export default function MainLayout() {
  return (
    <section className="layout">
      <div className="container">
        <AppHeader />
        <MainHeading />
      </div>
    </section>
  );
}
