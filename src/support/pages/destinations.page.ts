export default class DestinationsPage {
  get tabEvents() { return $('div[data-node-key="Events"]'); }
  get headerEventsDelivery() { return $('span*=Event Delivery'); }
  get textDelivered() { return $('//div[text()="Delivered"]/preceding-sibling::span'); }
  get textFailed() { return $('//div[text()="Failed"]/preceding-sibling::span'); }

  headerDestination(name: string) { return $(`h3=${name}`); }
}