Feature: EPAM Search job

  @Important
  Scenario Outline: Searching and checking
    When I click on careers menu
    Then I enter '<search>'
    And I see '<autocomplete>' vacancy
    Then I reopen page
    When I enter '<search>' vacancy
    Then I click to find
    Then I check result '<search>'


    Examples:
    |search     |autocomplete  |
    |javascript |javascript    |