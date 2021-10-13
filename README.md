
# meet app

## Project description:

Meet Application uses the Google Calendar API to fetch upcoming events in each city.
User can expand each event to show more details.

## Project User Stories:

### Story 1:
As a user,
I should be able to filter the events by city,
So that I can see the list of events that take place in that city.

### Story 2:
As a user,
I should be able to show/hide an event’s details,
So that I can see more information about a specific event.

### Story 3:
As a user,
I should be able to specify number of events to display,
So that I can limit the number of events shown to me.

### Story 4:
As a user,
I should be able to use the app when offline,
So that I can still see details of event even when offline.

### Story 5:
As a user,
I should be able to see the number of events in each city,
So that I can easily see what each city is doing.

## Project Scenarios based on User Stories:

### FEATURE 1: FILTER EVENTS BY CITY
#### SCENARIO 1: WHEN USER HASN’T SEARCHED FOR A CITY, SHOW UPCOMING EVENTS FROM ALL CITIES.
**Given** user hasn’t searched for any city  

**When** the user opens the app  

**Then** the user should see a list of all upcoming events
#### SCENARIO 2: USER SHOULD SEE A LIST OF SUGGESTIONS WHEN THEY SEARCH FOR A CITY.
**Given** the main page is open  

**When** user starts typing in the city textbox  

**Then** the user should see a list of cities (suggestions) that match what they’ve typed
#### SCENARIO 3: USER CAN SELECT A CITY FROM THE SUGGESTED LIST.
**Given** the user was typing “Berlin” in the city textbox and the list of suggested cities is showing  

**When** the user selects a city (e.g., “Berlin, Germany”) from the list  

**Then** their city should be changed to that city (i.e., “Berlin, Germany”) and the user should receive a list of upcoming events in that city

### FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS
#### SCENARIO 1: AN EVENT ELEMENT IS COLLAPSED BY DEFAULT
**Given** events are displaying  

**When** user selects one specific event,  

**Then** show collapsed event element by default
#### SCENARIO 2: USER CAN EXPAND AN EVENT TO SEE ITS DETAILS
**Given** event is displayed collapsed  

**When** user clicks on “show more”  

**Then** expand the event to show more details about that event
#### SCENARIO 3: USER CAN COLLAPSE AN EVENT TO HIDE ITS DETAILS
**Given** event’s details are expanded  

**When** user clicks “show less”  

**Then** collapse the event to show less details about that event

### FEATURE 3: SPECIFY NUMBER OF EVENTS TO DISPLAY
#### SCENARIO 1: WHEN USER HASN’T SPECIFIED A NUMBER, 32 IS THE DEFAULT NUMBER
**Given** main page is open  

**When** user searches for a city  

**Then** show a default number of 32 events
#### SCENARIO 2: USER CAN CHANGE THE NUMBER OF EVENTS THEY WANTS TO SEE
**Given** city has been searched  

**When** user clicks “change number of events displayed”  

**Then** allow user to input the number of events they would like to see

### FEATURE 4: USE THE APP WHEN OFFLINE
#### SCENARIO 1: SHOW CACHED DATA WHEN THERE’S NO INTERNET CONNECTION
**Given** a search has been cached  

**When** user opens event  

**Then** show cached data
#### SCENARIO 2: SHOW ERROR WHEN USER CHANGES THE SETTINGS (CITY, TIME RANGE)
**Given** no internet connection  

**When** user inputs new search  

**Then** show error that it is not possible

### FEATURE 5: DATA VISUALIZATION
#### SCENARIO 1: SHOW A CHART WITH THE NUMBER OF UPCOMING EVENTS IN EACH CITY
**Given** main page is open   

**When** user clicks “overview”  

**Then** show a chart with the number of events in each city

## Project dependencies:

```
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^11.2.7",
    "@testing-library/user-event": "^12.8.3",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-scripts": "4.0.3",
    "web-vitals": "^0.2.4",
    "workbox-background-sync": "^5.1.4",
    "workbox-broadcast-update": "^5.1.4",
    "workbox-cacheable-response": "^5.1.4",
    "workbox-core": "^5.1.4",
    "workbox-expiration": "^5.1.4",
    "workbox-google-analytics": "^5.1.4",
    "workbox-navigation-preload": "^5.1.4",
    "workbox-precaching": "^5.1.4",
    "workbox-range-requests": "^5.1.4",
    "workbox-routing": "^5.1.4",
    "workbox-strategies": "^5.1.4",
    "workbox-streams": "^5.1.4"
```

## Public gh-pages for Application:

https://izanko.github.io/meet/
