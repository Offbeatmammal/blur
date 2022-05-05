# blur
Chrome Extension to 'blur' fields on a web page to obscure data when demo'ing

to use:
- save these two files in a directory
- edit the manifest.json to update the {url}/{page} to match what you want to trigger the script on
- edit the content_script.js to choose the elements you want to apply the blur to (and mess with the styles)
- in Chrome, go to Extensions, turn on developer mode, and load the unpacked directory
- navigate to the page and see the effect (note you have to fully reload the page every time you update the extension)

Usual Chrome/CSS rules apply, eg you can't individually style <option> items in a <select> (less of an issue for us as we use a more flexible 3rd party option for <selects>
  
  Would be good to make it so there's a simple list of IDs/Classes you want to add this to and loop through, this example only shows the one field getting updated.
