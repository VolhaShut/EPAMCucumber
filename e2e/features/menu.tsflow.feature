Feature: EPAM Navigate menu tsflow

  @Important
  Scenario Outline: Navigate menu tsflow
    When I click to '<menubutton>' on menu tsflow
    And I wait to load page tsflow
    Then I expect to see '<page>' page tsflow


    Examples:
      |menubutton |page       |
      |solutions  |Solutions  |
      |industries |Industries |
      |about      |About      |
      |ideas      |Ideas      |
      |careers    |Careers    |
      |contact    |Contact    |