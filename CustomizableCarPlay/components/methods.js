// your_script.js

let iconData = [
   { id: 1, name: 'Icon1' },
   { id: 2, name: 'Icon2' },
   { id: 3, name: 'Icon3' },
   // Add more icon data as needed
 ];
 
 let selectedIcons = [];
 
 // Method 1: Populate icons in the sidebar
 function populateIcons() {
   const iconList = document.getElementById('iconList');
   iconList.innerHTML = '';
 
   iconData.forEach(icon => {
     const listItem = document.createElement('li');
     listItem.textContent = icon.name;
     listItem.onclick = () => selectIcon(icon);
     iconList.appendChild(listItem);
   });
 }
 
 // Method 2: Search for icons based on user input
 function searchIcons() {
   const searchInput = document.getElementById('searchInput').value.toLowerCase();
   const filteredIcons = iconData.filter(icon => icon.name.toLowerCase().includes(searchInput));
   iconData = filteredIcons;
   populateIcons();
 }
 
 // Method 3: Select an icon and add it to the selected icons list
 function selectIcon(icon) {
   selectedIcons.push(icon);
   updateSelectedIconsList();
 }
 
 // Method 4: Update the selected icons list in the UI
 function updateSelectedIconsList() {
   const selectedIconList = document.getElementById('selectedIconList');
   selectedIconList.innerHTML = '';
 
   selectedIcons.forEach(icon => {
     const listItem = document.createElement('li');
     listItem.textContent = icon.name;
     selectedIconList.appendChild(listItem);
   });
 }
 
 // Method 5: Clear selected icons
 function clearSelectedIcons() {
   selectedIcons = [];
   updateSelectedIconsList();
 }
 
 // Method 6: Jest test method for selecting an icon
 function testSelectIcon() {
   const icon = { id: 4, name: 'Icon4' };
   selectIcon(icon);
 
   // Check if the icon is added to the selected icons list
   expect(selectedIcons.length).toBe(1);
   expect(selectedIcons[0]).toEqual(icon);
 }
 
 // Export methods for testing
 module.exports = {
   populateIcons,
   searchIcons,
   selectIcon,
   updateSelectedIconsList,
   clearSelectedIcons,
   testSelectIcon,
 };
 