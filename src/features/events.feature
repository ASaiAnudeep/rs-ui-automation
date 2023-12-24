Feature: Events

  Scenario: Check count of delivered and failed events
    Given I login to application
    And I select "UI-Automation-Destination" destination
    When I navigate to events tab
    Then I check events delivered
    And I check events failed
    
    
