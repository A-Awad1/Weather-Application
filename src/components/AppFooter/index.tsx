import "./index.scss";

export default function AppFooter() {
  return (
    <footer className="app-footer">
      <div className="container">
        <div>
          <div className="challenge-info">
            <div>
              <h3>
                <img src="/general-icons/icon-bulb.svg" alt="challenge icon" />
                challenge by
              </h3>
              <a
                href="https://www.frontendmentor.io/challenges/weather-app-K1FhddVm49"
                target="_blank"
              >
                Frontend Mentor
              </a>
            </div>
            <div>
              <h3>
                <img src="/general-icons/icon-code.svg" alt="code icon" />
                coded by
              </h3>
              <a href="https://www.linkedin.com/in/ahmedawad123/" target="_blank">
                Ahmed Awad
              </a>
            </div>
          </div>
          <div className="attributions">
            <h3>
              <img src="/general-icons/icon-tag.svg" alt="attributions icon" />
              attributions
            </h3>
            <ul>
              <li>
                <img src="/general-icons/icon-hand.svg" alt="item icon" />
                <div>
                  <span>Weather data from</span>
                  <a href="https://open-meteo.com/" target="_blank">
                    Open-Meteo.com
                  </a>
                </div>
              </li>
              <li>
                <img src="/general-icons/icon-hand.svg" alt="item icon" />
                <div>
                  <span>Address by locating from</span>
                  <a href="https://www.openstreetmap.org/copyright" target="_blank">
                    &#169; OpenStreetMap
                  </a>
                </div>
              </li>
              <li>
                <img src="/general-icons/icon-hand.svg" alt="item icon" />
                <div>
                  <span>Address by city search from</span>
                  <p>
                    <a href="https://npm.io/package/world-cities-json" target="_blank">
                      world-cities-json
                    </a>{" "}
                    depending on{" "}
                    <a href="https://simplemaps.com/data/world-cities" target="_blank">
                      SimpleMaps World Cities Database
                    </a>{" "}
                    owned by Pareto Software, LLC and licensed under the{" "}
                    <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">
                      Creative Commons Attribution 4.0 International (CC BY 4.0) license
                    </a>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
