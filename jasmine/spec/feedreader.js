/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

$(function() {

    describe('RSS Feeds', ()=> {
        /* This tests to make sure that the
         * allFeeds variable has been defined          
         * and that it is not empty. 
         */
        it('are defined', ()=> {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('urls are defined and are not empty', ()=> {
            let i = "";
            for(i=0; i<allFeeds.length; i++){
                  expect(allFeeds[i].url).toBeDefined();
                  expect(allFeeds[i].url.length).not.toBe(0);
            }
           });

        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('names are defined and are not empty', ()=> {
            let i = "";
            for(i=0; i<allFeeds.length; i++){
                  expect(allFeeds[i].name).toBeDefined();
                  expect(allFeeds[i].name.length).not.toBe(0);
            }
           });
    });


    /*  Test suite named "The menu" */
    
    describe('The Menu', ()=> {
        
        /* A test that ensures the menu element is
         * hidden by default.
         */
        it('menu element is hidden by default', ()=> {
            expect($('body').hasClass('menu-hidden')).toEqual(true);
        });

         /* A test that ensures the menu changes
          * visibility when the menu icon is clicked. 
          */
         it('menu element shows and hides upon clicking', ()=> {
             $('.menu-icon-link').trigger('click');
             expect($('body').hasClass('menu-hidden')).toBe(false);

             $('.menu-icon-link').trigger('click');
             expect($('body').hasClass('menu-hidden')).toBe(true);            
         });
    });

        

    /* Test suite named "Initial Entries" */
    describe('Initial Entries', ()=>{

        /* A test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        beforeEach((done)=>{
            loadFeed(0,done);
        });
        it('if feed has a single entry', ()=> {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        })
    });



    /* Test suite named "New Feed Selection" */
    describe('New Feed election', ()=> {
        
        /* A test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */   
        let prevFeed = "";  
        beforeEach((done)=>{
            loadFeed(0, ()=>{
                prevFeed = $('.feed').html();
                loadFeed(1, done);
            });
        });   

        it('content actually changes', ()=>{
            expect($('.feed').html()).not.toBe(prevFeed);
        });
    });


}());
 