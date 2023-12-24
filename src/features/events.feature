Feature: Events

  Scenario: Check count of delivered and failed events
    Given I login to application
    And I select "UI-Automation-Destination" destination
    When I navigate to events tab
    Then I expect "0" events to be delivered
    And I expect "0" events to be failed
    
    
