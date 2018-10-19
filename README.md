# friendfinder

## Overview

Friend Finder finds your best friend by finding the person who has the least amount of differences with you based on the survey you take.

## Design Details
###Front-End
I used to the front-end from the example to make sure I was fulfilling all the use cases and to test my backend code. The one front-end change that I made was to clear the survey form upon submitting it.

###Backend
Backend is a simple node.js server using express for the HTML and API routes. I organized the code such that the friend data sits inside a constructor and the public constuctor methods act as a sort-of interface between the data and the API routes.
