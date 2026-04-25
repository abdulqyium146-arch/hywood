export interface Location {
  slug: string;
  name: string;
  county: string;
  postcode: string;
  phone: string;
  intro: string;
  description: string;
  landmarks: string[];
  scenarios: string[];
  nearbyAreas: string[];
  faqs: { question: string; answer: string }[];
  metaTitle: string;
  metaDescription: string;
  h1: string;
  keywords: string[];
}

export const PHONE_NUMBER = "01706 123 456";
export const PHONE_HREF = "tel:+441706123456";
export const BUSINESS_NAME = "Heywood Auto Locksmith";
export const RESPONSE_TIME = "30 minutes";

export const locations: Location[] = [
  {
    slug: "heywood",
    name: "Heywood",
    county: "Greater Manchester",
    postcode: "OL10",
    phone: PHONE_NUMBER,
    intro:
      "Locked out of your car in Heywood? QuickKey Auto Locksmiths provides fast, professional auto locksmith services across Heywood and the surrounding OL10 area — 24 hours a day, 7 days a week.",
    description: `If you've found yourself locked out of your vehicle on Heywood's Manchester Road, near the Hopwood Hall College campus, or anywhere across the OL10 postcode, you need a trusted local auto locksmith who can reach you fast. QuickKey Auto Locksmiths has been serving drivers across Heywood and Greater Manchester for years, offering expert car lockout assistance, car key replacement, and key programming services.

Heywood is a busy town with many drivers commuting towards the M62 or heading into Rochdale or Bury. A car lockout can strike at the worst possible moment — in a supermarket car park, after a night shift, or on a rural road near Heap Bridge. That's why our response time of under 30 minutes means you won't be stranded for long.

Our fully mobile locksmiths carry the latest diagnostic equipment and key-cutting technology, allowing us to solve even complex modern vehicle lockouts on the spot. Whether you drive a Ford, Vauxhall, BMW, Volkswagen, or any other make, we have the tools and training to help.

We understand the stress of being locked out, which is why we prioritise a calm, professional, and damage-free approach on every job. No broken windows, no damaged door frames — just smart, skilled automotive locksmithing.`,
    landmarks: [
      "Hopwood Hall College",
      "Manchester Road",
      "Heap Bridge",
      "Heywood town centre",
      "Broadfield Park",
    ],
    scenarios: [
      "Locked keys inside your car outside Hopwood Hall College",
      "Lost car keys near the Heywood M62 junction",
      "Broken key in ignition on Manchester Road",
      "Need spare key programmed in Heywood OL10",
    ],
    nearbyAreas: ["Rochdale", "Bury", "Middleton", "Castleton", "Bamford"],
    faqs: [
      {
        question: "How quickly can you reach me in Heywood?",
        answer:
          "Our mobile locksmiths are based locally and aim to reach you anywhere in Heywood within 30 minutes. We cover the full OL10 postcode area including Heap Bridge, Hopwood, and surrounding streets.",
      },
      {
        question: "Can you replace a lost car key in Heywood without the original?",
        answer:
          "Yes. We can cut and program a brand-new car key even if you have no working keys at all. We use advanced key-cutting and ECU programming tools that work with most modern vehicles, including push-start cars with transponder keys.",
      },
      {
        question: "Are you available at night in Heywood?",
        answer:
          "Absolutely. We operate 24 hours a day, 7 days a week — including weekends and bank holidays. Whether it's 2am on a Sunday or Christmas Day, you can call us and we'll be there.",
      },
      {
        question: "Will you damage my car getting it open?",
        answer:
          "Never. We only use non-destructive entry techniques. Our locksmiths are trained to open vehicles without any damage to the paintwork, door seals, or lock mechanisms. Your car will be in exactly the same condition as when we arrived.",
      },
      {
        question: "Do you cover areas near Heywood like Rochdale and Middleton?",
        answer:
          "Yes. We cover all surrounding areas including Rochdale, Bury, Middleton, Castleton, and Bamford. If you're not sure whether we cover your location, just give us a call.",
      },
    ],
    metaTitle: "Auto Locksmith Heywood | 24/7 Car Lockout & Key Replacement | OL10",
    metaDescription:
      "Locked out in Heywood? QuickKey Auto Locksmiths reaches you in 30 minutes. Car lockouts, key replacement & programming across OL10. Call now — available 24/7.",
    h1: "Auto Locksmith Heywood — 24/7 Emergency Car Lockout Service",
    keywords: [
      "auto locksmith Heywood",
      "car locksmith Heywood",
      "emergency auto locksmith Heywood",
      "car key replacement Heywood",
      "car lockout Heywood OL10",
    ],
  },
  {
    slug: "rochdale",
    name: "Rochdale",
    county: "Greater Manchester",
    postcode: "OL16",
    phone: PHONE_NUMBER,
    intro:
      "Need an auto locksmith in Rochdale? QuickKey Auto Locksmiths offers a rapid-response car lockout and key replacement service across Rochdale and the OL16 postcode — available around the clock.",
    description: `Rochdale is one of Greater Manchester's busiest towns, with thousands of drivers on the road every day. Whether you're parked near Rochdale town centre, locked out near the Trafford Road retail park, or stranded somewhere along the A58, QuickKey Auto Locksmiths is ready to reach you fast.

Our Rochdale auto locksmith service covers every situation — from a straightforward car lockout to a complex key programming job on the latest keyless-entry vehicles. We work with all makes and models including Toyota, Honda, Mercedes, Audi, and more.

Rochdale has a mix of urban roads and quieter suburban streets across areas like Milnrow, Littleborough, and Norden. No matter where you've broken down or lost your keys, our mobile unit can be with you in around 30 minutes.

A lost or locked-in key is one of the most stressful experiences for any driver. Our trained locksmiths bring the right tools and a calm, methodical approach to every job, ensuring you're back on the road with minimal disruption.

We also offer key duplication services for spare keys — a smart investment that prevents costly lockout situations in the future. Call us today for a no-obligation quote on a spare car key for your Rochdale vehicle.`,
    landmarks: [
      "Rochdale town centre",
      "Trafford Road retail park",
      "Rochdale railway station",
      "Broadfield area",
      "Milnrow village",
    ],
    scenarios: [
      "Keys locked in car near Rochdale train station",
      "Lost keys at Rochdale shopping centre",
      "Broken key fob that won't start the car in OL16",
      "Spare key cutting needed in Milnrow",
    ],
    nearbyAreas: ["Heywood", "Oldham", "Bury", "Littleborough", "Milnrow", "Norden"],
    faqs: [
      {
        question: "How fast can you reach Rochdale?",
        answer:
          "We cover Rochdale from local bases and typically arrive within 30 minutes. We serve the full OL16 area including Milnrow, Littleborough, Norden, and Spotland.",
      },
      {
        question: "My key fob has stopped working in Rochdale — can you fix it?",
        answer:
          "Yes. We diagnose and repair or replace faulty key fobs, reprogram replacement fobs, and fix transponder issues. In many cases we can do this roadside without needing to visit a garage.",
      },
      {
        question: "Can you make a car key without the V5 logbook in Rochdale?",
        answer:
          "We do require proof of ownership before cutting or programming keys. A driving licence, insurance documents, or V5C will suffice. We take security seriously and will always verify ownership.",
      },
      {
        question: "Are your Rochdale call-outs available on weekends?",
        answer:
          "Yes, every day including weekends and bank holidays. Our lines are open 24 hours a day, 365 days a year.",
      },
      {
        question: "Do you cover Milnrow and Littleborough as well as central Rochdale?",
        answer:
          "Absolutely. Our Rochdale service covers all suburbs and villages in the OL16 postcode area. Milnrow, Littleborough, Norden, Spotland — we cover them all.",
      },
    ],
    metaTitle: "Auto Locksmith Rochdale | 24/7 Emergency Car Lockout | OL16 Coverage",
    metaDescription:
      "Emergency auto locksmith in Rochdale. 30-minute response for car lockouts, key replacement & programming across OL16. Available 24/7 — call QuickKey now.",
    h1: "Auto Locksmith Rochdale — Fast 24/7 Car Lockout & Key Replacement",
    keywords: [
      "auto locksmith Rochdale",
      "car locksmith Rochdale",
      "emergency car lockout Rochdale",
      "car key replacement Rochdale",
      "locksmith near me Rochdale OL16",
    ],
  },
  {
    slug: "bury",
    name: "Bury",
    county: "Greater Manchester",
    postcode: "BL9",
    phone: PHONE_NUMBER,
    intro:
      "Locked out of your car in Bury? QuickKey Auto Locksmiths provides a 24/7 emergency auto locksmith service across Bury, BL9 and surrounding areas — with a 30-minute average response time.",
    description: `Bury is a thriving Greater Manchester town with a busy town centre, the famous Bury Market, and thousands of daily commuters. If you find yourself locked out of your car near the Rock shopping centre, stranded near Bury Interchange, or stuck in one of the quieter residential streets off Walmersley Road, our Bury auto locksmiths are never far away.

Our team provides a full range of auto locksmith services in Bury — from emergency car lockouts and spare key cutting to transponder key programming and broken key extraction. We use state-of-the-art equipment that allows us to handle even the most modern vehicles, including push-start keyless cars and those with rolling-code key fobs.

Bury's road network connects to the M60, M66, and A58, making it a hub for commuters across Greater Manchester. A car lockout in Bury can mean you're late for work, stuck after shopping, or stranded late at night. That's why we prioritise speed — getting to you in around 30 minutes — and professionalism in every callout.

We offer transparent pricing with no hidden charges. You'll always know the cost before we start work, and we won't recommend unnecessary services. Our goal is simple: get you back in your car, safely and quickly.`,
    landmarks: [
      "Bury Market",
      "The Rock shopping centre",
      "Bury Interchange",
      "Walmersley Road",
      "Ramsbottom Road",
    ],
    scenarios: [
      "Locked out at Bury Market on a Saturday morning",
      "Lost car keys near The Rock shopping centre",
      "Snapped key in ignition off Walmersley Road",
      "Need key programming for a new Bury car purchase",
    ],
    nearbyAreas: ["Heywood", "Rochdale", "Bolton", "Radcliffe", "Ramsbottom", "Tottington"],
    faqs: [
      {
        question: "Can you help if my key snapped in the lock in Bury?",
        answer:
          "Yes. Broken key extraction is one of our most common callouts. We carefully extract the broken key fragment without damaging the lock cylinder, then cut and program a new key on the spot.",
      },
      {
        question: "How much does an auto locksmith call-out cost in Bury?",
        answer:
          "Our call-out prices are competitive and transparent. We'll give you a fixed price quote before we arrive. Costs vary depending on the vehicle make, model, and service required. Call us now for an instant quote.",
      },
      {
        question: "Do you cover Ramsbottom and Tottington near Bury?",
        answer:
          "Yes. We cover Bury and all nearby villages including Ramsbottom, Tottington, Radcliffe, Whitefield, and Prestwich.",
      },
      {
        question: "Can you programme a new key for my keyless car in Bury?",
        answer:
          "Yes. We programme proximity keys, push-button start fobs, and transponder keys for all modern vehicles. Our diagnostic equipment covers hundreds of vehicle makes and models.",
      },
      {
        question: "What if I've lost all my car keys in Bury — can you still help?",
        answer:
          "Yes, even with zero working keys. We can access your vehicle and create a completely new key set using EEPROM or OBD programming methods, depending on your vehicle type.",
      },
    ],
    metaTitle: "Auto Locksmith Bury | 24/7 Car Lockout & Key Replacement | BL9",
    metaDescription:
      "Emergency auto locksmith in Bury. Arrive in 30 minutes for car lockouts, key cutting & programming in BL9. No call-out fee quotes — available 24/7. Call now.",
    h1: "Auto Locksmith Bury — 24/7 Emergency Car Lockout Service in BL9",
    keywords: [
      "auto locksmith Bury",
      "car locksmith Bury",
      "emergency auto locksmith Bury",
      "car key replacement Bury BL9",
      "car lockout Bury near me",
    ],
  },
  {
    slug: "oldham",
    name: "Oldham",
    county: "Greater Manchester",
    postcode: "OL1",
    phone: PHONE_NUMBER,
    intro:
      "Need an emergency auto locksmith in Oldham? QuickKey Auto Locksmiths is on call 24/7 to help with car lockouts, lost car keys, and key programming across Oldham and the OL1 area.",
    description: `Oldham is one of Greater Manchester's most densely populated towns, with a large number of vehicles on the road every day. Whether you're locked out near the Spindles Town Square Shopping Centre, stranded on the A62 Manchester Street, or stuck in a residential area like Chadderton or Royton, QuickKey Auto Locksmiths is ready to assist.

Our Oldham auto locksmith team responds quickly to all types of vehicle access emergencies. We handle everything from simple lockouts where keys have been left inside the car, to complex situations involving broken key fobs, lost transponder keys, and immobiliser faults.

Oldham is well-connected via the A627(M) and the Metrolink tram network, but when your car becomes inaccessible, public transport is little consolation. That's why our 30-minute response commitment matters — we know that every minute counts when you're locked out on a cold night or running late for an important appointment.

Our locksmiths are fully insured, DBS-checked, and carry professional identification. We take vehicle security seriously, which is why we always ask for proof of ownership before accessing any vehicle. This protects you and ensures our services are never misused.

We also serve the commercial sector — from fleet vehicles to company cars. If you manage a vehicle fleet in Oldham, we can provide scheduled key replacements and programming services to minimise downtime.`,
    landmarks: [
      "Spindles Town Square",
      "Manchester Street A62",
      "Chadderton",
      "Royton",
      "Oldham Athletic FC",
    ],
    scenarios: [
      "Locked out near Spindles Town Square shopping centre",
      "Lost all car keys in Chadderton",
      "Key fob battery dead and won't start in Royton",
      "Snapped key in car door near Oldham town centre",
    ],
    nearbyAreas: ["Rochdale", "Heywood", "Ashton-under-Lyne", "Saddleworth", "Chadderton", "Royton"],
    faqs: [
      {
        question: "Do you service all areas within Oldham?",
        answer:
          "Yes. We cover the entire OL1 postcode and surrounding areas including Chadderton (OL9), Royton (OL2), Shaw and Crompton (OL2), and Lees (OL4).",
      },
      {
        question: "My car's immobiliser is preventing it from starting in Oldham — can you help?",
        answer:
          "Yes. Immobiliser faults are often caused by a faulty or lost transponder key. We can diagnose the issue, reprogram or replace the key, and get your immobiliser communicating correctly again.",
      },
      {
        question: "How do I know your Oldham locksmith is trustworthy?",
        answer:
          "All our locksmiths are DBS-checked, fully insured, and carry professional photo ID. We always verify vehicle ownership before carrying out any work. We're proud of our reputation across Greater Manchester.",
      },
      {
        question: "Can you replace a BMW or Mercedes key in Oldham?",
        answer:
          "Yes. We have specialist equipment for premium European and luxury vehicle brands including BMW, Mercedes-Benz, Audi, and Porsche. These keys require advanced programming that we carry out on-site.",
      },
      {
        question: "Is there parking nearby if I need your Oldham service?",
        answer:
          "We come to you — wherever your vehicle is located. There's no need to travel to us. Just call and tell us your location and we'll dispatch a mobile locksmith straight away.",
      },
    ],
    metaTitle: "Auto Locksmith Oldham | 24/7 Emergency Car Lockout | OL1 Area",
    metaDescription:
      "24/7 auto locksmith in Oldham. 30-minute response for car lockouts, lost key replacement & key programming across OL1. Trusted, insured — call QuickKey now.",
    h1: "Auto Locksmith Oldham — Emergency 24/7 Car Lockout & Key Replacement",
    keywords: [
      "auto locksmith Oldham",
      "car locksmith Oldham",
      "emergency auto locksmith Oldham",
      "car key replacement Oldham OL1",
      "locksmith near me Oldham",
    ],
  },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}

export function getAllLocationSlugs(): string[] {
  return locations.map((l) => l.slug);
}
