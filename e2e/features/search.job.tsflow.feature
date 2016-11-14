Feature: EPAM Search job tsflow

  @Important
  Scenario Outline: Searching and checking tsflow
    When I click on careers menu tsflow
    Then I enter '<search>' tsflow
    And I see '<autocomplete>' vacancy tsflow
    Then I reopen page tsflow
    When I enter '<search>' vacancy tsflow
    Then I click to find tsflow
    Then I check result '<search>' tsflow


    Examples:
      |search     |autocomplete  |
      |JavaScript |JavaScript    |