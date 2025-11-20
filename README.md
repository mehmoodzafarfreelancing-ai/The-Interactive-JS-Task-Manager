# Interactive JS Task Manager

Small browser-based task pad that lets you jot down quick todos, keep them across page reloads, and prune them as you finish. Everything runs in plain HTML/CSS/JS with no build tooling.

## Features

- Instant task capture via the textarea input and Save button.
- Tasks persist in `localStorage`, so the list survives refreshes or restarts of the browser.
- Delete any entry in-place; changes sync back to storage automatically.
- Zero external dependencies—easy to host anywhere.

## Getting Started

1. Open `index.html` directly in any modern browser.
2. Type a task into the `Write your Tasks...` textarea.
3. Click **Save Task** to append it to the list below.
4. Remove an item with its **Delete** button; the stored list updates immediately.

That’s it. Because the app only relies on `localStorage`, tasks are saved per browser/profile. Clearing site data will remove them.

## Project Structure

| File         | Purpose                                                  |
| ------------ | -------------------------------------------------------- |
| `index.html` | Base markup, textarea, button, and list container.       |
| `style.css`  | Styling hook (currently empty—add your own styles here). |
| `main.js`    | UI wiring, DOM updates, and persistence helpers.         |

Key functions in `main.js`:

- `loadTasks()` reads the JSON array from `localStorage` (key `myTasks`) and rebuilds the list on load.
- `createTaskElement(taskText)` generates the `<li>` with text and Delete button, wiring removal + re-save.
- `saveTasks()` serializes the current `<li>` entries back to storage, keeping UI and persistence aligned.

## Customization Ideas

- Replace the textarea with a single-line input and add priority tags or due dates.
- Style the list via `style.css` (e.g., flex layouts, hover states, dark mode).
- Add completion toggles instead of hard deletes, tracking done vs. pending.
- Sync data to a backend or cloud storage if you need cross-device access.

## Development Tips

- Since everything is client-side, you can iterate with a simple live-server (e.g., `npx serve .`).
- Use browser devtools to inspect the DOM and verify `localStorage` contents under Application → Storage.
- When extending functionality, keep DOM mutations centralized in helper functions—`createTaskElement` and `saveTasks` are natural extension points.

