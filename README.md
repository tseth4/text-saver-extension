Extensions can run scripts that read and modify the content of a page. These are called content scripts. They live in an isolated world, meaning they can make changes to their JavaScript environment without conflicting with their host page or other extensions' content scripts.

Extensions can monitor browser events in the background using the extension's service worker. Service workers are special JavaScript environments that are loaded to handle events and terminated when they're no longer needed.

Start by registering the service worker in the manifest.json file:


Highlight
Sendn highlight popup
Popup verifies and saves
Options page shows saved quotes and urls
Options page allow for export

