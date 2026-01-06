import "./index.scss";
import AppContent from "../AppContent";
import AppHeader from "../AppHeader";
import AppFooter from "../AppFooter";

export default function MainLayout() {
  return (
    <section className="layout">
      <div className="container">
        <AppHeader />
        <AppContent />
      </div>
      <AppFooter />
    </section>
  );
}
