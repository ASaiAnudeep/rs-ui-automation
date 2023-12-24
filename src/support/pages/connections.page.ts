export default class ConnectionsPage {
  get headerConnections() { return $('h3=Connections'); }

  headerSource(name: string) { return $(`#sources-list`).$(`span=${name}`); }
}