/* ==========================================================================
   Garden State Heavyweights - ANNOUNCEMENTS / POSTERS DATA
   ==========================================================================
   HOW TO ADD OR EDIT AN ANNOUNCEMENT:
   - Each announcement is one block below inside { }.
   - title: the heading shown on the card
   - text:  a short description
   - image: OPTIONAL. If you have a poster picture, copy it into
            assets/images/posters/ and set image to its path, e.g.
            "assets/images/posters/tryouts-2026.jpg"
            If you don't have an image yet, leave image as "" (empty quotes)
            and an icon will be shown instead.
   - icon:  an emoji shown when there is no image (only used if image is "")
   - To add a new announcement, copy an entire { ... } block, paste it
     before the closing ]; and separate it from the one before with a comma.
   - To remove one, delete its whole { ... } block (and its trailing comma).
   ========================================================================== */

const POSTERS = [
  {
    icon: "",
    image: "assets/images/posters/Winter_Travel.png",
    title: "Winter Tryouts",
    text: "Monday 11/9 & Tuesday 11/10 Tryouts. Click for more information."
  },
  {
    icon: "",
    image: "assets/images/posters/SummerClinics.jpg",
    title: "Summer Clincs",
    text: "Last Summer Clinic this Wednesday 8/5 Don't Miss"
  },
  {
    icon: "",
    image: "assets/images/posters/GirlsHighSchoolTryouts.jpg",
    title: "High School Girls Tryout",
    text: "Tuesday 3/17 - Colonia Middle School"
  }
];
