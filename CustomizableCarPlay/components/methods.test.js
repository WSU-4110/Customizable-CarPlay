// your_script.test.js
require('text-encoding');

const { JSDOM } = require('jsdom');
const {
  populateIcons,
  searchIcons,
  selectIcon,
  updateSelectedIconsList,
  clearSelectedIcons,
  testSelectIcon,
} = require('./methods');

// Set up a basic DOM structure before running the tests
const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
global.document = dom.window.document;
  
  test('Test populateIcons method', () => {
    document.body.innerHTML = '<ul id="iconList"></ul>';
    populateIcons();
    const iconList = document.getElementById('iconList');
    expect(iconList.children.length).toBe(3); // Assuming you have 3 icons 
  });
  
  test('Test searchIcons method', () => {
    document.body.innerHTML = '<input type="text" id="searchInput">';
    const searchInput = document.getElementById('searchInput');
    searchInput.value = 'Icon1';
    searchIcons();
    expect(iconData.length).toBe(1); // Only one icon should match the search term
  });
  
  test('Test selectIcon method', () => {
    selectIcon({ id: 4, name: 'Icon4' });
    expect(selectedIcons.length).toBe(1);
    expect(selectedIcons[0].name).toBe('Icon4');
  });

  describe('updateSelectedIconsList', () => {
    test('updates the selected icons list in the UI', () => {
      // Mock the DOM elements or use a testing library like JSDOM
      document.body.innerHTML = '<ul id="selectedIconList"></ul>';
      
      // Set up the initial state
      selectedIcons = [
        { id: 1, name: 'Icon1' },
        { id: 2, name: 'Icon2' },
      ];
  
      updateSelectedIconsList();
  
      // Expectations based on the selectedIcons state
      expect(document.getElementById('selectedIconList').childElementCount).toBe(selectedIcons.length);
    });
  });

  
  test('Test clearSelectedIcons method', () => {
    selectedIcons = [{ id: 1, name: 'Icon1' }, { id: 2, name: 'Icon2' }];
    clearSelectedIcons();
    expect(selectedIcons.length).toBe(0);
  });
  
  test('Test testSelectIcon method', () => {
    document.body.innerHTML = '<ul id="selectedIconList"></ul>';
    testSelectIcon();
    const selectedIconList = document.getElementById('selectedIconList');
    expect(selectedIconList.children.length).toBe(1);
  });
  