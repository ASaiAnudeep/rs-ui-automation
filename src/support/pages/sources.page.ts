export default class SourcesPage {
  get tabOverview() { return $('div[data-node-key="Overview"]'); }
  get headerEventsIngested() { return $('div*=Events Ingested'); }
  get btnAddDestination() { return $('span*=Add Destination'); }
  get btnUseExistingDestination() { return $('span*=Use Existing Destination'); }
  get headerConnectExistingDestination() { return $('h3*=Connect existing destination'); }
  get btnContinue() { return $('span*=Continue'); }
  get headerConnectionSettings() { return $('h4*=Connection Settings'); }
  get alertConnectionSuccessfully() { return $('div*=Source connected to destination successfully'); }
  get btnDisconnectDestination() { return $('span*=Disconnect Destination'); }
  get btnConfirm() { return $('span*=Confirm'); }
  get alertConnectionRemovedSuccessfully() { return $('div*=Connection removed successfully'); }

  headerSource(name: string) { return $(`h3=${name}`); }
  rowDestination(name: string) { return $(`div=${name}`); }
  rowDestinationOptions() { return $(`[aria-label='Context menu']`); }
}