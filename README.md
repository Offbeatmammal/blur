# blur
Chrome Extension to 'blur' fields on a web page to obscure data when demo'ing (requiring no, or minimal, changes to the source application).

to use:
1. save these two files in a directory
2. edit the manifest.json to update the {url}/{page} to match what you want to trigger the script on
3. edit the content_script.js to choose the elements you want to apply the blur to (and mess with the styles)
4. in Chrome, go to Extensions, turn on developer mode, and load the unpacked directory
5. navigate to the page and see the effect (note you have to fully reload the page every time you update the extension)

Usual Chrome/CSS rules apply, eg you can't individually style `<option>` items in a `<select>` (less of an issue for us as we use a more flexible 3rd party option for `<select>` which allows us to apply styling to each individual line in the select drop-down).
  
Would be good to make it so there's a simple list of IDs/Classes you want to add this to and loop through, this example only shows the one field getting updated.
