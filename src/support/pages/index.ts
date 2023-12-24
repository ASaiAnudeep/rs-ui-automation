import ConnectionsPage from "./connections.page.js";
import LoginPage from "./login.page.js";
import SourcesPage from "./sources.page.js";

export default  {
  login: new LoginPage(),
  connections: new ConnectionsPage(),
  sources: new SourcesPage(),
}