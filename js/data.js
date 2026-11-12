/* ═══════════════════════════════════════════════════════════
   FORTWORKXX — Content Data Layer
   Single source of truth for divisions, services, courses,
   portfolio, marketplace, testimonials and insights.
   ═══════════════════════════════════════════════════════════ */

const FW = {};

/* ── Brand ── */
FW.brand = {
  name: 'FORTWORKXX',
  tagline: 'Excellence Beyond Boundaries.',
  positioning: 'Technology · Creativity · Sound · Lifestyle · Performance',
  email: 'info@fortworkxx.com',
  bookingsEmail: 'bookings@fortworkxx.com',
  phone: '+234 (0) 000 000 0000',
  whatsapp: 'https://wa.me/2340000000000',
  location: 'Lagos, Nigeria',
};

/* ── Five Divisions ── */
FW.divisions = [
  {
    id: 'technologies',
    num: '01',
    name: 'Fortworkxx Technologies',
    short: 'Technologies',
    tag: 'Royal Blue & Silver',
    tagColor: '#2b52c8',
    image: 'assets/img/div-tech.jpg',
    wide: true,
    headline: 'Engineering the <em>digital advantage.</em>',
    description: 'IT services, computer networking, technical support and technology training for individuals, businesses and organisations — delivered with precision and professionalism.',
    identity: 'Royal blue and silver accents',
    offerings: ['IT support & troubleshooting', 'Computer networking & setup', 'Technology training', 'Digital skills development', 'System maintenance'],
  },
  {
    id: 'sound',
    num: '02',
    name: 'Fortworkxx Sound & Entertainment',
    short: 'Sound & Entertainment',
    tag: 'Black & Gold',
    tagColor: '#c6a15b',
    image: 'assets/img/div-sound.jpg',
    headline: 'Where sound becomes <em>power.</em>',
    description: 'Sound engineering, recording, mixing, music production, live performances and music training — from studio session to stage, one exceptional standard.',
    identity: 'Black and metallic gold',
    offerings: ['Sound engineering', 'Recording & mixing', 'Live sound production', 'Music performance', 'Music training'],
  },
  {
    id: 'hospitality',
    num: '03',
    name: 'Fortworkxx Hospitality',
    short: 'Hospitality',
    tag: 'Champagne Gold & White',
    tagColor: '#e8c87e',
    image: 'assets/img/div-hospitality.jpg',
    headline: 'Service that is <em>felt.</em>',
    description: 'Catering, food services, event catering and professional cleaning — immaculate experiences for private clients, corporate events and special occasions.',
    identity: 'Champagne gold and warm white',
    offerings: ['Event catering', 'Private chef experiences', 'Corporate catering', 'Residential cleaning', 'Commercial cleaning'],
  },
  {
    id: 'creative',
    num: '04',
    name: 'Fortworkxx Creative Studio',
    short: 'Creative Studio',
    tag: 'Gold & Royal Blue',
    tagColor: '#c6a15b',
    image: 'assets/img/div-creative.jpg',
    headline: 'Ideas made <em>tangible.</em>',
    description: 'Printing, graphic design, artwork, creative production and art training — premium print finishes and original artwork with a signature luxury touch.',
    identity: 'Gold and royal blue',
    offerings: ['Premium printing', 'Graphic design', 'Original artwork', 'Creative production', 'Art training'],
  },
  {
    id: 'performance',
    num: '05',
    name: 'Fortworkxx Performance',
    short: 'Performance',
    tag: 'Royal Blue & White',
    tagColor: '#2b52c8',
    image: 'assets/img/div-performance.jpg',
    headline: 'Strength with <em>intention.</em>',
    description: 'Personal training, fitness coaching and individual development — bespoke programmes engineered around your goals, schedule and lifestyle.',
    identity: 'Royal blue and white',
    offerings: ['Personal training', 'Fitness coaching', 'Group sessions', 'Nutrition guidance', 'Lifestyle coaching'],
  },
];

/* ── Eight Services ── */
FW.services = [
  {
    id: 'tech',
    icon: '⌘',
    division: 'technologies',
    divisionName: 'Fortworkxx Technologies',
    name: 'Tech Services & Training',
    tagline: 'Reliable technology, expertly delivered.',
    description: 'From broken devices to full network rollouts and career-shifting digital training — Fortworkxx Technologies keeps you productive, connected and future-ready.',
    image: 'assets/img/div-tech.jpg',
    long: [
      'Whether you are a professional who needs a device back in working order, a business that needs a secure, reliable network, or a learner ready to acquire real digital skills — our technology practice covers the full spectrum.',
      'Every engagement begins with a clear diagnosis, a transparent quote and a delivery timeline you can count on. Training programmes blend theory with hands-on practice so students leave with demonstrable ability, not just certificates.',
    ],
    offerings: [
      'Computer repair, maintenance and troubleshooting',
      'Network design, installation and security',
      'Remote and on-site technical support',
      'Digital skills and office-productivity training',
      'Website and software fundamentals training',
      'Device setup, migration and data backup',
    ],
    process: [
      { t: 'Diagnosis', d: 'Tell us the device, issue and support type — remote or on-site.' },
      { t: 'Assessment & Quote', d: 'We evaluate, recommend options and issue a transparent quotation.' },
      { t: 'Delivery', d: 'Approved work is executed to schedule with progress updates.' },
      { t: 'Handover & Follow-up', d: 'Testing, documentation and post-delivery support.' },
    ],
    packages: [
      { name: 'Essential', price: '₦25,000', unit: 'from', desc: 'Quick fixes for individuals.', features: ['Remote diagnosis', 'Single device service', 'Basic setup & optimisation', '7-day support'] },
      { name: 'Professional', price: '₦75,000', unit: 'from', desc: 'For busy professionals & small offices.', featured: true, features: ['On-site diagnosis', 'Up to 5 devices', 'Network configuration', 'Priority support', 'Training session (2 hrs)'] },
      { name: 'Enterprise', price: 'Custom', unit: '', desc: 'Organisations & training cohorts.', features: ['Full network rollout', 'Security hardening', 'Staff training programme', 'SLA support', 'Dedicated account contact'] },
    ],
    bookingFields: [
      { id: 'support_type', label: 'Support type', type: 'select', options: ['Repair & maintenance', 'Networking', 'Training', 'Remote support', 'Consultation'] },
      { id: 'device', label: 'Device / system', type: 'text', ph: 'e.g. Laptop, Router, POS' },
      { id: 'issue', label: 'Describe the issue or goal', type: 'textarea', ph: 'Tell us what is happening or what you want to learn' },
      { id: 'location_type', label: 'Service mode', type: 'select', options: ['Remote', 'On-site', 'Either'] },
    ],
  },
  {
    id: 'sound',
    icon: '♪',
    division: 'sound',
    divisionName: 'Fortworkxx Sound & Entertainment',
    name: 'Sound Engineering Services',
    tagline: 'Crystal-clear sound, every frequency.',
    description: 'Professional sound engineering for live events, studios and worship environments — mixing, mastering, PA setup and audio production that audiences remember.',
    image: 'assets/img/div-sound.jpg',
    long: [
      'Great sound is invisible when it is done right — the audience simply feels it. Our sound engineers handle everything from intimate acoustic sessions to large-format live events, delivering a mix that is powerful, clear and balanced.',
      'We bring and configure professional-grade PA, monitors and digital mixing consoles, tune the room, and stay with you from soundcheck to final encore.',
    ],
    offerings: [
      'Live sound engineering & FOH mixing',
      'PA system rental, setup and tuning',
      'Studio recording, mixing and mastering',
      'Music production & arrangement',
      'Church, conference & concert audio',
      'Audio restoration and post-production',
    ],
    process: [
      { t: 'Brief', d: 'Venue, event date, expected crowd and equipment requirements.' },
      { t: 'Audio Plan', d: 'We design the system, channel list and run-of-show for your event.' },
      { t: 'Setup & Soundcheck', d: 'Early arrival, rigging, tuning and full soundcheck.' },
      { t: 'Show & Strike', d: 'Live operation, recording if required, and professional strike.' },
    ],
    packages: [
      { name: 'Session', price: '₦60,000', unit: 'from', desc: 'Small events & private gatherings.', features: ['Engineer for up to 4 hrs', 'Basic PA for ≤100 guests', 'Wireless mics', 'Setup & strike'] },
      { name: 'Event', price: '₦150,000', unit: 'from', desc: 'Conferences, concerts, weddings.', featured: true, features: ['Engineer + assistant', 'Full PA for ≤500 guests', 'Digital console + monitors', 'Multitrack recording', 'Soundcheck & line check'] },
      { name: 'Production', price: 'Custom', unit: '', desc: 'Festivals & multi-act productions.', features: ['Full production crew', 'Large-format system', 'Stage monitoring', 'Redundant backups', 'Artist liaison'] },
    ],
    bookingFields: [
      { id: 'event_type', label: 'Event type', type: 'select', options: ['Wedding', 'Conference', 'Concert', 'Church service', 'Studio session', 'Other'] },
      { id: 'venue', label: 'Venue', type: 'text', ph: 'Event location' },
      { id: 'crowd', label: 'Expected audience size', type: 'number', ph: 'e.g. 250' },
      { id: 'equipment', label: 'Equipment needed', type: 'textarea', ph: 'PA, mics, monitors, recording…' },
    ],
  },
  {
    id: 'catering',
    icon: '❖',
    division: 'hospitality',
    divisionName: 'Fortworkxx Hospitality',
    name: 'Catering Services',
    tagline: 'Cuisine that commands the room.',
    description: 'Bespoke menus and flawless service for weddings, corporate events, private dinners and celebrations — presented with unmistakable elegance.',
    image: 'assets/img/div-hospitality.jpg',
    long: [
      'Food is the memory guests take home. Our catering team designs menus around your theme, dietary requirements and budget, then executes with hotel-grade hygiene and presentation standards.',
      'From canapés and buffets to plated three-course dinners and live cooking stations, every dish is prepared fresh on the day and served by a polished, uniformed team.',
    ],
    offerings: [
      'Wedding & celebration catering',
      'Corporate lunch & conference catering',
      'Private chef & dinner-party experiences',
      'Buffet, plated and canapé service',
      'Menu tasting and custom menu design',
      'Equipment, crockery & service staff',
    ],
    process: [
      { t: 'Consultation', d: 'Guest count, menu direction, venue and event date.' },
      { t: 'Tasting & Quote', d: 'Menu proposal, tasting where applicable, and transparent pricing.' },
      { t: 'Preparation', d: 'Sourcing, preparation plans and logistics scheduling.' },
      { t: 'Service', d: 'On-time setup, warm service and immaculate presentation.' },
      { t: 'Aftercare', d: 'Clean-down, equipment recovery and feedback follow-up.' },
    ],
    packages: [
      { name: 'Intimate', price: '₦12,000', unit: '/ guest', desc: 'Private dinners & small gatherings.', features: ['Up to 30 guests', '2-course menu', 'Service staff', 'Table setup'] },
      { name: 'Signature', price: '₦20,000', unit: '/ guest', desc: 'Weddings & corporate events.', featured: true, features: ['30–300 guests', '3-course or premium buffet', 'Menu tasting', 'Full service team', 'Equipment & crockery'] },
      { name: 'Grand', price: 'Custom', unit: '', desc: 'Large-scale & luxury productions.', features: ['300+ guests', 'Bespoke multi-station menu', 'Live cooking stations', 'Décor-aligned presentation', 'Event captain'] },
    ],
    bookingFields: [
      { id: 'guest_count', label: 'Guest count', type: 'number', ph: 'e.g. 120' },
      { id: 'event_type', label: 'Event type', type: 'select', options: ['Wedding', 'Corporate', 'Birthday', 'Private dinner', 'Conference', 'Other'] },
      { id: 'menu_style', label: 'Preferred menu style', type: 'select', options: ['Buffet', 'Plated', 'Canapés / cocktail', 'Live stations', 'Not sure — advise me'] },
      { id: 'dietary', label: 'Dietary requirements', type: 'textarea', ph: 'Vegetarian, halal, allergies…' },
    ],
  },
  {
    id: 'printing',
    icon: '▣',
    division: 'creative',
    divisionName: 'Fortworkxx Creative Studio',
    name: 'Printing Services',
    tagline: 'Print that feels expensive.',
    description: 'Premium business stationery, large-format signage, branded merchandise and publication printing — crisp colour, luxury finishes, reliable turnaround.',
    image: 'assets/img/div-creative.jpg',
    long: [
      'Your print is your handshake before you speak. We produce business cards with luxury stocks and foil finishes, banners, booklets, branded packaging and event collateral — colour-matched and quality-checked on every run.',
      'Upload your artwork or engage our designers to create it. Either way, you receive a digital proof for approval before anything goes to press.',
    ],
    offerings: [
      'Business cards, letterheads & stationery',
      'Flyers, brochures, booklets & catalogues',
      'Banners, roll-ups & large-format signage',
      'Branded packaging & merchandise',
      'Publication & report printing',
      'Design support and pre-press checks',
    ],
    process: [
      { t: 'Specification', d: 'Format, size, quantity, paper stock and finish.' },
      { t: 'Artwork & Proof', d: 'Upload files or brief our designers; approve a digital proof.' },
      { t: 'Production', d: 'Printing, finishing, cutting and quality inspection.' },
      { t: 'Delivery', d: 'Scheduled pickup or delivery to your address.' },
    ],
    packages: [
      { name: 'Starter', price: '₦15,000', unit: 'from', desc: 'Small runs for individuals.', features: ['Up to 500 flyers/cards', 'Standard stock', 'Digital proof', '3-day turnaround'] },
      { name: 'Business', price: '₦60,000', unit: 'from', desc: 'Full stationery & marketing kits.', featured: true, features: ['Stationery set', 'Premium stocks', 'Foil / spot-UV options', 'Design touch-ups', 'Priority production'] },
      { name: 'Commercial', price: 'Custom', unit: '', desc: 'Large formats & recurring runs.', features: ['Bulk pricing', 'Large-format signage', 'Brand consistency checks', 'Scheduled deliveries', 'Dedicated studio contact'] },
    ],
    bookingFields: [
      { id: 'print_format', label: 'Print format', type: 'select', options: ['Business cards', 'Flyers / posters', 'Banners', 'Booklets / catalogues', 'Packaging', 'Other'] },
      { id: 'quantity', label: 'Quantity', type: 'number', ph: 'e.g. 1000' },
      { id: 'size', label: 'Size / dimensions', type: 'text', ph: 'e.g. A5, 3m x 1m' },
      { id: 'paper', label: 'Paper / material preference', type: 'text', ph: 'e.g. 350gsm gloss, vinyl' },
      { id: 'files', label: 'Artwork notes', type: 'textarea', ph: 'Link to files, or request design support' },
    ],
  },
  {
    id: 'art',
    icon: '✎',
    division: 'creative',
    divisionName: 'Fortworkxx Creative Studio',
    name: 'Art Services & Training',
    tagline: 'Original work. Taught properly.',
    description: 'Commissioned artwork, portraiture, murals and creative direction — plus structured art training for beginners and developing artists.',
    image: 'assets/img/div-creative.jpg',
    long: [
      'From statement pieces for your home or brand to commissioned portraits and environmental murals, our art practice blends classical technique with contemporary flair.',
      'Our training programmes cover drawing fundamentals, colour theory, composition and mixed media — taught in small cohorts with personal critique and a final showcase.',
    ],
    offerings: [
      'Commissioned paintings & portraits',
      'Murals and environmental graphics',
      'Brand illustration & creative direction',
      'Art consulting for spaces and events',
      'Beginner & intermediate art classes',
      'Portfolio development for young artists',
    ],
    process: [
      { t: 'Brief', d: 'Art category, reference material, dimensions and intended space.' },
      { t: 'Concept', d: 'Mood board, sketch and quote for approval.' },
      { t: 'Creation', d: 'Studio work with progress updates at each stage.' },
      { t: 'Delivery', d: 'Finishing, varnishing, framing options and installation.' },
    ],
    packages: [
      { name: 'Study', price: '₦45,000', unit: 'from', desc: 'Small pieces & sketches.', features: ['A4–A3 format', '1 subject', '2 revisions', 'Studio pickup'] },
      { name: 'Signature', price: '₦150,000', unit: 'from', desc: 'Statement pieces for home & brand.', featured: true, features: ['A2–A1 format', 'Concept development', 'Progress previews', 'Framing options', 'Delivery in Lagos'] },
      { name: 'Commission', price: 'Custom', unit: '', desc: 'Murals, series & commercial work.', features: ['Site survey', 'Multi-piece series', 'Install team', 'Commercial licensing', 'Project management'] },
    ],
    bookingFields: [
      { id: 'art_category', label: 'Art category', type: 'select', options: ['Portrait', 'Abstract', 'Mural', 'Illustration', 'Art classes', 'Other'] },
      { id: 'dimensions', label: 'Dimensions (or preferred size)', type: 'text', ph: 'e.g. 90cm x 120cm' },
      { id: 'skill_level', label: 'Skill level (for training)', type: 'select', options: ['Not applicable', 'Absolute beginner', 'Intermediate', 'Advanced'] },
      { id: 'brief', label: 'Project brief', type: 'textarea', ph: 'Describe your vision, colours and references' },
    ],
  },
  {
    id: 'cleaning',
    icon: '✧',
    division: 'hospitality',
    divisionName: 'Fortworkxx Hospitality',
    name: 'Cleaning Services',
    tagline: 'Immaculate, every surface, every time.',
    description: 'Residential, commercial and post-construction cleaning with trained crews, professional-grade products and a satisfaction guarantee.',
    image: 'assets/img/div-hospitality.jpg',
    long: [
      'A spotless space changes how a room feels. Our vetted cleaning crews arrive uniformed and equipped with professional-grade products for deep cleans, recurring maintenance and move-in/move-out transformations.',
      'Every job is checklist-driven and inspected before handover, so the standard is the same whether it is a studio apartment or a corporate floor.',
    ],
    offerings: [
      'Residential deep cleaning',
      'Office & commercial cleaning',
      'Post-construction cleaning',
      'Move-in / move-out cleaning',
      'Recurring weekly & monthly plans',
      'Event post-clean & sanitation',
    ],
    process: [
      { t: 'Survey', d: 'Property type, size, address and cleaning frequency.' },
      { t: 'Quote', d: 'Fixed pricing after assessment — no surprises.' },
      { t: 'Clean', d: 'Trained crew, checklist-driven execution, pro-grade products.' },
      { t: 'Inspection', d: 'Quality walk-through with you before we leave.' },
    ],
    packages: [
      { name: 'Refresh', price: '₦25,000', unit: 'from', desc: 'Routine upkeep for homes.', features: ['Up to 2 bedrooms', 'Kitchen & bathrooms', '3–4 hr service', 'Standard products'] },
      { name: 'Deep Clean', price: '₦60,000', unit: 'from', desc: 'Full-property transformation.', featured: true, features: ['Whole property', '5–7 hr service', 'Deep kitchen & bath', 'Windows & surfaces', 'Inspection walkthrough'] },
      { name: 'Contract', price: 'Custom', unit: '', desc: 'Offices, estates & facilities.', features: ['Recurring schedule', 'Dedicated crew', 'Quality audits', 'Sanitation options', 'Account manager'] },
    ],
    bookingFields: [
      { id: 'property_type', label: 'Property type', type: 'select', options: ['Apartment', 'House', 'Office', 'Retail / warehouse', 'Event venue', 'Other'] },
      { id: 'property_size', label: 'Size (rooms / sqm)', type: 'text', ph: 'e.g. 3 bedrooms, 120sqm' },
      { id: 'frequency', label: 'Frequency', type: 'select', options: ['One-time', 'Weekly', 'Bi-weekly', 'Monthly', 'Post-event'] },
      { id: 'address', label: 'Address', type: 'text', ph: 'Service location' },
      { id: 'notes', label: 'Special instructions', type: 'textarea', ph: 'Priority areas, products to avoid…' },
    ],
  },
  {
    id: 'music',
    icon: '♫',
    division: 'sound',
    divisionName: 'Fortworkxx Sound & Entertainment',
    name: 'Music Performance & Training',
    tagline: 'Performances that move rooms.',
    description: 'Live band performances for events, plus structured music training in vocals, keyboard, guitar and music theory — for hobbyists and aspiring professionals.',
    image: 'assets/img/div-sound.jpg',
    long: [
      'Book a polished live act for your wedding, corporate gala or private celebration — repertoire spanning afrobeats, gospel, R&B, highlife and contemporary hits, tailored to your programme.',
      'Or train with us: our music academy takes students from first scales to confident stage performance, with recitals and certification on completion.',
    ],
    offerings: [
      'Live band & ensemble performances',
      'Solo / duo bookings for intimate events',
      'Event repertoire curation',
      'Vocal, keyboard, guitar & drum lessons',
      'Music theory & ear training',
      'Stagecraft and performance coaching',
    ],
    process: [
      { t: 'Request', d: 'Event type, date, duration, venue and repertoire preferences.' },
      { t: 'Proposal', d: 'Act configuration, set list and quotation.' },
      { t: 'Rehearsal', d: 'Preparation and programme confirmation with your event planner.' },
      { t: 'Performance', d: 'Professional arrival, soundcheck and showtime.' },
    ],
    packages: [
      { name: 'Intimate', price: '₦80,000', unit: 'from', desc: 'Duos & small ensembles.', features: ['2–3 performers', 'Up to 1.5 hrs', 'Curated set list', 'Own instruments'] },
      { name: 'Headline', price: '₦200,000', unit: 'from', desc: 'Full band for major events.', featured: true, features: ['5–7 piece band', 'Up to 3 hrs', 'MC coordination', 'Soundcheck', 'Two wardrobe sets'] },
      { name: 'Academy', price: '₦35,000', unit: '/ month', desc: 'Structured music training.', features: ['Weekly lessons', 'Theory + practical', 'Practice resources', 'Quarterly recital', 'Certificate pathway'] },
    ],
    bookingFields: [
      { id: 'engagement', label: 'Engagement type', type: 'select', options: ['Event performance', 'Private performance', 'Music lessons', 'Recording session'] },
      { id: 'event_type', label: 'Event type (if applicable)', type: 'text', ph: 'e.g. Wedding reception' },
      { id: 'duration', label: 'Duration', type: 'select', options: ['Under 1 hour', '1–2 hours', '2–3 hours', '3+ hours', 'Ongoing training'] },
      { id: 'repertoire', label: 'Repertoire / instrument preferences', type: 'textarea', ph: 'Songs, genre, instrument of interest…' },
    ],
  },
  {
    id: 'fitness',
    icon: '◆',
    division: 'performance',
    divisionName: 'Fortworkxx Performance',
    name: 'Personal Trainer Services',
    tagline: 'Your body. Your programme. Your results.',
    description: 'One-on-one personal training, small-group coaching and lifestyle programmes — assessed, programmed and tracked around your goals.',
    image: 'assets/img/div-performance.jpg',
    long: [
      'No generic plans. Every client begins with a movement and lifestyle assessment, then receives a programme built around their goals — fat loss, strength, endurance, sport-specific conditioning or general wellbeing.',
      'Sessions are available in-person at partner facilities in Lagos or fully remote with video check-ins, form reviews and weekly accountability.',
    ],
    offerings: [
      '1-on-1 personal training',
      'Small-group and partner sessions',
      'Strength & conditioning programmes',
      'Fat-loss and body-composition coaching',
      'Nutrition guidance & accountability',
      'Remote coaching with video check-ins',
    ],
    process: [
      { t: 'Assessment', d: 'Goals, training history, schedule and movement screening.' },
      { t: 'Programme', d: 'A written plan with phases, sessions and targets.' },
      { t: 'Train', d: 'Coached sessions with form correction and progressive overload.' },
      { t: 'Review', d: 'Fortnightly metrics check and programme adjustment.' },
    ],
    packages: [
      { name: 'Kickstart', price: '₦40,000', unit: '/ month', desc: '8 sessions to build the habit.', features: ['8 sessions / month', '1-on-1 coaching', 'Baseline assessment', 'WhatsApp check-ins'] },
      { name: 'Transformation', price: '₦85,000', unit: '/ month', desc: 'Serious goals, full support.', featured: true, features: ['16 sessions / month', 'Custom programme', 'Nutrition guidance', 'Fortnightly reviews', 'Form-check videos'] },
      { name: 'Elite', price: 'Custom', unit: '', desc: 'Athletes & executives.', features: ['Unlimited access windows', 'Sport-specific prep', 'Recovery protocols', 'Direct coach line', 'Performance testing'] },
    ],
    bookingFields: [
      { id: 'goal', label: 'Primary goal', type: 'select', options: ['Fat loss', 'Strength & muscle', 'Endurance', 'Sport performance', 'General fitness', 'Rehab / return to training'] },
      { id: 'format', label: 'Training format', type: 'select', options: ['In-person', 'Remote', 'Hybrid'] },
      { id: 'schedule', label: 'Preferred schedule', type: 'text', ph: 'e.g. Mon/Wed/Fri, 6am' },
      { id: 'history', label: 'Training history & medical notes', type: 'textarea', ph: 'Current level, injuries, conditions…' },
    ],
  },
];

/* ── Academy ── */
FW.academy = {
  departments: [
    { num: '01', title: 'Technology Academy', desc: 'Digital fluency for the modern professional.', items: ['Computer fundamentals & repair', 'Networking & cybersecurity basics', 'Office productivity & automation', 'Web fundamentals'] },
    { num: '02', title: 'Creative Arts Academy', desc: 'Train the eye, sharpen the hand.', items: ['Drawing & composition', 'Colour theory & mixed media', 'Graphic design foundations', 'Portfolio development'] },
    { num: '03', title: 'Music Academy', desc: 'From first notes to the stage.', items: ['Keyboard, guitar & vocals', 'Music theory & ear training', 'Production basics', 'Stagecraft & performance'] },
  ],
  courses: [
    { id: 'c1', dept: 'Technology Academy', level: 'Beginner', title: 'Digital Skills Mastery', desc: 'Computer fundamentals, internet safety, productivity suites and AI tools for work.', price: '₦45,000', duration: '6 weeks', image: 'assets/img/div-tech.jpg' },
    { id: 'c2', dept: 'Technology Academy', level: 'Intermediate', title: 'Networking & Troubleshooting', desc: 'Build, secure and troubleshoot small-office networks with confidence.', price: '₦85,000', duration: '8 weeks', image: 'assets/img/div-tech.jpg' },
    { id: 'c3', dept: 'Creative Arts Academy', title: 'Drawing & Composition', level: 'Beginner', desc: 'Master line, form, perspective and composition from the ground up.', price: '₦35,000', duration: '6 weeks', image: 'assets/img/div-creative.jpg' },
    { id: 'c4', dept: 'Creative Arts Academy', level: 'Intermediate', title: 'Graphic Design Foundations', desc: 'Layout, typography, branding and print-ready design in industry tools.', price: '₦65,000', duration: '8 weeks', image: 'assets/img/div-creative.jpg' },
    { id: 'c5', dept: 'Music Academy', level: 'All levels', title: 'Keyboard & Music Theory', desc: 'Chords, scales, harmony and sight-reading with practical song studies.', price: '₦40,000', duration: 'Ongoing', image: 'assets/img/div-sound.jpg' },
    { id: 'c6', dept: 'Music Academy', level: 'Intermediate', title: 'Vocal Performance Lab', desc: 'Technique, harmony, microphone skills and stage presence with recitals.', price: '₦50,000', duration: '8 weeks', image: 'assets/img/div-sound.jpg' },
  ],
  journey: ['Browse courses', 'Read the full syllabus', 'Create your student account', 'Pay securely online', 'Unlock course materials', 'Complete lessons & assessments', 'Track your progress', 'Receive your certificate'],
};

/* ── Portfolio ── */
FW.portfolio = [
  { id: 'p1', title: 'Corporate Network Rollout', cat: 'Technology', year: '2025', image: 'assets/img/div-tech.jpg', meta: '3-floor office · 80 endpoints' },
  { id: 'p2', title: 'Annual Leadership Summit Audio', cat: 'Sound', year: '2025', image: 'assets/img/div-sound.jpg', meta: '1,200 guests · Full PA' },
  { id: 'p3', title: 'Grand Wedding Reception', cat: 'Catering', year: '2025', image: 'assets/img/div-hospitality.jpg', meta: '450 guests · Plated service' },
  { id: 'p4', title: 'Luxury Brand Stationery Suite', cat: 'Printing', year: '2024', image: 'assets/img/div-creative.jpg', meta: 'Foil finish · 350gsm' },
  { id: 'p5', title: 'Executive Portrait Series', cat: 'Art', year: '2025', image: 'assets/img/portfolio.jpg', meta: '12 commissioned pieces' },
  { id: 'p6', title: 'Corporate HQ Deep Clean', cat: 'Cleaning', year: '2024', image: 'assets/img/div-hospitality.jpg', meta: '2,000 sqm · Overnight' },
  { id: 'p7', title: 'Gala Night Live Band', cat: 'Music', year: '2025', image: 'assets/img/div-sound.jpg', meta: '7-piece ensemble · 3 hrs' },
  { id: 'p8', title: '12-Week Transformation Block', cat: 'Fitness', year: '2025', image: 'assets/img/div-performance.jpg', meta: '18 clients · 96% retention' },
  { id: 'p9', title: 'Tech Career Bootcamp', cat: 'Technology', year: '2024', image: 'assets/img/academy.jpg', meta: '42 graduates · 6 weeks' },
  { id: 'p10', title: 'Gallery Mural Commission', cat: 'Art', year: '2024', image: 'assets/img/div-creative.jpg', meta: '18m wall · Installed on-site' },
  { id: 'p11', title: 'Worship Conference Production', cat: 'Sound', year: '2024', image: 'assets/img/div-sound.jpg', meta: '3 days · Multitrack capture' },
  { id: 'p12', title: 'Corporate Lunch Programme', cat: 'Catering', year: '2025', image: 'assets/img/div-hospitality.jpg', meta: 'Weekly · 120 covers' },
];

/* ── Marketplace ── */
FW.products = [
  { id: 'm1', title: 'Foil Business Card Pack', cat: 'Print', kind: 'physical', price: 18500, desc: '500 premium 350gsm cards with gold foil monogram.', image: 'assets/img/div-creative.jpg' },
  { id: 'm2', title: 'Event Programme Template', cat: 'Digital', kind: 'digital', price: 4500, desc: 'Editable 16-page luxury programme, print-ready.', image: 'assets/img/portfolio.jpg' },
  { id: 'm3', title: 'Signature Art Print — “Gold Hour”', cat: 'Art', kind: 'physical', price: 45000, desc: 'Limited-edition giclée print, signed and numbered.', image: 'assets/img/portfolio.jpg' },
  { id: 'm4', title: 'Digital Skills E-Book', cat: 'Education', kind: 'digital', price: 7500, desc: '80-page guide to modern digital fluency.', image: 'assets/img/academy.jpg' },
  { id: 'm5', title: 'Brand Identity Kit', cat: 'Design', kind: 'digital', price: 25000, desc: 'Logo suite, palette, type system & usage guide.', image: 'assets/img/div-creative.jpg' },
  { id: 'm6', title: 'Practice Pad Pack (Music)', cat: 'Education', kind: 'digital', price: 5500, desc: 'Printable theory & ear-training workbooks.', image: 'assets/img/div-sound.jpg' },
  { id: 'm7', title: 'Branded Tote — Fortworkxx', cat: 'Merch', kind: 'physical', price: 9500, desc: 'Heavyweight canvas tote with gold emblem.', image: 'assets/img/div-performance.jpg' },
  { id: 'm8', title: 'Training Programme PDF', cat: 'Fitness', kind: 'digital', price: 12000, desc: '12-week strength & conditioning plan.', image: 'assets/img/div-performance.jpg' },
];

/* ── Testimonials ── */
FW.testimonials = [
  { quote: 'Fortworkxx handled our entire office network in two days — zero downtime, immaculate documentation. Rare professionalism.', name: 'Chinedu O.', role: 'Operations Director, Lagos', initials: 'CO' },
  { quote: 'The sound at our wedding was flawless from soundcheck to the last dance. Guests are still talking about the band.', name: 'Amara & Tunde', role: 'Wedding Clients', initials: 'AT' },
  { quote: 'Their catering team turned a simple anniversary dinner into a fine-dining experience. Presentation alone was worth it.', name: 'Mrs. Adeyemi', role: 'Private Client', initials: 'MA' },
  { quote: 'I completed the digital skills bootcamp and landed my first tech support role within a month. The training was practical and real.', name: 'Ifeanyi K.', role: 'Academy Graduate', initials: 'IK' },
  { quote: 'From business cards to banners, every print run has been colour-perfect and on time. Our brand finally looks as good as it is.', name: 'Zainab B.', role: 'Founder, Bloom Stores', initials: 'ZB' },
  { quote: 'Twelve weeks with the Fortworkxx performance team changed my energy, my strength and my discipline. Worth every session.', name: 'Daniel A.', role: 'Personal Training Client', initials: 'DA' },
];

/* ── Insights ── */
FW.articles = [
  { id: 'a1', cat: 'Technology', read: '6 min', date: 'Oct 2025', title: 'Five Digital Habits Every Small Business Needs in 2026', excerpt: 'From password hygiene to cloud backups — the practical baseline that protects your revenue and reputation.' },
  { id: 'a2', cat: 'Sound', read: '5 min', date: 'Sep 2025', title: 'Why Great Events Sound Invisible', excerpt: 'The engineering decisions behind audio that audiences feel without ever noticing the equipment.' },
  { id: 'a3', cat: 'Catering', read: '4 min', date: 'Sep 2025', title: 'Designing a Menu Your Guests Will Remember', excerpt: 'How seasonal produce, dietary inclusion and presentation combine into a menu with personality.' },
  { id: 'a4', cat: 'Creative', read: '7 min', date: 'Aug 2025', title: 'Print Is Not Dead — It Is a Luxury Signal', excerpt: 'Why premium stocks, finishes and typography still separate serious brands from the rest.' },
  { id: 'a5', cat: 'Fitness', read: '5 min', date: 'Aug 2025', title: 'The First 30 Days: Building a Training Habit That Sticks', excerpt: 'A coach’s framework for starting strength training without burning out in week two.' },
  { id: 'a6', cat: 'Academy', read: '6 min', date: 'Jul 2025', title: 'Learning by Doing: The Fortworkxx Training Philosophy', excerpt: 'Why every course we run ends with a real project, a real critique and a real result.' },
];

/* ── Stats ── */
FW.stats = [
  { value: 8, suffix: '+', label: 'Service disciplines' },
  { value: 5, suffix: '', label: 'Strategic divisions' },
  { value: 250, suffix: '+', label: 'Projects delivered' },
  { value: 98, suffix: '%', label: 'Client satisfaction' },
];

/* ── Why Fortworkxx ── */
FW.why = [
  { num: '01', title: 'Quality Delivery', desc: 'Every engagement is checklist-driven, inspected and finished to a standard you would put your name on.' },
  { num: '02', title: 'Innovation', desc: 'Modern tooling, modern techniques — from digital training to production-grade audio and design.' },
  { num: '03', title: 'Customer Obsession', desc: 'Clear communication, transparent quotes and proactive updates from first contact to handover.' },
  { num: '04', title: 'Creative Excellence', desc: 'A luxury aesthetic is built into the work — print, plate, stage or screen.' },
  { num: '05', title: 'Professional Reliability', desc: 'We arrive early, we deliver on schedule, and we stand behind the result.' },
];

/* ── Booking field options helper ── */
FW.getService = (id) => FW.services.find((s) => s.id === id);
FW.getDivision = (id) => FW.divisions.find((d) => d.id === id);
FW.divisionServices = (id) => FW.services.filter((s) => s.division === id);
