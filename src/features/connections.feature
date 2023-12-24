Feature: Connections

  Scenario: Create a connection between source and destination
    Given I login to application
    And I select "UI-Automation-Source" source
    When I navigate to overview tab
    And I add an existing destination "UI-Automation-Destination"
    Then I disconnect "UI-Automation-Destination" destination
    
