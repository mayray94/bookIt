$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/api/teams.feature");
formatter.feature({
  "name": "Team module verifications",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@teams"
    },
    {
      "name": "@db"
    }
  ]
});
formatter.scenarioOutline({
  "name": "2 point team info verification,Api and Database",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User logged in to Bookit api as teacher role",
  "keyword": "Given "
});
formatter.step({
  "name": "User sends GET request to \"/api/teams/{id}\" with \"\u003cteam_id\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.step({
  "name": "Team name should be \"\u003cteam_name\u003e\" in response",
  "keyword": "And "
});
formatter.step({
  "name": "Database Query should have  \"\u003cteam_id\u003e\" and \"\u003cteam_name\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "team_id",
        "team_name"
      ]
    },
    {
      "cells": [
        "11267",
        "BugBusters"
      ]
    },
    {
      "cells": [
        "11269",
        "PhantomPain"
      ]
    },
    {
      "cells": [
        "11275",
        "Scarface"
      ]
    },
    {
      "cells": [
        "11281",
        "TheyBite"
      ]
    },
    {
      "cells": [
        "11287",
        "LoafandCamouflage"
      ]
    },
    {
      "cells": [
        "11293",
        "TeaForTwo"
      ]
    },
    {
      "cells": [
        "11299",
        "Galaxina"
      ]
    },
    {
      "cells": [
        "11305",
        "GangsofWasseypur"
      ]
    },
    {
      "cells": [
        "11311",
        "Breathless"
      ]
    },
    {
      "cells": [
        "11317",
        "Fountain"
      ]
    },
    {
      "cells": [
        "11323",
        "Volga"
      ]
    },
    {
      "cells": [
        "11329",
        "BadRonald"
      ]
    },
    {
      "cells": [
        "11335",
        "RiseofCatherinetheGreat"
      ]
    },
    {
      "cells": [
        "11341",
        "Borderland"
      ]
    },
    {
      "cells": [
        "11347",
        "Stardom"
      ]
    },
    {
      "cells": [
        "11353",
        "CatBallou"
      ]
    },
    {
      "cells": [
        "11359",
        "BadBoys"
      ]
    },
    {
      "cells": [
        "11365",
        "FearIsland"
      ]
    },
    {
      "cells": [
        "11371",
        "AnniversaryParty"
      ]
    },
    {
      "cells": [
        "11377",
        "Jumanji"
      ]
    },
    {
      "cells": [
        "11383",
        "Untraceable"
      ]
    },
    {
      "cells": [
        "11389",
        "BlingRing"
      ]
    },
    {
      "cells": [
        "11395",
        "OctoberSky"
      ]
    },
    {
      "cells": [
        "11401",
        "Angel"
      ]
    },
    {
      "cells": [
        "11407",
        "StoryofUs"
      ]
    },
    {
      "cells": [
        "11413",
        "LifeItself"
      ]
    },
    {
      "cells": [
        "11419",
        "Stay"
      ]
    },
    {
      "cells": [
        "11425",
        "Motorama"
      ]
    },
    {
      "cells": [
        "11431",
        "BlitheSpirit"
      ]
    },
    {
      "cells": [
        "11437",
        "Samurai"
      ]
    },
    {
      "cells": [
        "11443",
        "HighSierra"
      ]
    },
    {
      "cells": [
        "11449",
        "CurbDance"
      ]
    },
    {
      "cells": [
        "11455",
        "Super"
      ]
    },
    {
      "cells": [
        "11461",
        "Marjoe"
      ]
    },
    {
      "cells": [
        "11467",
        "Kicking"
      ]
    },
    {
      "cells": [
        "11473",
        "HeartyPaws"
      ]
    },
    {
      "cells": [
        "11479",
        "CoolasIce"
      ]
    },
    {
      "cells": [
        "11485",
        "MadeinAmerica"
      ]
    },
    {
      "cells": [
        "11491",
        "RoadHard"
      ]
    },
    {
      "cells": [
        "11497",
        "AsGoodasItGets"
      ]
    },
    {
      "cells": [
        "11503",
        "QuestforFire"
      ]
    },
    {
      "cells": [
        "11509",
        "teachers"
      ]
    }
  ]
});
formatter.scenario({
  "name": "2 point team info verification,Api and Database",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@teams"
    },
    {
      "name": "@db"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User logged in to Bookit api as teacher role",
  "keyword": "Given "
});
formatter.match({
  "location": "ApiStepDefs.user_logged_in_to_Bookit_api_as_teacher_role()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends GET request to \"/api/teams/{id}\" with \"11267\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.user_sends_GET_request_to_with(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "ApiStepDefs.status_code_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Team name should be \"BugBusters\" in response",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.team_name_should_be_in_response(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database Query should have  \"11267\" and \"BugBusters\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.database_Query_should_have_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "2 point team info verification,Api and Database",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@teams"
    },
    {
      "name": "@db"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User logged in to Bookit api as teacher role",
  "keyword": "Given "
});
formatter.match({
  "location": "ApiStepDefs.user_logged_in_to_Bookit_api_as_teacher_role()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends GET request to \"/api/teams/{id}\" with \"11269\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.user_sends_GET_request_to_with(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "ApiStepDefs.status_code_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Team name should be \"PhantomPain\" in response",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.team_name_should_be_in_response(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database Query should have  \"11269\" and \"PhantomPain\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.database_Query_should_have_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "2 point team info verification,Api and Database",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@teams"
    },
    {
      "name": "@db"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User logged in to Bookit api as teacher role",
  "keyword": "Given "
});
formatter.match({
  "location": "ApiStepDefs.user_logged_in_to_Bookit_api_as_teacher_role()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends GET request to \"/api/teams/{id}\" with \"11275\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.user_sends_GET_request_to_with(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "ApiStepDefs.status_code_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Team name should be \"Scarface\" in response",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.team_name_should_be_in_response(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database Query should have  \"11275\" and \"Scarface\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.database_Query_should_have_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "2 point team info verification,Api and Database",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@teams"
    },
    {
      "name": "@db"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User logged in to Bookit api as teacher role",
  "keyword": "Given "
});
formatter.match({
  "location": "ApiStepDefs.user_logged_in_to_Bookit_api_as_teacher_role()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends GET request to \"/api/teams/{id}\" with \"11281\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.user_sends_GET_request_to_with(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "ApiStepDefs.status_code_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Team name should be \"TheyBite\" in response",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.team_name_should_be_in_response(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database Query should have  \"11281\" and \"TheyBite\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.database_Query_should_have_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "2 point team info verification,Api and Database",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@teams"
    },
    {
      "name": "@db"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User logged in to Bookit api as teacher role",
  "keyword": "Given "
});
formatter.match({
  "location": "ApiStepDefs.user_logged_in_to_Bookit_api_as_teacher_role()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends GET request to \"/api/teams/{id}\" with \"11287\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.user_sends_GET_request_to_with(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "ApiStepDefs.status_code_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Team name should be \"LoafandCamouflage\" in response",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.team_name_should_be_in_response(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database Query should have  \"11287\" and \"LoafandCamouflage\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.database_Query_should_have_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "2 point team info verification,Api and Database",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@teams"
    },
    {
      "name": "@db"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User logged in to Bookit api as teacher role",
  "keyword": "Given "
});
formatter.match({
  "location": "ApiStepDefs.user_logged_in_to_Bookit_api_as_teacher_role()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends GET request to \"/api/teams/{id}\" with \"11293\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.user_sends_GET_request_to_with(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "ApiStepDefs.status_code_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Team name should be \"TeaForTwo\" in response",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.team_name_should_be_in_response(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database Query should have  \"11293\" and \"TeaForTwo\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.database_Query_should_have_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "2 point team info verification,Api and Database",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@teams"
    },
    {
      "name": "@db"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User logged in to Bookit api as teacher role",
  "keyword": "Given "
});
formatter.match({
  "location": "ApiStepDefs.user_logged_in_to_Bookit_api_as_teacher_role()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends GET request to \"/api/teams/{id}\" with \"11299\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.user_sends_GET_request_to_with(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "ApiStepDefs.status_code_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Team name should be \"Galaxina\" in response",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.team_name_should_be_in_response(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database Query should have  \"11299\" and \"Galaxina\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.database_Query_should_have_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "2 point team info verification,Api and Database",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@teams"
    },
    {
      "name": "@db"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User logged in to Bookit api as teacher role",
  "keyword": "Given "
});
formatter.match({
  "location": "ApiStepDefs.user_logged_in_to_Bookit_api_as_teacher_role()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends GET request to \"/api/teams/{id}\" with \"11305\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.user_sends_GET_request_to_with(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "ApiStepDefs.status_code_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Team name should be \"GangsofWasseypur\" in response",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.team_name_should_be_in_response(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database Query should have  \"11305\" and \"GangsofWasseypur\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.database_Query_should_have_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "2 point team info verification,Api and Database",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@teams"
    },
    {
      "name": "@db"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User logged in to Bookit api as teacher role",
  "keyword": "Given "
});
formatter.match({
  "location": "ApiStepDefs.user_logged_in_to_Bookit_api_as_teacher_role()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends GET request to \"/api/teams/{id}\" with \"11311\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.user_sends_GET_request_to_with(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "ApiStepDefs.status_code_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Team name should be \"Breathless\" in response",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.team_name_should_be_in_response(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database Query should have  \"11311\" and \"Breathless\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.database_Query_should_have_and(String,String)"
});
formatter.result({
  "error_message": "java.lang.IndexOutOfBoundsException: Index: 0, Size: 0\r\n\tat java.util.ArrayList.rangeCheck(ArrayList.java:657)\r\n\tat java.util.ArrayList.get(ArrayList.java:433)\r\n\tat com.cybertek.utilities.DBUtils.getRowMap(DBUtils.java:83)\r\n\tat com.cybertek.stepdefs.ApiStepDefs.database_Query_should_have_and(ApiStepDefs.java:107)\r\n\tat ✽.Database Query should have  \"11311\" and \"Breathless\"(file:src/test/resources/features/api/teams.feature:11)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "2 point team info verification,Api and Database",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@teams"
    },
    {
      "name": "@db"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User logged in to Bookit api as teacher role",
  "keyword": "Given "
});
formatter.match({
  "location": "ApiStepDefs.user_logged_in_to_Bookit_api_as_teacher_role()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends GET request to \"/api/teams/{id}\" with \"11317\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.user_sends_GET_request_to_with(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "ApiStepDefs.status_code_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Team name should be \"Fountain\" in response",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.team_name_should_be_in_response(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database Query should have  \"11317\" and \"Fountain\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.database_Query_should_have_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "2 point team info verification,Api and Database",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@teams"
    },
    {
      "name": "@db"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User logged in to Bookit api as teacher role",
  "keyword": "Given "
});
formatter.match({
  "location": "ApiStepDefs.user_logged_in_to_Bookit_api_as_teacher_role()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends GET request to \"/api/teams/{id}\" with \"11323\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.user_sends_GET_request_to_with(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "ApiStepDefs.status_code_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Team name should be \"Volga\" in response",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.team_name_should_be_in_response(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database Query should have  \"11323\" and \"Volga\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.database_Query_should_have_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "2 point team info verification,Api and Database",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@teams"
    },
    {
      "name": "@db"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User logged in to Bookit api as teacher role",
  "keyword": "Given "
});
formatter.match({
  "location": "ApiStepDefs.user_logged_in_to_Bookit_api_as_teacher_role()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends GET request to \"/api/teams/{id}\" with \"11329\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.user_sends_GET_request_to_with(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "ApiStepDefs.status_code_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Team name should be \"BadRonald\" in response",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.team_name_should_be_in_response(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database Query should have  \"11329\" and \"BadRonald\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.database_Query_should_have_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "2 point team info verification,Api and Database",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@teams"
    },
    {
      "name": "@db"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User logged in to Bookit api as teacher role",
  "keyword": "Given "
});
formatter.match({
  "location": "ApiStepDefs.user_logged_in_to_Bookit_api_as_teacher_role()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends GET request to \"/api/teams/{id}\" with \"11335\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.user_sends_GET_request_to_with(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "ApiStepDefs.status_code_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Team name should be \"RiseofCatherinetheGreat\" in response",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.team_name_should_be_in_response(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database Query should have  \"11335\" and \"RiseofCatherinetheGreat\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.database_Query_should_have_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "2 point team info verification,Api and Database",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@teams"
    },
    {
      "name": "@db"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User logged in to Bookit api as teacher role",
  "keyword": "Given "
});
formatter.match({
  "location": "ApiStepDefs.user_logged_in_to_Bookit_api_as_teacher_role()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends GET request to \"/api/teams/{id}\" with \"11341\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.user_sends_GET_request_to_with(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "ApiStepDefs.status_code_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Team name should be \"Borderland\" in response",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.team_name_should_be_in_response(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database Query should have  \"11341\" and \"Borderland\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.database_Query_should_have_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "2 point team info verification,Api and Database",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@teams"
    },
    {
      "name": "@db"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User logged in to Bookit api as teacher role",
  "keyword": "Given "
});
formatter.match({
  "location": "ApiStepDefs.user_logged_in_to_Bookit_api_as_teacher_role()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends GET request to \"/api/teams/{id}\" with \"11347\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.user_sends_GET_request_to_with(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "ApiStepDefs.status_code_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Team name should be \"Stardom\" in response",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.team_name_should_be_in_response(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database Query should have  \"11347\" and \"Stardom\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.database_Query_should_have_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "2 point team info verification,Api and Database",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@teams"
    },
    {
      "name": "@db"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User logged in to Bookit api as teacher role",
  "keyword": "Given "
});
formatter.match({
  "location": "ApiStepDefs.user_logged_in_to_Bookit_api_as_teacher_role()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends GET request to \"/api/teams/{id}\" with \"11353\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.user_sends_GET_request_to_with(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "ApiStepDefs.status_code_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Team name should be \"CatBallou\" in response",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.team_name_should_be_in_response(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database Query should have  \"11353\" and \"CatBallou\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.database_Query_should_have_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "2 point team info verification,Api and Database",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@teams"
    },
    {
      "name": "@db"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User logged in to Bookit api as teacher role",
  "keyword": "Given "
});
formatter.match({
  "location": "ApiStepDefs.user_logged_in_to_Bookit_api_as_teacher_role()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends GET request to \"/api/teams/{id}\" with \"11359\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.user_sends_GET_request_to_with(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "ApiStepDefs.status_code_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Team name should be \"BadBoys\" in response",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.team_name_should_be_in_response(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database Query should have  \"11359\" and \"BadBoys\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.database_Query_should_have_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "2 point team info verification,Api and Database",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@teams"
    },
    {
      "name": "@db"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User logged in to Bookit api as teacher role",
  "keyword": "Given "
});
formatter.match({
  "location": "ApiStepDefs.user_logged_in_to_Bookit_api_as_teacher_role()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends GET request to \"/api/teams/{id}\" with \"11365\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.user_sends_GET_request_to_with(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "ApiStepDefs.status_code_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Team name should be \"FearIsland\" in response",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.team_name_should_be_in_response(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database Query should have  \"11365\" and \"FearIsland\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.database_Query_should_have_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "2 point team info verification,Api and Database",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@teams"
    },
    {
      "name": "@db"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User logged in to Bookit api as teacher role",
  "keyword": "Given "
});
formatter.match({
  "location": "ApiStepDefs.user_logged_in_to_Bookit_api_as_teacher_role()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends GET request to \"/api/teams/{id}\" with \"11371\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.user_sends_GET_request_to_with(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "ApiStepDefs.status_code_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Team name should be \"AnniversaryParty\" in response",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.team_name_should_be_in_response(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database Query should have  \"11371\" and \"AnniversaryParty\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.database_Query_should_have_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "2 point team info verification,Api and Database",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@teams"
    },
    {
      "name": "@db"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User logged in to Bookit api as teacher role",
  "keyword": "Given "
});
formatter.match({
  "location": "ApiStepDefs.user_logged_in_to_Bookit_api_as_teacher_role()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends GET request to \"/api/teams/{id}\" with \"11377\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.user_sends_GET_request_to_with(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "ApiStepDefs.status_code_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Team name should be \"Jumanji\" in response",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.team_name_should_be_in_response(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database Query should have  \"11377\" and \"Jumanji\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.database_Query_should_have_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "2 point team info verification,Api and Database",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@teams"
    },
    {
      "name": "@db"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User logged in to Bookit api as teacher role",
  "keyword": "Given "
});
formatter.match({
  "location": "ApiStepDefs.user_logged_in_to_Bookit_api_as_teacher_role()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends GET request to \"/api/teams/{id}\" with \"11383\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.user_sends_GET_request_to_with(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "ApiStepDefs.status_code_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Team name should be \"Untraceable\" in response",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.team_name_should_be_in_response(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database Query should have  \"11383\" and \"Untraceable\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.database_Query_should_have_and(String,String)"
});
formatter.result({
  "error_message": "java.lang.IndexOutOfBoundsException: Index: 0, Size: 0\r\n\tat java.util.ArrayList.rangeCheck(ArrayList.java:657)\r\n\tat java.util.ArrayList.get(ArrayList.java:433)\r\n\tat com.cybertek.utilities.DBUtils.getRowMap(DBUtils.java:83)\r\n\tat com.cybertek.stepdefs.ApiStepDefs.database_Query_should_have_and(ApiStepDefs.java:107)\r\n\tat ✽.Database Query should have  \"11383\" and \"Untraceable\"(file:src/test/resources/features/api/teams.feature:11)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "2 point team info verification,Api and Database",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@teams"
    },
    {
      "name": "@db"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User logged in to Bookit api as teacher role",
  "keyword": "Given "
});
formatter.match({
  "location": "ApiStepDefs.user_logged_in_to_Bookit_api_as_teacher_role()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends GET request to \"/api/teams/{id}\" with \"11389\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.user_sends_GET_request_to_with(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "ApiStepDefs.status_code_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Team name should be \"BlingRing\" in response",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.team_name_should_be_in_response(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database Query should have  \"11389\" and \"BlingRing\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.database_Query_should_have_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "2 point team info verification,Api and Database",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@teams"
    },
    {
      "name": "@db"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User logged in to Bookit api as teacher role",
  "keyword": "Given "
});
formatter.match({
  "location": "ApiStepDefs.user_logged_in_to_Bookit_api_as_teacher_role()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends GET request to \"/api/teams/{id}\" with \"11395\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.user_sends_GET_request_to_with(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "ApiStepDefs.status_code_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Team name should be \"OctoberSky\" in response",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.team_name_should_be_in_response(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database Query should have  \"11395\" and \"OctoberSky\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.database_Query_should_have_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "2 point team info verification,Api and Database",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@teams"
    },
    {
      "name": "@db"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User logged in to Bookit api as teacher role",
  "keyword": "Given "
});
formatter.match({
  "location": "ApiStepDefs.user_logged_in_to_Bookit_api_as_teacher_role()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends GET request to \"/api/teams/{id}\" with \"11401\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.user_sends_GET_request_to_with(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "ApiStepDefs.status_code_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Team name should be \"Angel\" in response",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.team_name_should_be_in_response(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database Query should have  \"11401\" and \"Angel\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.database_Query_should_have_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "2 point team info verification,Api and Database",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@teams"
    },
    {
      "name": "@db"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User logged in to Bookit api as teacher role",
  "keyword": "Given "
});
formatter.match({
  "location": "ApiStepDefs.user_logged_in_to_Bookit_api_as_teacher_role()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends GET request to \"/api/teams/{id}\" with \"11407\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.user_sends_GET_request_to_with(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "ApiStepDefs.status_code_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Team name should be \"StoryofUs\" in response",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.team_name_should_be_in_response(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database Query should have  \"11407\" and \"StoryofUs\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.database_Query_should_have_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "2 point team info verification,Api and Database",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@teams"
    },
    {
      "name": "@db"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User logged in to Bookit api as teacher role",
  "keyword": "Given "
});
formatter.match({
  "location": "ApiStepDefs.user_logged_in_to_Bookit_api_as_teacher_role()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends GET request to \"/api/teams/{id}\" with \"11413\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.user_sends_GET_request_to_with(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "ApiStepDefs.status_code_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Team name should be \"LifeItself\" in response",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.team_name_should_be_in_response(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database Query should have  \"11413\" and \"LifeItself\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.database_Query_should_have_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "2 point team info verification,Api and Database",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@teams"
    },
    {
      "name": "@db"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User logged in to Bookit api as teacher role",
  "keyword": "Given "
});
formatter.match({
  "location": "ApiStepDefs.user_logged_in_to_Bookit_api_as_teacher_role()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends GET request to \"/api/teams/{id}\" with \"11419\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.user_sends_GET_request_to_with(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "ApiStepDefs.status_code_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Team name should be \"Stay\" in response",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.team_name_should_be_in_response(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database Query should have  \"11419\" and \"Stay\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.database_Query_should_have_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "2 point team info verification,Api and Database",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@teams"
    },
    {
      "name": "@db"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User logged in to Bookit api as teacher role",
  "keyword": "Given "
});
formatter.match({
  "location": "ApiStepDefs.user_logged_in_to_Bookit_api_as_teacher_role()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends GET request to \"/api/teams/{id}\" with \"11425\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.user_sends_GET_request_to_with(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "ApiStepDefs.status_code_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Team name should be \"Motorama\" in response",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.team_name_should_be_in_response(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database Query should have  \"11425\" and \"Motorama\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.database_Query_should_have_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "2 point team info verification,Api and Database",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@teams"
    },
    {
      "name": "@db"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User logged in to Bookit api as teacher role",
  "keyword": "Given "
});
formatter.match({
  "location": "ApiStepDefs.user_logged_in_to_Bookit_api_as_teacher_role()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends GET request to \"/api/teams/{id}\" with \"11431\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.user_sends_GET_request_to_with(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "ApiStepDefs.status_code_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Team name should be \"BlitheSpirit\" in response",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.team_name_should_be_in_response(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database Query should have  \"11431\" and \"BlitheSpirit\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.database_Query_should_have_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "2 point team info verification,Api and Database",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@teams"
    },
    {
      "name": "@db"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User logged in to Bookit api as teacher role",
  "keyword": "Given "
});
formatter.match({
  "location": "ApiStepDefs.user_logged_in_to_Bookit_api_as_teacher_role()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends GET request to \"/api/teams/{id}\" with \"11437\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.user_sends_GET_request_to_with(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "ApiStepDefs.status_code_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Team name should be \"Samurai\" in response",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.team_name_should_be_in_response(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database Query should have  \"11437\" and \"Samurai\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.database_Query_should_have_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "2 point team info verification,Api and Database",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@teams"
    },
    {
      "name": "@db"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User logged in to Bookit api as teacher role",
  "keyword": "Given "
});
formatter.match({
  "location": "ApiStepDefs.user_logged_in_to_Bookit_api_as_teacher_role()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends GET request to \"/api/teams/{id}\" with \"11443\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.user_sends_GET_request_to_with(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "ApiStepDefs.status_code_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Team name should be \"HighSierra\" in response",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.team_name_should_be_in_response(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database Query should have  \"11443\" and \"HighSierra\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.database_Query_should_have_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "2 point team info verification,Api and Database",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@teams"
    },
    {
      "name": "@db"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User logged in to Bookit api as teacher role",
  "keyword": "Given "
});
formatter.match({
  "location": "ApiStepDefs.user_logged_in_to_Bookit_api_as_teacher_role()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends GET request to \"/api/teams/{id}\" with \"11449\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.user_sends_GET_request_to_with(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "ApiStepDefs.status_code_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Team name should be \"CurbDance\" in response",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.team_name_should_be_in_response(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database Query should have  \"11449\" and \"CurbDance\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.database_Query_should_have_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "2 point team info verification,Api and Database",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@teams"
    },
    {
      "name": "@db"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User logged in to Bookit api as teacher role",
  "keyword": "Given "
});
formatter.match({
  "location": "ApiStepDefs.user_logged_in_to_Bookit_api_as_teacher_role()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends GET request to \"/api/teams/{id}\" with \"11455\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.user_sends_GET_request_to_with(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "ApiStepDefs.status_code_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Team name should be \"Super\" in response",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.team_name_should_be_in_response(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database Query should have  \"11455\" and \"Super\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.database_Query_should_have_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "2 point team info verification,Api and Database",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@teams"
    },
    {
      "name": "@db"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User logged in to Bookit api as teacher role",
  "keyword": "Given "
});
formatter.match({
  "location": "ApiStepDefs.user_logged_in_to_Bookit_api_as_teacher_role()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends GET request to \"/api/teams/{id}\" with \"11461\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.user_sends_GET_request_to_with(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "ApiStepDefs.status_code_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Team name should be \"Marjoe\" in response",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.team_name_should_be_in_response(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database Query should have  \"11461\" and \"Marjoe\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.database_Query_should_have_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "2 point team info verification,Api and Database",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@teams"
    },
    {
      "name": "@db"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User logged in to Bookit api as teacher role",
  "keyword": "Given "
});
formatter.match({
  "location": "ApiStepDefs.user_logged_in_to_Bookit_api_as_teacher_role()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends GET request to \"/api/teams/{id}\" with \"11467\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.user_sends_GET_request_to_with(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "ApiStepDefs.status_code_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Team name should be \"Kicking\" in response",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.team_name_should_be_in_response(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database Query should have  \"11467\" and \"Kicking\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.database_Query_should_have_and(String,String)"
});
formatter.result({
  "error_message": "java.lang.IndexOutOfBoundsException: Index: 0, Size: 0\r\n\tat java.util.ArrayList.rangeCheck(ArrayList.java:657)\r\n\tat java.util.ArrayList.get(ArrayList.java:433)\r\n\tat com.cybertek.utilities.DBUtils.getRowMap(DBUtils.java:83)\r\n\tat com.cybertek.stepdefs.ApiStepDefs.database_Query_should_have_and(ApiStepDefs.java:107)\r\n\tat ✽.Database Query should have  \"11467\" and \"Kicking\"(file:src/test/resources/features/api/teams.feature:11)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "2 point team info verification,Api and Database",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@teams"
    },
    {
      "name": "@db"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User logged in to Bookit api as teacher role",
  "keyword": "Given "
});
formatter.match({
  "location": "ApiStepDefs.user_logged_in_to_Bookit_api_as_teacher_role()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends GET request to \"/api/teams/{id}\" with \"11473\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.user_sends_GET_request_to_with(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "ApiStepDefs.status_code_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Team name should be \"HeartyPaws\" in response",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.team_name_should_be_in_response(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database Query should have  \"11473\" and \"HeartyPaws\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.database_Query_should_have_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "2 point team info verification,Api and Database",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@teams"
    },
    {
      "name": "@db"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User logged in to Bookit api as teacher role",
  "keyword": "Given "
});
formatter.match({
  "location": "ApiStepDefs.user_logged_in_to_Bookit_api_as_teacher_role()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends GET request to \"/api/teams/{id}\" with \"11479\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.user_sends_GET_request_to_with(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "ApiStepDefs.status_code_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Team name should be \"CoolasIce\" in response",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.team_name_should_be_in_response(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database Query should have  \"11479\" and \"CoolasIce\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.database_Query_should_have_and(String,String)"
});
formatter.result({
  "error_message": "java.lang.IndexOutOfBoundsException: Index: 0, Size: 0\r\n\tat java.util.ArrayList.rangeCheck(ArrayList.java:657)\r\n\tat java.util.ArrayList.get(ArrayList.java:433)\r\n\tat com.cybertek.utilities.DBUtils.getRowMap(DBUtils.java:83)\r\n\tat com.cybertek.stepdefs.ApiStepDefs.database_Query_should_have_and(ApiStepDefs.java:107)\r\n\tat ✽.Database Query should have  \"11479\" and \"CoolasIce\"(file:src/test/resources/features/api/teams.feature:11)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "2 point team info verification,Api and Database",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@teams"
    },
    {
      "name": "@db"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User logged in to Bookit api as teacher role",
  "keyword": "Given "
});
formatter.match({
  "location": "ApiStepDefs.user_logged_in_to_Bookit_api_as_teacher_role()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends GET request to \"/api/teams/{id}\" with \"11485\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.user_sends_GET_request_to_with(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "ApiStepDefs.status_code_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Team name should be \"MadeinAmerica\" in response",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.team_name_should_be_in_response(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database Query should have  \"11485\" and \"MadeinAmerica\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.database_Query_should_have_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "2 point team info verification,Api and Database",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@teams"
    },
    {
      "name": "@db"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User logged in to Bookit api as teacher role",
  "keyword": "Given "
});
formatter.match({
  "location": "ApiStepDefs.user_logged_in_to_Bookit_api_as_teacher_role()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends GET request to \"/api/teams/{id}\" with \"11491\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.user_sends_GET_request_to_with(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "ApiStepDefs.status_code_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Team name should be \"RoadHard\" in response",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.team_name_should_be_in_response(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database Query should have  \"11491\" and \"RoadHard\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.database_Query_should_have_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "2 point team info verification,Api and Database",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@teams"
    },
    {
      "name": "@db"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User logged in to Bookit api as teacher role",
  "keyword": "Given "
});
formatter.match({
  "location": "ApiStepDefs.user_logged_in_to_Bookit_api_as_teacher_role()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends GET request to \"/api/teams/{id}\" with \"11497\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.user_sends_GET_request_to_with(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "ApiStepDefs.status_code_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Team name should be \"AsGoodasItGets\" in response",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.team_name_should_be_in_response(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database Query should have  \"11497\" and \"AsGoodasItGets\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.database_Query_should_have_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "2 point team info verification,Api and Database",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@teams"
    },
    {
      "name": "@db"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User logged in to Bookit api as teacher role",
  "keyword": "Given "
});
formatter.match({
  "location": "ApiStepDefs.user_logged_in_to_Bookit_api_as_teacher_role()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends GET request to \"/api/teams/{id}\" with \"11503\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.user_sends_GET_request_to_with(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "ApiStepDefs.status_code_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Team name should be \"QuestforFire\" in response",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.team_name_should_be_in_response(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database Query should have  \"11503\" and \"QuestforFire\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.database_Query_should_have_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "2 point team info verification,Api and Database",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@teams"
    },
    {
      "name": "@db"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User logged in to Bookit api as teacher role",
  "keyword": "Given "
});
formatter.match({
  "location": "ApiStepDefs.user_logged_in_to_Bookit_api_as_teacher_role()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends GET request to \"/api/teams/{id}\" with \"11509\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.user_sends_GET_request_to_with(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "ApiStepDefs.status_code_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Team name should be \"teachers\" in response",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.team_name_should_be_in_response(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Database Query should have  \"11509\" and \"teachers\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.database_Query_should_have_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});