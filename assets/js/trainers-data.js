/* ==========================================================================
   Garden State Heavyweights - TRAINERS DATA
   ==========================================================================
   HOW TO ADD OR EDIT A TRAINER:
   - Each trainer is one block below inside { }.
   - photo:       path to their picture. Drop the image file into
                  assets/images/trainers/ and point photo to it, e.g.
                  "assets/images/trainers/jane-smith.jpg"
   - name:        trainer's full name
   - experience:  a short line about their playing/coaching background
   - blurb:       a few sentences about them
   - specialties: a list of skills they focus on. Stick to these words so
                  the tags look consistent: "Shooting", "Ball Handling",
                  "Rebounding", "Passing", "Agility" -- but you can add
                  others if needed.
   - phone:       contact number shown on their card
   - To add a new trainer, copy an entire { ... } block, paste it before
     the closing ]; and separate it from the one before with a comma.
   - To remove one, delete its whole { ... } block (and its trailing comma).
   ========================================================================== */

const TRAINERS = [
  {
    photo: "assets/images/trainers/trainer_bill.jpg",
    name: "William Anderson ",
    experience: "State Champion - Colonia High School, Landmark Champion - Susquehanna University, Currently being recurited to play in Europe",
    blurb: "Elite Footwork and Touch with natrual scoring abilities. Great intellegance for scoring inside and out. Spend years trainging with some of the top talent in New Jersey and has scored at every level hes stepped onto.",
    specialties: ["Post-Scoring", "Shooting", "Ball-Handling", "Finishing",],
    phone: "(732) 428-6920"
  },
  {
    photo: "assets/images/trainers/Trainer_matt.jpg",
    name: "Matthew McSorley",
    experience: "3x State Champion - Colonia High School, 2 year New Jersey City University, Current Kean Univeresity Basketabll Player",
    blurb: "High level Shooter with great mechanics; Contributor at every level McSorley has played at and with great success. Spend the past 4 years working with Coach Rodriguez at Colonia Summer Camps with ages 8-14.",
    specialties: ["Rebounding", "Agility", "Shooting", "Ball-Handling"],
    phone: "(732) 397-9119"
  },
  {
    photo: "assets/images/trainers/TrainerHowell.jpeg",
    name: "Micahel Howell",
    experience: "1x State Champion - Colonia High School, Multiple Years of Coaching AAU/Travel", 
    blurb: "Excellent IQ for the game; Understands how to use their body against other oppenents in the paint. Great coaching and has helped develop success players at the high school level.",
    specialties: ["Rebounding", "Post-Scoring", "Defense", "Playmaking"],
    phone: "(732) 664-4007"
  }
];
