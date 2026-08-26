/* ==========================================================================
   Garden State Heavyweights - PHOTO GALLERY DATA
   ==========================================================================
   HOW TO ADD A NEW PHOTO:
   1. Copy the image file into the assets/images/gallery/ folder.
   2. Add a new line below (copy/paste an existing one as a template).
      - season: must be exactly "Winter" or "Spring"
      - year:   the four-digit year as text, e.g. "2026"
      - src:    the path to the image, e.g. "assets/images/gallery/yourfile.jpg"
      - caption: a short description shown under the photo (optional)
   3. Save the file. The photo will show up automatically when someone
      selects that season and year on the Photo Albums page.
   ========================================================================== */

const GALLERY_PHOTOS = [
  { season: "Winter", year: "2024", src: "assets/images/gallery/winter2024-1.jpg"},
  { season: "Winter", year: "2024", src: "assets/images/gallery/winter2024-2.jpg"},
  { season: "Winter", year: "2024", src: "assets/images/gallery/winter2024-3.jpg"},
  { season: "Winter", year: "2024", src: "assets/images/gallery/SamFreeThrow.jpg"},
  { season: "Winter", year: "2024", src: "assets/images/gallery/Charlie.jpg"}, 
  { season: "Winter", year: "2024", src: "assets/images/gallery/8thGradeTripleThreat.jpg"}, 
  { season: "Winter", year: "2024", src: "assets/images/gallery/4thGradeGirlDripple.jpg"}, 
  { season: "Winter", year: "2024", src: "assets/images/gallery/4thGradeLayup.jpg"}, 
  { season: "Winter", year: "2024", src: "assets/images/gallery/4thGradeDripple.jpg"},
  { season: "Spring", year: "2025", src: "assets/images/gallery/GirlTweetPOG.png"},
  { season: "Spring", year: "2025", src: "assets/images/gallery/GrassoChip.jpeg"}, 
  { season: "Spring", year: "2025", src: "assets/images/gallery/SamenEm.png"}, 
  { season: "Spring", year: "2025", src: "assets/images/gallery/SamwithCoaches.png"}, 
  { season: "Spring", year: "2025", src: "assets/images/gallery/BoysChip.png"}, 
  { season: "Spring", year: "2025", src: "assets/images/gallery/MarMarNoChip.png"}, 
  { season: "Spring", year: "2025", src: "assets/images/gallery/PurpleSam.png"}, 

  ];
