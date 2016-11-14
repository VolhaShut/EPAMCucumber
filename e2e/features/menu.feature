Feature: EPAM Navigate menu

  @Important
  Scenario Outline: Navigate menu
    When I click to '<menubutton>' on menu
    And I wait to load page
    Then I expect to see '<page>' page


    Examples:
    |menubutton |page       |
    |solutions  |Solutions  |
    |industries |Industries |
    |about      |About      |
    |ideas      |Ideas      |
    |careers    |Careers    |
    |contact    |Contact    |