# Feed Reader Testing
In this project Udacity provided web-based application that reads RSS feeds. The goal of project was to create various tests to check if various parts of the application were running properly.

## How to Run
Extract the Project 4 - Feed Reader testing zip file and run index.html.

## Tests done in the project
1. A test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
2. A test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
3. A test that ensures the menu element is hidden by default under "The Menu" test suite.
4. Test that ensures the menu changes visibility when the menu icon is clicked.
5. A test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.
6. A test that ensures when a new feed is loaded by the loadFeed function that the content actually changes
