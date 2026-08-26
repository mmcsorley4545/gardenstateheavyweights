# How to Update the Garden State Heavyweights Website

Everything below lives in three plain text files in the `assets/js/` folder. You can open each one in Notepad (or any text editor), make your change, save, and refresh the site in your browser to see it. You don't need any special software.

## Replacing a photo that's already on the site (banner, logo, slideshow, featured photos)

The site links to these photos by their exact file name — so just deleting a photo and dropping in a new one with a different name won't work; the page will still look for the old name and show nothing.

**Easiest fix:** give your new photo the exact same file name as the one you're replacing (for example, save the new dunk photo as `action-dunk.jpg`, replacing the old file). Nothing else needs to change — the site will pick it up automatically.

**If you'd rather use the new file's original name:** that's fine too, just let me know and I'll update the one or two lines of code that point to it (usually takes a minute).

## Adding or updating Photo Albums

File: `assets/js/gallery-data.js`

1. Drop your new photo file into the `assets/images/gallery/` folder.
2. Open `gallery-data.js`. You'll see a list of entries like this:

   `{ season: "Winter", year: "2024", src: "assets/images/gallery/winter2024-1.jpg", caption: "Set at the top of the key" }`

3. Copy one of these lines, paste it right below, and edit the season (must be "Winter" or "Spring"), year, file name, and caption to match your new photo.
4. Save the file. The photo will now show up automatically when someone picks that season and year on the Photo Albums page.

The three photos already on the site (dunk, team photo, huddle) are shown separately in the "Featured Photos" section at the top of that page and aren't tied to a season.

## Updating Team / Roster info

File: `assets/js/roster-data.js`

Every grade (3rd-8th), gender (Boys/Girls), and level (A/B) combination already has its own block in this file — 24 in total — pre-filled with placeholder coach names and 10 placeholder players per team.

To fill in a real team:
1. Find its block using the label at the top, e.g. `"3-Boys-A": { label: "3rd Grade Boys A Team", ...`
2. Replace `"To Be Announced"` with the real head coach and assistant coach names, and swap in real phone numbers.
3. Replace `"Player 1"`, `"Player 2"`, etc. with real player names.
4. Once games are played, replace the `"--"` placeholders with real stats (GP = games played, PPG = points/game, RPG = rebounds/game, and so on — each column is explained in the comment at the top of the file).
5. Need more or fewer than 10 players on a team? Copy or delete a player line inside that team's `players: [ ... ]` list.

## Updating Trainers

File: `assets/js/trainers-data.js`

Each trainer is one block, for example:

```
{
  photo: "assets/images/trainers/trainer-placeholder-1.svg",
  name: "Marcus Bell",
  experience: "10 years playing (college guard) + 5 years training youth athletes",
  blurb: "A few sentences about the trainer's background and coaching style.",
  specialties: ["Shooting", "Ball Handling"],
  phone: "(555) 010-0200"
}
```

- To use a real photo, drop the image into `assets/images/trainers/` and set `photo` to its path.
- `specialties` is a list of skill tags shown on the card — stick to "Shooting", "Ball Handling", "Rebounding", "Passing", and "Agility" so the tags stay consistent, though you can add others if needed.
- To add a new trainer, copy an entire block, paste it in the list, and separate it from the one before with a comma.
- To remove one, delete its whole block.

## Posting Announcements & Posters

File: `assets/js/posters-data.js`

Each announcement is one block, for example:

```
{
  icon: "🏀",
  image: "",
  title: "Tryout Information",
  text: "Poster coming soon — dates, times, and locations for upcoming tryouts."
}
```

- If you have an actual poster image, drop it into `assets/images/posters/` and set `image` to its path (e.g. `"assets/images/posters/tryouts-2026.jpg"`). It'll replace the icon.
- To add a brand-new announcement, copy an entire block, paste it in the list, and separate it from the one before with a comma.
- To remove one, delete its whole block.

## A couple of notes

- Keep the quotation marks and commas exactly where they are in each file — that punctuation is what keeps the site from breaking.
- If something looks broken after an edit, undo your last change first — a missing comma or quote mark is almost always the cause.
- Any time you want, you can also just send me the photos, coach info, rosters, stats, or posters directly and I'll make the updates for you.
