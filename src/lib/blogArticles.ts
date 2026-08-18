import { img } from "./content";

export type ArticleSection = {
  heading: string;
  level?: 2 | 3;
  image?: { src: string; alt: string };
  leadIn?: string;
  paragraphs?: string[];
  list?: string[];
  ordered?: boolean;
  groups?: { label: string; items: string[] }[];
  compact?: boolean;
};

export type Article = {
  slug: string;
  intro: string[];
  sections: ArticleSection[];
  conclusion?: string[];
  faqs: { q: string; a: string }[];
};

export const blogArticles: Record<string, Article> = {
  "essential-steps-architectural-site-analysis": {
    slug: "essential-steps-architectural-site-analysis",
    intro: [
      "Every successful building begins with a thorough understanding of the site. Before sketches, floor plans, or 3D models are developed, architects and building designers need to know how a block behaves — its slope, its light, its access, its constraints — so the design responds to reality rather than fighting it.",
      "A proper site analysis is the difference between a design that feels effortless once it's built and one that runs into costly surprises during permits or construction. Here's how we approach it, and what we recommend any homeowner or developer ask their designer about before concepts begin.",
    ],
    sections: [
      {
        heading: "Why Site Analysis Is Important in Building Design",
        paragraphs: [
          "A thorough site analysis lays the groundwork for a practical and well-informed building design. It shapes decisions long before a single wall is drawn, and it protects the project from expensive rework later on.",
        ],
        list: [
          "Designs a building suited to the land, not a generic layout dropped onto it",
          "Improves natural light, ventilation and overall energy efficiency",
          "Reduces the risk of unexpected construction costs",
          "Identifies planning and regulatory constraints early",
          "Protects significant trees, vegetation and neighbouring amenity",
          "Strengthens the case for a smoother planning permit approval",
          "Informs smarter siting, orientation and material choices",
          "Highlights opportunities the site offers, not just its limitations",
          "Builds client confidence that the design is grounded in evidence",
        ],
      },
      {
        heading: "Essential Steps to Perform an Architectural Site Analysis",
      },
      {
        heading: "Step 1: Understand the Client's Goals",
        level: 3,
        compact: true,
        image: {
          src: img("/pub/c0173968/editor-uploaded-image/Understand the Client's Goals-2.png"),
          alt: "Step 1: Understand the Client's Goals",
        },
        leadIn: "Before visiting the site, we clarify the project's objectives. Typical questions include:",
        list: [
          "What type of building is being proposed?",
          "How many occupants will use it?",
          "What is the available budget?",
          "Are there future expansion plans?",
          "What lifestyle or business requirements exist?",
        ],
        paragraphs: [
          "Before any technical assessment begins, we clarify what the project actually needs to achieve — the intended use, expected occupancy, budget range, and whether the client wants room to expand later. This shapes how the rest of the analysis is prioritised.",
        ],
      },
      {
        heading: "Step 2: Collect Existing Site Information",
        level: 3,
        compact: true,
        image: {
          src: img("/pub/c0173968/editor-uploaded-image/Collect Existing Site Information.png"),
          alt: "Step 2: Collect Existing Site Information",
        },
        leadIn: "We gather everything already on record, including:",
        groups: [
          { label: "Property Details", items: ["Property boundaries", "Easements", "Existing structures", "Levels", "Services"] },
          { label: "Planning Information", items: ["Local planning schemes", "Zoning regulations", "Building overlays", "Heritage restrictions", "Bushfire or flood overlays", "Environmental controls"] },
          { label: "Utilities", items: ["Water", "Sewer", "Electricity", "Gas", "Stormwater", "Telecommunications"] },
        ],
        paragraphs: [
          "We gather everything already on record: property surveys, title boundaries, existing planning overlays, and utility or services information. Starting from accurate data avoids assumptions that can unravel later in the process.",
        ],
      },
      {
        heading: "Step 3: Visit the Site",
        level: 3,
        compact: true,
        image: {
          src: img("/pub/c0173968/editor-uploaded-image/Visit the Site.png"),
          alt: "Step 3: Visit the Site",
        },
        leadIn: "On site, we observe and record details such as:",
        list: [
          "Land slope",
          "Ground conditions",
          "Existing trees",
          "Drainage patterns",
          "Vehicle access",
          "Pedestrian movement",
          "Noise sources",
          "Nearby buildings",
          "Views",
          "Privacy",
          "Potential hazards",
        ],
        paragraphs: [
          "Desktop research only tells part of the story. A physical site visit lets us observe how the block actually feels — the fall of the land, existing structures, noise, outlook, and the character of the surrounding street — details that rarely come through in documents alone.",
        ],
      },
      {
        heading: "Step 4: Assess Topography and Landform",
        level: 3,
        compact: true,
        image: {
          src: img("/pub/c0173968/editor-uploaded-image/Assess Topography and Landform.png"),
          alt: "Step 4: Assess Topography and Landform",
        },
        leadIn: "Slope, elevation and ground conditions typically call for responses such as:",
        groups: [
          { label: "Slope", items: ["Retaining walls", "Split-level designs", "Additional excavation"] },
          { label: "Elevation", items: ["Better views", "Improved airflow", "Reduced flood risk"] },
          { label: "Soil Conditions", items: ["Soil type", "Bearing capacity", "Rock presence", "Ground movement potential"] },
        ],
        paragraphs: [
          "Slope, elevation changes and soil conditions all influence how a building can sit on its site. Understanding topography early helps avoid excessive cut-and-fill, retaining costs, or drainage issues further down the track.",
        ],
      },
      {
        heading: "Step 5: Study Climate and Environmental Conditions",
        level: 3,
        compact: true,
        image: {
          src: img("/pub/c0173968/editor-uploaded-image/Study Climate and Environmental Conditions.png"),
          alt: "Step 5: Study Climate and Environmental Conditions",
        },
        leadIn: "Climate factors we study include:",
        list: ["Sun Path", "Wind Direction", "Rainfall", "Temperature"],
        paragraphs: [
          "Sun path, prevailing wind, rainfall and seasonal temperature swings all inform orientation and passive design decisions — where living spaces sit, where glazing goes, and how the building manages heat and light across the year.",
        ],
      },
      {
        heading: "Step 6: Evaluate Existing Vegetation",
        level: 3,
        compact: true,
        image: {
          src: img("/pub/c0173968/editor-uploaded-image/Step 6 Evaluate Existing Vegetation.png"),
          alt: "Step 6: Evaluate Existing Vegetation",
        },
        leadIn: "We check for factors such as:",
        list: ["Significant trees", "Protected vegetation", "Root zones", "Native species", "Landscape opportunities"],
        paragraphs: [
          "Established trees, protected species and native plantings can all affect what's buildable on a site. We assess what should be retained, what's protected under local controls, and how landscaping can be worked into the design rather than removed by default.",
        ],
      },
      {
        heading: "Step 7: Analyse Access and Circulation",
        level: 3,
        compact: true,
        image: {
          src: img("/pub/c0173968/editor-uploaded-image/Analyse Access and Circulation.png"),
          alt: "Step 7: Analyse Access and Circulation",
        },
        leadIn: "We consider access across three categories:",
        paragraphs: [
          "How people, vehicles and construction traffic move around a site affects everything from driveway placement to staging a build. We map existing access points and consider how they'll function once the project is complete.",
        ],
        groups: [
          { label: "Vehicle Access", items: ["Driveway location", "Parking opportunities", "Turning circles", "Service vehicle access"] },
          { label: "Pedestrian Access", items: ["Entry paths", "Accessibility", "Safety", "Connectivity"] },
          { label: "Construction Access", items: ["Machinery access", "Material delivery", "Temporary site access"] },
        ],
      },
      {
        heading: "Step 8: Examine Surrounding Context",
        level: 3,
        compact: true,
        image: {
          src: img("/pub/c0173968/editor-uploaded-image/Examine Surrounding Context.png"),
          alt: "Examine Surrounding Context",
        },
        leadIn: "Context factors we review include:",
        list: [
          "Building heights",
          "Setbacks",
          "Streetscape character",
          "Privacy",
          "Overshadowing",
          "Views",
          "Traffic",
          "Local amenities",
        ],
        paragraphs: [
          "Neighbouring buildings, streetscape character and local landmarks all inform how a new design should sit within its setting — respecting context while still making room for a considered, contemporary response.",
        ],
      },
      {
        heading: "Step 9: Review Planning and Building Regulations",
        level: 3,
        compact: true,
        image: {
          src: img("/pub/c0173968/editor-uploaded-image/Review Planning and Building Regulations.png"),
          alt: "Step 9: Review Planning and Building Regulations",
        },
        leadIn: "Planning controls we check include:",
        list: ["Zoning", "Setbacks", "Height Restrictions", "Site Coverage", "Private Open Space", "Heritage Controls"],
        paragraphs: [
          "Zoning, setbacks, height limits and overlays set the framework the design has to work within. Reviewing these early means the concept is shaped around what's achievable, rather than redesigned after a planning knock-back.",
        ],
      },
      {
        heading: "Step 10: Identify Opportunities and Constraints",
        level: 3,
        compact: true,
        image: {
          src: img("/pub/c0173968/editor-uploaded-image/Identify Opportunities and Constraints.png"),
          alt: "Step 10: Identify Opportunities and Constraints",
        },
        leadIn: "This typically breaks down into:",
        groups: [
          { label: "Opportunities", items: ["Scenic views", "Northern solar access", "Existing landscaping", "Corner block access", "Natural ventilation"] },
          { label: "Constraints", items: ["Easements", "Flood risk", "Steep slopes", "Poor soil", "Noise", "Bushfire overlays"] },
        ],
        paragraphs: [
          "With the groundwork done, we pull everything together into a clear picture of the site's strengths and limitations — the outlook worth capturing, the boundary that limits width, the fall that could become a feature rather than a problem.",
        ],
      },
      {
        heading: "Step 11: Document Your Findings",
        level: 3,
        compact: true,
        image: {
          src: img("/pub/c0173968/editor-uploaded-image/Document Your Findings.png"),
          alt: "Document Your Findings",
        },
        leadIn: "Findings are documented and typically include:",
        list: ["Boundaries", "Levels", "Vegetation", "Services", "Access", "Sun movement", "Wind direction", "Shading", "Drainage"],
        paragraphs: [
          "The analysis is captured in site analysis plans and environmental diagrams that carry through into the design process — a practical reference the whole project team can return to as decisions are made.",
        ],
      },
      {
        heading: "Common Mistakes to Avoid During Site Analysis",
        list: [
          "Skipping a physical site visit and relying on documents alone",
          "Underestimating the impact of slope and soil conditions",
          "Ignoring solar orientation until late in the design",
          "Ignoring protected trees or vegetation controls",
          "Overlooking overlays that affect what can be built",
          "Failing to consider construction access early",
          "Treating site analysis as a formality rather than a design tool",
        ],
      },
      {
        heading: "Tools Commonly Used for Architectural Site Analysis",
        list: [
          "Site surveys",
          "GPS equipment",
          "Drones",
          "GIS mapping software",
          "CAD software",
          "BIM platforms",
          "Sun path analysis tools",
          "Wind simulation software",
          "Soil reports",
          "Planning maps",
          "Environmental databases",
        ],
      },
      {
        heading: "How Site Analysis Influences Building Design",
        list: [
          "Building orientation and room placement",
          "Roof form and massing decisions",
          "Window and glazing placement for light and privacy",
          "Material selection suited to climate and context",
          "Driveway, parking and access layout",
          "Outdoor living and landscape zones",
          "Stormwater and drainage strategy",
          "Energy efficiency and passive design outcomes",
          "Overall buildability and construction sequencing",
        ],
      },
    ],
    conclusion: [
      "Site analysis is the foundation upon which every successful building project is built. Getting it right early gives a design room to respond to the land, the client's goals and council requirements together — rather than treating any one of them as an afterthought.",
    ],
    faqs: [
      {
        q: "What is the purpose of an architectural site analysis?",
        a: "It's the process of studying a site's physical, environmental, regulatory and contextual conditions before design begins, so the building responds to the land rather than being imposed on it.",
      },
      {
        q: "When should a site analysis be completed?",
        a: "As early as possible — ideally before any concept design work starts, so the findings can genuinely shape the design rather than justify decisions already made.",
      },
      {
        q: "Who performs an architectural site analysis?",
        a: "Typically the building designer or architect leading the project, often supported by surveyors and other consultants for specialist information such as contour surveys or arborist reports.",
      },
      {
        q: "What information is collected during a site analysis?",
        a: "Topography, climate and solar orientation, vegetation, access and circulation, surrounding context, and the planning and building regulations that apply to the site.",
      },
      {
        q: "Can a site analysis improve sustainability?",
        a: "Yes — by identifying orientation, shading, wind and vegetation early, it allows passive design strategies to be built into the concept from the outset rather than added on later.",
      },
    ],
  },

  "building-designer-vs-architect-vs-draftsman-australia": {
    slug: "building-designer-vs-architect-vs-draftsman-australia",
    intro: [
      "If you're planning a new home, renovation, extension, townhouse development or commercial project, one of the first decisions you'll need to make is whether to engage a building designer, an architect, or a draftsman. Each profession has different qualifications, responsibilities and areas of expertise — and the right choice depends on your project's scale, complexity and goals.",
    ],
    sections: [
      {
        heading: "What Does a Building Designer Do?",
        paragraphs: [
          "A building designer specialises in creating functional, compliant residential and commercial spaces. Typical projects include new homes, renovations, extensions, dual occupancy developments, townhouses, commercial fit-outs, health spaces and mixed-use developments.",
        ],
        list: [
          "Site analysis and feasibility",
          "Concept design and design development",
          "Town planning documentation",
          "Building permit documentation",
          "Construction drawings",
          "Consultant coordination and council liaison",
          "Sustainability coordination",
        ],
      },
      {
        heading: "What Does an Architect Do?",
        paragraphs: [
          "An architect is a registered design professional who has completed an accredited university qualification. The title \"Architect\" is protected under Australian legislation and can only be used by those registered with their state architects board.",
          "Architects typically work across residential homes, multi-residential developments, commercial buildings, educational facilities, healthcare projects and public buildings — often taking on complex design challenges, large-scale projects and detailed project leadership.",
        ],
      },
      {
        heading: "What Does a Draftsman Do?",
        paragraphs: [
          "A draftsman specialises in technical drawings and documentation, typically using CAD and BIM software. Their work includes producing technical drawings, preparing construction documentation, amending existing plans, converting sketches into digital plans, and assisting with permit documentation.",
        ],
      },
      {
        heading: "Comparison at a Glance",
        list: [
          "Draftsman — best for simple documentation, plan amendments and basic drafting",
          "Building Designer — best for new homes, renovations, extensions and residential developments",
          "Architect — best for complex, large-scale or highly specialised projects",
        ],
      },
      {
        heading: "Qualifications Compared",
        list: [
          "Building Designer — diploma, advanced diploma or degree in building design; registration requirements vary by state",
          "Architect — accredited architecture degree plus mandatory registration",
          "Draftsman — drafting qualification or CAD training; registration generally not required",
        ],
      },
      {
        heading: "Choose a Building Designer If You Are:",
        list: [
          "Building a new home",
          "Planning an extension",
          "Renovating an existing property",
          "Developing townhouses",
          "Looking for practical design solutions",
          "Wanting support through permits and approvals",
        ],
      },
      {
        heading: "Choose an Architect If You Are:",
        list: [
          "Designing a highly complex building",
          "Developing a large commercial project",
          "Seeking a highly specialised architectural outcome",
          "Working on a landmark project",
        ],
      },
      {
        heading: "Choose a Draftsman If You Need:",
        list: [
          "Technical drafting only",
          "Minor plan amendments",
          "Documentation support",
          "Updates to an existing design",
        ],
      },
      {
        heading: "Common Myths, Debunked",
        paragraphs: [
          "It's a myth that building designers are limited to small projects — many deliver complex residential and commercial work every day. It's also not true that an architect will always produce a superior design outcome; the right fit depends on the project. And draftsmen do more than produce drawings — many provide valuable input on documentation and permit coordination.",
        ],
      },
      {
        heading: "How Your Choice Affects the Project",
        paragraphs: [
          "The professional you choose influences construction costs, buildability, planning and building approvals, energy efficiency, project timelines and long-term property value — which is why matching the right expertise to the right project matters.",
        ],
      },
      {
        heading: "Questions to Ask Before You Hire",
        list: [
          "Are you registered or licensed, and in what capacity?",
          "Have you worked on similar projects before?",
          "Can you provide references?",
          "Can you prepare planning permit documentation?",
          "Can you prepare building permit documentation?",
          "Do you coordinate consultants such as engineers and surveyors?",
          "What does your fee proposal include?",
          "What level of support do you provide through the project?",
        ],
      },
      {
        heading: "A Note for Victorian Projects",
        paragraphs: [
          "Melbourne and regional Victorian projects often need to navigate ResCode requirements, neighbourhood character provisions, planning overlays, heritage controls, bushfire management requirements and energy efficiency standards — all of which make local experience valuable, regardless of which professional you engage.",
        ],
      },
    ],
    conclusion: [
      "There's no single right answer — a building designer, architect or draftsman can each be the right fit depending on your project. What matters most is choosing a professional with relevant experience, the right qualifications, and a process that suits the scale of what you're building.",
    ],
    faqs: [
      {
        q: "Is a building designer cheaper than an architect?",
        a: "Generally, yes — building designers typically offer a more cost-effective service for standard residential and commercial projects, while architects' fees reflect the scope of highly complex or bespoke work.",
      },
      {
        q: "Can a building designer prepare plans for council approval?",
        a: "Yes. Building designers regularly prepare and lodge town planning and building permit documentation as part of their standard service.",
      },
      {
        q: "What's the difference between a draftsman and a building designer?",
        a: "A draftsman focuses on technical drawing and documentation, while a building designer manages the broader design process — from concept through to permit documentation and consultant coordination.",
      },
      {
        q: "Can a building designer design a new home from scratch?",
        a: "Yes. Designing new homes, from initial concept through to construction documentation, is core work for a building designer.",
      },
      {
        q: "Do I need an architect for a house extension?",
        a: "Not necessarily. Most extensions are well suited to a building designer, and an architect is typically only needed for highly complex or architecturally ambitious projects.",
      },
      {
        q: "Can a draftsman design a house?",
        a: "A draftsman can document a design, but the design process itself — site analysis, concept development and planning strategy — is usually led by a building designer or architect.",
      },
    ],
  },

  "commercial-building-design-insights": {
    slug: "commercial-building-design-insights",
    intro: [
      "Commercial buildings have evolved significantly over the past decade. Today's businesses require spaces that do more than provide shelter — they need environments that support productivity, attract customers, improve sustainability and adapt to changing operational needs.",
    ],
    sections: [
      {
        heading: "Why Commercial Building Design Matters",
        list: [
          "Improve workplace functionality",
          "Enhance customer and visitor experiences",
          "Increase property value",
          "Support sustainability goals",
          "Reduce operating costs",
          "Improve accessibility and compliance",
          "Create flexibility for future growth",
        ],
      },
      {
        heading: "Key Principles of Successful Commercial Design",
        paragraphs: [
          "Good commercial design starts with functionality — staff workflows, customer movement, equipment and storage needs, accessibility and future operational change all shape the plan.",
          "Flexibility matters just as much. Open-plan layouts, modular workspaces, multi-purpose meeting areas and adaptable tenancy arrangements let a building evolve as a business grows or changes.",
          "Sustainability and environmental performance round it out — passive solar design, natural ventilation, energy-efficient lighting, high-performance glazing, water-saving fixtures and sustainable materials all reduce long-term running costs.",
        ],
      },
      {
        heading: "Emerging Commercial Design Trends",
        list: [
          "Smart building technology — automated lighting, intelligent climate control, occupancy monitoring and integrated security",
          "Wellness-focused workspaces — natural daylight, better air quality, acoustic treatment and biophilic design",
          "Mixed-use development growth — commercial, retail, residential and hospitality combined on one site",
          "Sustainable urban design — streetscape activation, walkability and green infrastructure",
        ],
      },
      {
        heading: "Types of Commercial Buildings We Design",
        paragraphs: [
          "Office buildings need thoughtful workspace planning, meeting facilities, staff amenities and strong natural lighting. Retail spaces prioritise customer circulation, product visibility and storefront presentation. Healthcare and specialist facilities require careful attention to patient flow, privacy and accessibility compliance. Mixed-use developments need all of the above coordinated across a single site.",
        ],
      },
      {
        heading: "The Commercial Building Design Process",
        list: [
          "Site analysis and feasibility",
          "Concept design and space planning",
          "Planning and permit documentation",
          "Construction documentation",
        ],
      },
      {
        heading: "Designing for Challenging Sites",
        paragraphs: [
          "Melbourne commercial projects often sit on narrow allotments, corner sites or irregularly shaped land. Good design turns these constraints into character — working with the site rather than fighting it.",
        ],
      },
      {
        heading: "Balancing Aesthetics and Performance",
        paragraphs: [
          "The best commercial buildings balance architectural character with operational requirements, user experience, construction efficiency, budget and long-term maintenance — no single factor should be designed in isolation.",
        ],
      },
      {
        heading: "Choosing a Commercial Building Designer",
        paragraphs: [
          "Look for relevant project experience, sound knowledge of planning regulations, quality documentation, clear communication, sustainability expertise, and the ability to coordinate consultants and construction requirements.",
        ],
      },
    ],
    conclusion: [
      "Thoughtful commercial design can significantly influence a building's long-term performance and value — for the business that occupies it and the community around it.",
    ],
    faqs: [
      {
        q: "What is commercial building design?",
        a: "It's the process of planning and documenting non-residential buildings — offices, retail, healthcare and mixed-use spaces — so they're functional, compliant and suited to how the business will operate.",
      },
      {
        q: "Why is sustainable commercial building design important?",
        a: "Sustainable design reduces running costs, improves comfort for staff and customers, and supports compliance with increasingly stringent energy and environmental standards.",
      },
      {
        q: "What should I look for in a commercial building designer?",
        a: "Relevant project experience, strong knowledge of planning requirements, clear documentation, and a process that coordinates consultants and construction needs from the outset.",
      },
    ],
  },

  "building-design-services-melbourne": {
    slug: "building-design-services-melbourne",
    intro: [
      "Manzel Studio provides purpose-driven building design services in Melbourne for residential, commercial and health space projects. Based in Preston, the studio blends creative thinking, construction knowledge and a client-focused process to guide projects from first idea through to construction support.",
      "The studio is led by Ahmed Dirani, alongside a team of registered building designers, drafters and project coordinators.",
    ],
    sections: [
      {
        heading: "A Clear Building Design Process From the First Idea",
        paragraphs: [
          "Building projects can feel overwhelming before they even start. Manzel Studio's staged process breaks the work into clear steps, so clients understand what's happening at every point and feel confident as the project progresses.",
        ],
      },
      {
        heading: "Practical Building Design That Still Feels Thoughtful",
        paragraphs: [
          "Good design isn't about creating something impressive on paper that becomes difficult or unrealistic to build. The studio balances aesthetic ambition with buildability and budget realism, so what's designed is what actually gets delivered.",
        ],
      },
      {
        heading: "From Site Assessment to Construction Support",
        paragraphs: [
          "Services span the full project lifecycle — site assessment, feasibility review, concept design, design development, consultant coordination, permitting and construction support — so clients have a single point of contact from start to finish.",
        ],
      },
      {
        heading: "Building Design Services Across Melbourne",
        list: [
          "Residential — custom homes, renovations and extensions that prioritise comfort and everyday flow",
          "Commercial — workplace and retail environments that support productivity and brand identity",
          "Health Space — medical and wellness environments that balance patient comfort with clinical function",
        ],
      },
      {
        heading: "A Practical Building Design Partner",
        paragraphs: [
          "What sets the studio apart is the combination of creative design thinking with genuine construction expertise — meaning designs are shaped with buildability in mind from day one, not adjusted after the fact.",
        ],
      },
      {
        heading: "Creating Spaces That Work in Real Life",
        paragraphs: [
          "Every project is approached with the people who'll actually use the space in mind — homeowners, staff, patients or customers — so the design supports everyday functionality, not just how a space photographs.",
        ],
      },
    ],
    faqs: [
      {
        q: "What building design services does Manzel Studio offer?",
        a: "Residential, commercial and health space design — covering site assessment, concept design, planning permit documentation, building permit documentation and construction support.",
      },
      {
        q: "What types of projects do you take on?",
        a: "New homes, renovations, extensions, townhouse and dual occupancy developments, commercial fit-outs and health space projects.",
      },
      {
        q: "Do you work outside Preston and inner Melbourne?",
        a: "Yes — the studio works across metropolitan Melbourne and into regional Victoria.",
      },
      {
        q: "Do you help with council approvals?",
        a: "Yes. The studio manages planning permit and building permit documentation and liaises with council on the client's behalf.",
      },
      {
        q: "When's the best time to engage a building designer?",
        a: "As early as possible — ideally before you've committed to a concept, so the design can be shaped around the site and planning requirements from the start.",
      },
    ],
  },

  "designing-a-home-on-a-narrow-block": {
    slug: "designing-a-home-on-a-narrow-block",
    intro: [
      "If you've bought, inherited, or are eyeing a long, narrow block, you've probably been told it is \"tricky.\" Maybe even that you'll have to compromise. We don't agree. Narrow blocks can deliver generous, thoughtful and highly functional homes when the design is approached with care.",
    ],
    sections: [
      {
        heading: "Why Narrow Block Design Offers Unique Opportunities",
        paragraphs: [
          "Narrow blocks are common in established suburbs and inner-city areas, often close to transport, schools and amenities that wider blocks in outer areas simply can't match. A limited width is a real design challenge — but it's one with strong potential when it's addressed early and deliberately.",
        ],
      },
      {
        heading: "Five Design Moves That Make Narrow Blocks Work",
        ordered: true,
        list: [
          "Use the rear of the block strategically — for parking, garaging or private outdoor space, rather than defaulting it to leftover space",
          "Stack bonus spaces vertically above garages or service areas to make up for what width can't provide",
          "Zone the plan front-to-back, moving from quiet spaces near the street through to more active living areas",
          "Design deliberately for light — skylights, courtyards, voids and highlight windows bring daylight deep into a narrow footprint",
          "Respect the streetscape with a considered, contemporary response rather than a generic wide-block layout squeezed to fit",
        ],
      },
      {
        heading: "What to Watch Out For",
        list: [
          "Construction access can be tighter and needs to be planned for early",
          "Setback and overlooking requirements can be more restrictive on narrow sites",
          "Privacy between close neighbouring boundaries needs careful attention",
          "Planning requirements vary between councils, so local knowledge matters",
        ],
      },
      {
        heading: "A Better Way to Approach Narrow Sites",
        paragraphs: [
          "Standard house plans rarely translate well to a narrow block. A tailored, site-specific design — one that responds to the block's actual dimensions, orientation and context — consistently outperforms a generic layout that's simply been squeezed to fit.",
        ],
      },
    ],
    conclusion: [
      "Narrow blocks need strategic design, not compromise. With the right focus on natural light, zoning, outdoor space and context, they can deliver homes that feel just as generous as their wider neighbours.",
    ],
    faqs: [
      {
        q: "What counts as a narrow block?",
        a: "Definitions vary by council, but blocks under roughly 10 to 12 metres wide are generally considered narrow and benefit from a tailored design approach.",
      },
      {
        q: "How do you get natural light into a narrow home?",
        a: "Through deliberate use of skylights, internal courtyards, voids and highlight windows positioned to bring daylight deep into the plan, even where side windows are limited.",
      },
      {
        q: "Does building on a narrow block cost more?",
        a: "It can, depending on access and site conditions, but a well-considered design manages this by planning construction access and buildability from the outset.",
      },
      {
        q: "Can a narrow block still fit a double garage?",
        a: "Often yes, depending on width and council setback requirements — it's one of the first things we assess during site analysis.",
      },
      {
        q: "Do narrow blocks need a custom design, or can I use a standard plan?",
        a: "A custom, site-specific design almost always performs better on a narrow block than an off-the-shelf plan, which is typically designed for a standard-width lot.",
      },
      {
        q: "Can Manzel Studio help with narrow block designs?",
        a: "Yes — narrow block design is a regular part of our residential work across Melbourne's established and inner-city suburbs.",
      },
    ],
  },

  "how-to-get-a-planning-permit-approved-faster": {
    slug: "how-to-get-a-planning-permit-approved-faster",
    intro: [
      "If you are planning a new home, an extension, a renovation, a multi-unit development, or a commercial project, the planning permit process can feel slow and uncertain. In most cases, delays come down to incomplete submissions or a design that isn't yet aligned with local requirements — not fundamental feasibility issues. Success depends primarily on thorough preparation.",
    ],
    sections: [
      {
        heading: "Why Planning Permits Often Take Longer Than Expected",
        list: [
          "Incomplete documentation that prevents council from properly assessing the application",
          "Neighbourhood character considerations around height, setbacks and materials",
          "Site constraints such as heritage overlays, vegetation controls, flooding or easements",
          "External factors — council workload, referral authorities and public objections",
        ],
      },
      {
        heading: "A Better Approach to Planning Permit Applications",
        paragraphs: [
          "The most reliable approach is to understand the planning controls that apply to a site before the design is finalised, then shape the concept around those requirements from the start — rather than designing first and adjusting for planning later.",
        ],
      },
      {
        heading: "Five Key Steps to a Smoother Approval",
        ordered: true,
        list: [
          "Feasibility review — identify zoning, overlays, height limits, parking requirements and referral triggers upfront",
          "Design for approval — build planning considerations into the design itself, addressing massing, overlooking, shadowing and streetscape response",
          "Complete submission package — include architectural drawings, site analysis, shadow diagrams, planning reports, landscape concepts and any specialist documentation required",
          "Clear documentation — ensure drawings and reports are consistent, clearly labelled, and directly address the relevant planning controls",
          "Responsive communication — respond promptly to council requests and make small design adjustments early rather than late",
        ],
      },
      {
        heading: "What Applicants Can Do",
        list: [
          "Make key decisions early to avoid design revisions mid-process",
          "Provide site documentation — titles, surveys and easement details — as early as possible",
          "Keep timeline expectations realistic given council workload and project complexity",
        ],
      },
      {
        heading: "A Typical Staged Process",
        ordered: true,
        list: [
          "Site review and planning feasibility",
          "Concept design",
          "Documentation and reports",
          "Council assessment",
          "Response and refinement",
          "Decision",
        ],
      },
    ],
    faqs: [
      {
        q: "How long does a planning permit take to approve?",
        a: "Timeframes vary depending on project complexity and council workload, but a complete, well-prepared submission consistently moves faster than one that needs follow-up requests.",
      },
      {
        q: "What are the most common causes of planning permit delays?",
        a: "Missing documents, inconsistent drawings, and objections from neighbouring properties are the most common causes we see.",
      },
      {
        q: "Can a building designer help with planning permit applications?",
        a: "Yes — reviewing site constraints, shaping the design around planning controls, and coordinating documentation are all core parts of the service.",
      },
      {
        q: "What's the difference between a planning permit and a building permit?",
        a: "A planning permit deals with land use and how a proposal fits within council planning controls, while a building permit confirms the design complies with the National Construction Code and is safe to build.",
      },
    ],
  },
};
