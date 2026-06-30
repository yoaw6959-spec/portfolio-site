import { staticAsset } from "@/lib/paths";

// ─── Types ───────────────────────────────────────────────────────────────

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
  type?: "image" | "video";
}

export interface ProjectProcessStep {
  title: string;
  content: string;
  images?: ProjectImage[];
}

export interface ProjectTeam {
  members: string[];
  instructor?: string;
  advisor?: string;
  course?: string;
}

export interface Project {
  slug: string;
  title: string;
  titleCn: string;
  subtitle: string;
  subtitleCn: string;
  category: string;
  duration: string;
  role: string[];
  tools: string[];
  team?: ProjectTeam;

  overview: string;
  problem: string;
  research: string;
  insights: string;
  concept: string;

  process: ProjectProcessStep[];
  prototype: ProjectProcessStep[];
  engineering: string;
  finalDesign: string;
  reflection: string;

  images: {
    cover: ProjectImage;
    hero: ProjectImage;
    overview?: ProjectImage[];
    problem?: ProjectImage[];
    research?: ProjectImage[];
    concept?: ProjectImage[];
    process?: ProjectImage[];
    prototype?: ProjectImage[];
    finalDesign?: ProjectImage[];
    detail?: ProjectImage[];
    [key: string]: ProjectImage[] | ProjectImage | undefined;
  };
}

// ─── Image path helper ───────────────────────────────────────────────────

const img = (project: string, name: string) => staticAsset(`/images/${project}/clean/${name}`);

// ─── Projects ────────────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    slug: "peak-rescue",
    title: "Peak Rescue",
    titleCn: "峰境救援",
    subtitle: "Integrated Oxygen Supply Rescue Vest for High-Altitude Rescue",
    subtitleCn: "为高原救援人群的一体化供氧救援保障马甲",
    category: "Health Product Design",
    duration: "2025 Fall",
    role: ["Product Design","Interaction Design","Hardware Integration"],
    tools: ["Rhino 7","Blender","Keyshot","Figma","Midjourney"],
    team: {"members":["YAO WEI"],"course":"健康产品设计"},
    overview: "Peak Rescue is an integrated oxygen supply rescue vest designed for high-altitude rescue personnel. It addresses the critical need for lightweight, portable oxygen supply that supports extended missions in extreme environments. The vest integrates oxygen generation, vital sign monitoring, and thermal management into a single wearable system.",
    problem: "High-altitude rescue operations demand immense physical exertion from personnel. Existing oxygen solutions are fragmented: portable oxygen bottles have limited endurance, portable oxygen concentrators lack integrated military vest mounting, and military vests offer no embedded oxygen modules. Rescue workers need a lightweight, all-in-one system that provides continuous oxygen, is easy to use in emergencies, and operates reliably in sub-zero temperatures.",
    research: "Research identified 8 key use-flow steps for high-altitude rescue: connecting nasal tubes, powering on, adjusting oxygen concentration, wearing the mask, monitoring oxygen levels via display, operating the IR detector, swapping battery packs, and accessing rescue equipment from the backpack. Competitor analysis covered three categories: portable oxygen bottles (intermittent supply, need refills, exposed tubing hinders movement), portable oxygen concentrators (poor adaptability, no embedded layout, complex emergency oxygen interface), and military vests (no heating in low-temp environments, weak environmental/tactical adaptability).",
    insights: "Three core insights emerged: (1) Rescue workers need hands-free oxygen delivery that doesn't impede tactical movements — nasal tube routing and fixation are critical, with shoulder strap clips preventing snagging during motion. (2) The neck area is optimal for monitoring interfaces following the near-neck principle — a glance-down UI lets wearers monitor oxygen levels, heart rate, and blood oxygen without stopping. (3) Modular magnetic battery design is essential for extended missions — hot-swappable battery packs ensure continuous operation in field conditions.",
    concept: "The concept combines a lightweight tactical vest with an integrated nano-molecular-sieve oxygen concentrator, hot-swappable magnetic battery packs, a Bluetooth-connected neck UI display, and an infrared detector for search-and-rescue. The design follows a minimal footprint philosophy — every component integrates flush with the vest surface to avoid snagging during tactical maneuvers. Key subsystems: battery pack (magnetic quick-release), oxygen concentrator (nano molecular sieve + side-hidden micro-pore outlet), neck UI (Bluetooth-connected, real-time biometric monitoring), IR detector (shoulder-mounted wide-area scan), and waist adjustment system.",
    process: [{"title":"Competitive Analysis","content":"Analyzed existing oxygen delivery products across three tiers: portable bottles (heavy, finite endurance, exposed tube hazards), portable concentrators (no integrated mounting, poor interface design for emergency use), and military vests (no oxygen module, condensation freezing in cold environments, no heating function)."},{"title":"Use Flow Mapping","content":"Mapped an 8-step use flow from equipment preparation through rescue completion. Steps: (1) Connect nasal tube to O2 concentrator, (2) Press power button, (3) Rotate knob to adjust oxygen concentration, (4) Wear nasal mask, (5) Monitor screen for real-time O2 levels, (6) IR detector operation, (7) Swap battery pack when needed, (8) Access rescue equipment from backpack. Identified critical friction points in steps 1, 3, and 7."},{"title":"Sketching & AIGC Exploration","content":"Explored form factors through hand sketches and AI-generated concept renders. Iterated on vest silhouette, component placement (battery central abdomen, O2 side-mounted, neck UI at collar), backpack integration, and nasal tube routing path."},{"title":"CAD & Engineering Detailing","content":"Developed full 3D CAD in Rhino with detailed component modeling: oxygen concentrator core, nano molecular sieve housing, magnetic battery dock with strong neodymium magnets, IR detector mount, nasal tube routing channels with shoulder fixation clips, and waist-mounted adjustment pack."}],
    prototype: [{"title":"Form & Fit Mockup","content":"Foam and fabric mockup to validate vest fit across different body types, weight distribution on shoulders, and optimal component placement. Refined battery position from side to central abdomen for balanced center of gravity."},{"title":"Interaction UI Prototype","content":"Bluetooth-connected neck UI simulated on a small OLED display. Tested glanceability from downward gaze angle, menu hierarchy simplicity, and screen readability under direct sunlight. Refined to two-level menu: oxygen status + biometrics."}],
    engineering: "The integrated oxygen vest weighs under 2.2kg. The oxygen concentrator uses a nano molecular sieve for medical-grade O2 separation from ambient air. Battery packs are held by strong neodymium magnets for quick swap without breaking seal, located at the central abdomen for optimal weight balance. The neck UI connects via Bluetooth for real-time monitoring of oxygen levels, heart rate, and blood oxygen saturation — designed following the near-neck principle for minimal head movement. An infrared detector mounted on the dominant shoulder provides wide-area search capability. The side-mounted oxygen outlet uses micro-pore diffusion for quiet, laminar airflow with high molecular sieve selectivity. All external connectors (battery dock, tube ports) are recessed and protected. The vest includes an air compressor, air purifier, and pressure regulator behind the abdomen panel.",
    finalDesign: "The final design is a slim-profile tactical vest with centralized abdominal battery placement for balanced load distribution. Key visible features: the nasal tube follows the shoulder strap with secure routing clips preventing snagging, the neck UI sits at collar height for heads-up glance monitoring, the IR detector is mounted on the dominant shoulder, and the oxygen outlet is side-hidden with micro-pore diffusion. The backpack module integrates seamlessly on the back panel. Color palette: tactical dark gray with orange safety accent components. Design language: lightweight, outdoor-operational, easily accessible O2 intake.",
    reflection: "This project reinforced that designing for extreme environments requires deep empathy with end users' physical and cognitive load. Every gram added had to justify its operational value. The central tension was between device functionality integration and weight reduction — finding the signal-to-noise ratio for rescue personnel under duress. Future iterations could explore graphene-based heating elements for the cold-weather vest lining.",
    images: {"cover":{"src":"/images/peak-rescue/clean/cover.jpg","alt":"Peak Rescue vest"},"hero":{"src":"/images/peak-rescue/clean/hero.jpg","alt":"Peak Rescue hero"}},
  },
  {
    slug: "herb-tech-cup",
    title: "HerbTech Cup",
    titleCn: "智能中药煎煮杯",
    subtitle: "Smart Portable Chinese Medicine Brewing Cup",
    subtitleCn: "更适合现代年轻人的便携智能中药煎煮设备",
    category: "Product Design",
    duration: "2025 Spring",
    role: ["Product Design","User Research","Prototyping"],
    tools: ["Rhino 7","Keyshot","Figma","Arduino"],
    team: {"members":["张亚琪","YAO WEI"],"instructor":"陶垠颖","course":"专题设计1"},
    overview: "HerbTech Cup is a smart portable Chinese medicine brewing device designed for young urban professionals. It automates the traditional multi-step decoction process — soaking, boiling, odor control, timed brewing, and self-cleaning — into a single portable, app-connected cup, making traditional medicine preparation as simple as pressing a button.",
    problem: "Young Chinese professionals who rely on traditional medicine face a fundamental tension: traditional decoction requires 30-60 minutes of active attention, precise temperature control (wen-huo vs wu-huo fire), and dedicated kitchen space — simultaneously incompatible with modern lifestyles and technically demanding. Existing portable brewers are either too small to brew properly, lack intelligent temperature control, or fail to address the strong medicinal odors that make office use impractical. Users need a solution that delivers authentic decoction quality in a portable, discreet, and convenient form.",
    research: "Market sizing revealed 42 million Chinese white-collar workers who regularly consume traditional medicine. Current portable brewing penetration is under 2%; projected 10% penetration would yield 4.2M users and an 11.76 billion RMB market. The market is fragmented with no dominant brand in the portable segment. Five pain points: complex preparation (herb pre-soaking, water measurement), skill-dependent technique (火候 mastery, timing), strong odor and environmental impact (fills kitchen, impossible in office), difficult cleaning (herb residue stains), and incompatibility with fast-paced lifestyles.",
    insights: "Five system insights: (1) Soaking must be automated — users don't want to pre-soak herbs for 20-30 minutes manually. (2) Precise temperature ramping between wen-huo (~95°C) and wu-huo (~100°C) is critical to authentic decoction and requires PID control. (3) Odor containment is the No.1 barrier to office use — active carbon filtration and sealed brewing chamber are essential. (4) Self-cleaning must be automated — herb residue adhesion and staining are the top post-brew pain points. (5) Timed brewing with delayed-start lets users prep at night and wake to ready medicine.",
    concept: "The cup integrates five systems: automated soaking system, PID-controlled brewing system (wen-huo/wu-huo ramping), noise/odor reduction system (carbon filter + sealed chamber), self-cleaning system (turbulence rinse cycle), and smart timer (delay-start + completion alert + auto heat-preservation). The form follows a clean, minimalist language — high-borosilicate glass inner chamber, matte soft-touch exterior, single touch-slider for保温 adjustment, and a rotating detachable handle for compact storage.",
    process: [{"title":"User Research & Journey Mapping","content":"Conducted user journey mapping for young white-collar TCM users. Mapped full decoction process from herb preparation through cleaning. Key pain points: measuring precise water volume, managing fire intensity transition, containing odor in shared spaces, scrubbing herb residue off inner walls, and finding 30-60 minutes of continuous attention."},{"title":"Competitive Analysis","content":"Evaluated 5 product categories: stainless steel pots (fast heating but chemical reactivity, burns easily), clay pots (stable but fragile, porous surface difficult to clean), ceramic pots (stable but heavy), glass health pots (see-through but poor insulation), and electric decoction pots (convenient but not portable, fixed power)."},{"title":"System Architecture & Sensor Spec","content":"Defined 5-system architecture. Specified sensors: water level sensor (anti-dry boil), temperature sensor (PID control), lid detection sensor (safety), filter installation sensor (prevent漏渣), touch sensor (haptic feedback), battery sensor (remaining cycles estimation), and vibration motor (notifications)."},{"title":"Mood Board & Aesthetic Direction","content":"Explored three aesthetic principles: clean lines with no redundant decoration, modular separability with precision alignment, and局部 metallic inlay for premium detailing. Key colorways: Phantom Gray, Traffic White, Diamond Ice Blue, Deep Blue, and Rapeseed Yellow."},{"title":"Sketching & AIGC Exploration","content":"Iterated form designs through hand sketches and AI-generated concept images. Explored variations in cup proportions, handle integration (rotating detachable), lid detailing, and the central touch-slider control interface placement."}],
    prototype: [{"title":"Technical Breadboard","content":"Built sensor and circuit breadboard to verify water level monitoring, PID temperature control loop (±1°C), and lid detection safety interlock. Calibrated PID controller for wen-huo and wu-huo transitions."},{"title":"Form Prototype (Paper)","content":"Constructed low-cost form prototype using A4 paper to simulate cup外形 with assembled electronics (sensors, circuit board). Validated form factor, ergonomics, and UI screen placement on the lower body."},{"title":"UI Flow Prototype","content":"Created screen mockups for: idle/standby, automated soaking (countdown), brewing phase indicator (wen/wu-huo animation), completion alert, heat-preservation status (30-120min via slider), self-cleaning cycle, and error/alarm states."}],
    engineering: "Inner chamber: high-borosilicate glass for thermal shock resistance and chemical stability. Heating system: built-in thermostat with PID control maintaining ±1°C accuracy, enabling authentic wen-huo/wu-huo temperature transition. Multi-stage filtration: removable stainless steel mesh filters with progressive pore sizes preventing herb渣滓 leakage into medicine liquid. Type-C PD input supports both desk use and portable power bank operation. Active carbon exhaust filter reduces medicinal odor by ~90%. Self-cleaning cycle uses high-frequency turbulence rinsing. Safety system: water-level sensor (low water auto-shutoff), lid-detection sensor (open lid pause), dry-boil alarm. Haptic vibration motor for completion and error alerts.",
    finalDesign: "The final cup features a double-walled high-borosilicate glass inner chamber with a ceramic-coated exterior. The body is available in four color variants: Phantom Gray (N385-4), Traffic White (RAL9016), Diamond Ice Blue (BN0011-4), and Deep Blue (RAL5023). The detachable handle rotates 90° for compact packing. The touch-slider on the body adjusts heat-preservation duration from 30-120 minutes. A circular LED ring around the base indicates brewing status. The lid incorporates the carbon filter and the rotating提绳 connection for carrying. Brand line: 'Portable + Timed, Health Planning Never Misses a Beat.'",
    reflection: "This project taught me the importance of translating traditional knowledge (TCM decoction principles) into precise engineering requirements. The biggest challenge was balancing authentic wen-huo/wu-huo decoction quality with the convenience expectations of modern users — every simplification risked compromising medicinal efficacy. Collaborating with a partner (张亚琪) on system architecture and form exploration was valuable practice in design communication and role division.",
    images: {"cover":{"src":"/images/herb-tech-cup/clean/cover.jpg","alt":"HerbTech Cup"},"hero":{"src":"/images/herb-tech-cup/clean/hero.jpg","alt":"HerbTech Cup hero"}},
  },
  {
    slug: "baby-chair",
    title: "Dingo Baby Seat",
    titleCn: "模块化智能婴幼儿多功能餐车床",
    subtitle: "Modular Smart Multi-functional Baby Seat for Ages 0-3",
    subtitleCn: "基于0-3岁育儿场景的多场景适配可拆卸产品创新设计",
    category: "Smart Home Product Design",
    duration: "2025 Fall",
    role: ["Product Design","User Research","Mechanical Design"],
    tools: ["Rhino 7","Keyshot","Figma"],
    team: {"members":["YAO WEI"],"instructor":"魏杭帅","course":"智能家居项目设计"},
    overview: "Dingo Baby Seat is a modular smart infant product that transforms between three core modes — high chair, stroller, and cradle bed — serving children from birth to age 3. Designed for urban families with limited space, it eliminates buying 3-4 separate products by consolidating them into one intelligent, tool-free transformable system with IoT-powered safety monitoring.",
    problem: "Urban Chinese parenting faces critical pain points: (1) Single-function products (high chair for eating, stroller for going out, crib for sleeping) each occupy precious apartment space with short use cycles (12-18 months each). (2) Existing multi-functional products offer superficial feature stacking without genuine modular design — deformation requires tools, multiple steps, loses parts, and older caregivers find them impossible to use. (3) No product offers comprehensive smart safety features alongside multi-mode transformation — parents want tilt alerts, bed-leave reminders, wetness/temperature monitoring, and remote IoT supervision.",
    research: "Market analysis shows the smart baby food sector projected to grow from 98.3B to 180B RMB (2025-2030, CAGR 28.5%+). 72% of Chinese families choose to travel with infants. Multi-functional/reusable baby products show 45%+ compound growth rate. User segments include: 25-35 year old urban middle-class parents (dual-income, science-oriented, space-conscious), grandparents (need simple one-hand operation), and families with multiple children (cost-efficiency priority). 4120万 new births annually in target demographic.",
    insights: "Five core insights: (1) Single-function products waste both money and space — each used only 12-18 months then stored. (2) Mode-switching must be under 30 seconds and completely tool-free, usable by grandparents with one hand holding a baby. (3) Foldability for car trunks is non-negotiable for the 72% of families who travel with infants. (4) Smart safety features (tilt alert, bed-leave detection, wetness/temperature monitoring via IoT) are the key differentiator from traditional products. (5) Growth adaptability (height, recline, leg rest adjustments) extends lifespan from 0-3 years, justifying the premium price point.",
    concept: "The concept is a three-in-one convertible system with a lightweight aluminum core frame and three modular attachments: high chair mode (5-point harness, adjustable tray, ergonomic seat for 6-36 months), stroller mode (lockable swivel wheels, ergonomic push handle, UPF 50+ canopy with peek-a-boo window), and cradle bed mode (reclined full-flat position for 0-6 months, gentle rocking mechanism). A smart IoT module monitors temperature, humidity, tilt angle, and bed-leave status, sending real-time alerts to parents' phones.",
    process: [{"title":"Market & User Research","content":"Analyzed smart baby product market: 98.3B→180B RMB projection. Surveyed 25-35 year old urban parents on their top frustrations: complex multi-product assembly, stability concerns, lack of space for dedicated baby gear, and absence of real-time safety monitoring."},{"title":"Pain Point Synthesis","content":"Distilled 5 core pain points: single-function (only one use, short lifecycle), complex mode-switching (multiple steps, tools required, parts storage), poor portability (heavy, can't fold for car trunk), insufficient safety monitoring (no digital alerts, constant adult supervision needed), and poor growth adaptation (non-adjustable, obsolete within 6-12 months)."},{"title":"Persona & Scenario Storyboarding","content":"Created detailed persona: Luna (34, new media operator, Hangzhou) — dual-income mom with grandmother caregiver. Storyboarded full-day scenarios: morning feeding struggle (grandma nearly drops baby), afternoon park outing (wheels on grass), evening soothing to sleep (switching to cradle mode)."},{"title":"Modular Architecture & Mechanical Design","content":"Designed universal frame with standardized quick-lock attachment points. Each mode module clicks into frame without tools — mechanism inspired by camera lens mounts. Locking mechanism engineered for one-hand operation with audible lock confirmation."}],
    prototype: [{"title":"Structural Frame Prototype","content":"Built frame prototype to test quick-lock mechanism reliability across 100+ cycles. Validated load-bearing distribution in all three modes. Mode switch time confirmed under 30 seconds without tools."},{"title":"Safety & Stability Testing","content":"Tested 5-point harness ergonomics, tilt stability on uneven surfaces (grass, gravel, tile), dynamic load simulation for toddler movement, and static load for sleep mode."}],
    engineering: "Core frame: lightweight aluminum alloy with tool-free quick-lock mechanical connectors (standardized interface across all three modules). Each mode module uses the same frame attachment points — tool-free, one-hand operable, with audible lock feedback. Smart IoT module: temperature/humidity sensor, 6-axis MEMS tilt/acceleration sensor, capacitive wetness sensor, Bluetooth LE 5.0 for phone alerts (tilt alert, bed-leave notification, wetness alarm). 5-point safety harness with one-click release mechanism. Lockable swivel front wheels with suspension for outdoor terrain. Folded dimensions: fits standard sedan trunk. Weight: under 8kg in stroller config. Canopy with UPF 50+ fabric and transparent peek-a-boo window.",
    finalDesign: "Clean modern silhouette in warm gray base with soft beige fabric. Exposed aluminum frame with fully rounded edges. Smart module subtly integrated into frame crossbar — single LED indicator shows connection/alert status. Dining tray is dishwasher-safe, adjusts to three positions. Stroller canopy features transparent peek-a-boo window. Cradle base has gentle rocking mechanism activated by single button with automatic timer (15 min recommended sleep cycle). All fabrics are removable and machine-washable.",
    reflection: "Designing for infants required thinking at the intersection of safety (national/ international婴幼儿 product standards), usability by diverse caregivers (parents, grandparents, nannies with varying technical comfort), and genuine modularity where each configuration feels purpose-built. The hardest challenge was achieving structural rigidity in all three modes without making the quick-lock mechanism bulky or complex. I learned that true modular design is subtractive — removing the sense of compromise from each configuration.",
    images: {"cover":{"src":"/images/baby-chair/clean/cover.jpg","alt":"Dingo Baby Seat"},"hero":{"src":"/images/baby-chair/clean/hero.jpg","alt":"Dingo three modes"}},
  },
  {
    slug: "photographer-exoskeleton",
    title: "HoldLine",
    titleCn: "摄影师外骨骼",
    subtitle: "Photographer Knee Exoskeleton for Outdoor Professionals",
    subtitleCn: "摄影师膝关节外骨骼设备",
    category: "Wearable Product Design",
    duration: "2026 Spring",
    role: ["Product Design","User Research","Mechanism Design"],
    tools: ["Rhino 7","Keyshot","Figma","Arduino"],
    team: {"members":["潘佳玫","翟晨威","YAO WEI"],"instructor":"潘小栋","course":"专题设计2"},
    overview: "HoldLine is a lightweight knee exoskeleton designed for photographers and outdoor professionals who carry heavy equipment (10-25kg) over long distances and maintain prolonged crouching/squatting positions. It provides intelligent AI-powered torque assistance, reducing knee joint load by up to 40% while weighing only 0.7kg per leg.",
    problem: "Professional photographers face a specific occupational health crisis: they carry 10-25kg of equipment (camera bodies, multiple lenses, tripods, drones, gimbals) and frequently adopt low postures (crouching, kneeling, squatting) for extended periods during shoots. Existing solutions are inadequate: passive knee braces offer no active assistance and cause overheating; medical exoskeletons are too heavy (2-4kg) and limited to indoor rehab; simple hiking poles restrict hand movement needed for shooting; physical therapy offers no immediate relief. No consumer-grade product addresses the intersection of lightweight (<1kg), intelligent (AI intent prediction), and outdoor-rugged (IP54, -20°C).",
    research: "Extensive competitive analysis of crowdfunding landscape: Ascentiz ($2.61M raised, modular hip/knee, 40% knee relief, 1.2kg knee module, IP53), Hypershell ($1.22M, full leg, 30kg offset, 2.0kg, 20s wear), and Dnsys Z1 ($2.63M, knee-only dual joint, 0.7kg per leg, 50ms response, IP54, -20°C, 900W peak, 20kg lift). Domestic competitors: 迈宝智能XTAND (2.2kg, 4h, 15kg assist, military/police), 大艾机器人神行I号 (2.9kg, 2h, carbon fiber, AI gait recognition), 远也PowrKnee (3.5kg, 5-10h, AI intent prediction). Market matrix mapping shows clear white space for affordable consumer wearable with medical-grade sensing. Personal experience testing with competitor products documented the full wear cycle.",
    insights: "Four insights: (1) Photographers need 15-25kg load-bearing for equipment — significantly more than recreational hikers (5-10kg). (2) Knee-only design is optimal — hip and ankle modules add weight without proportional benefit for photojournalists' movement patterns. (3) Sub-50ms response time is critical — photographers transition between standing, crouching, and kneeling instantly to capture decisive moments. (4) IP54 + -20°C = non-negotiable for outdoor shooting in adverse conditions (rain, snow, salt spray, desert sand).",
    concept: "HoldLine is a dual-joint (left/right independent) knee exoskeleton with AI-powered motion intent prediction. Each 0.7kg module includes: carbon fiber frame, brushless DC motor, 6-axis IMU, force sensor, and field-swappable battery. It attaches via quick-release breathable neoprene straps over existing clothing. The algorithm provides ascent support (active torque) and descent smart-braking (regenerative resistance), adapting to individual gait after 5-minute calibration walk.",
    process: [{"title":"Macro & Industry Background","content":"Analyzed explosive growth of outdoor tourism, short-video content creation, and professional photography equipment market. Photographers' knee strain is becoming epidemic as equipment weight increases (full-frame + 70-200 f2.8 + gimbal = 5-8kg baseline before tripod, drone, accessories)."},{"title":"Competitive Matrix Analysis","content":"Built 2×2 matrix: medical→consumer vs high-price→affordable. Identified white space for affordable consumer knee exoskeleton with medical-grade intent prediction. Dnsys Z1 ($2.63M, 2198 backers) confirmed market validation for consumer knee exoskeleton at $1K+ price point."},{"title":"User Journey & Pain Point Mapping","content":"Mapped photographer's full work journey: loadout→hike→scouting→low-angle shoot→reposition→repeat. Five pain points: 负重长途跋涉 (long-distance with load), 长时间低姿拍摄 (prolonged low posture), 频繁起蹲转换 (frequent stand-squat transitions), 不稳定地形作业 (uneven terrain, reefs/wetlands/snow/mountains), 延时固定 (long-exposure fixed waiting)."},{"title":"Personal Experience Testing","content":"Team members wore competitor products (Dnsys Z1 style) and documented: (1) release straps, (2) wear device, (3) secure fastenings, (4) adjust fit. Target: under 15 seconds wearing time. Evaluated comfort across different pant types and movement ranges."},{"title":"Form & Mechanism Iteration","content":"Iterated dual-joint mechanism with carbon fiber vs aluminum alloy construction. Optimized strap routing for compatibility: tight jeans, loose cargo pants, waterproof shells. Refined motor housing ergonomics for inner-thigh clearance during walking."}],
    prototype: [{"title":"Mechanism & Control Prototype","content":"Arduino-controlled motor prototype to validate torque delivery profiles at different cadences. Tested response latency: slow walk, brisk walk, staircase, stand-to-crouch transitions. Achieved <50ms intent detection with 6-axis IMU + force sensor fusion."},{"title":"Wearable Fit Prototype","content":"3D-printed shell with adjustable strap system for fit testing across 5 participants (different heights, muscle mass, preferred clothing). Refined strap positions, tension distribution points, and center-of-mass placement."}],
    engineering: "0.7kg per module (motor + carbon fiber frame + battery + sensors). Peak power output: 900W. Lift assistance: up to 20kg. AI intent prediction: 6-axis IMU (accelerometer + gyroscope) + force-sensitive resistor array, 50ms closed-loop response. Battery: 2 hours continuous use per charge, field-swappable without tool. Water/dust resistance: IP54. Operating temperature: -20°C to +45°C. Frame: carbon fiber reinforced polymer with aviation-grade 7075 aluminum alloy joint. Wearing time: under 15 seconds with magnetic quick-release buckles. Algorithm: adaptive gait calibration in 5-minute walk session, personalized torque profile stored in onboard memory.",
    finalDesign: "Sleek technical aesthetic with exposed carbon fiber weave and matte black 7075 aluminum joints. The control module sits at outer thigh with single status LED ring (blue=active, green=charging, red=low battery). Straps are breathable 4mm neoprene with silicone anti-slip lining and magnetic quick-release buckles. Motor housing is sculpted to follow leg contour, minimizing bulk under loose pants. Battery pack is integrated into upper strap module — swap by pressing side release without removing the device. Available in two sizes: S/M and L/XL.",
    reflection: "This was the most technically complex project in my portfolio. Building an AI-powered intent-prediction algorithm that works in real-time with 50ms latency pushed our three-person team to deeply understand both mechanical engineering (motor control, gear ratio optimization) and embedded AI (IMU data fusion, gait classification). I learned that consumer wearables demand a fundamentally different approach than medical devices: aesthetics, wearing speed, and real-world comfort are as important as core functionality. Competing with million-dollar crowdfunding products like Dnsys Z1 showed me the gap between academic project and commercial product.",
    images: {"cover":{"src":"/images/photographer-exoskeleton/clean/cover.png","alt":"HoldLine exoskeleton"},"hero":{"src":"/images/photographer-exoskeleton/clean/hero.png","alt":"HoldLine hero"}},
  },
  {
    slug: "other-works",
    title: "Other Works",
    titleCn: "其他作品",
    subtitle: "FPV Drone Crafting & E-Commerce Graphic Design",
    subtitleCn: "无人机组装调试与电商平面设计",
    category: "Cross-disciplinary",
    duration: "2024 — 2025",
    role: ["Drone Assembly & Tuning","Graphic Design"],
    tools: ["Betaflight","BLHeli Suite","Photoshop","Illustrator","CapCut"],
    overview: "A collection of cross-disciplinary projects demonstrating technical breadth beyond traditional product design. Includes custom FPV drone assembly, PID tuning, and aerial cinematography setup, as well as 30+ e-commerce graphic design layouts completed during a summer internship at a smart furniture company.",
    problem: "N/A",
    research: "N/A",
    insights: "N/A",
    concept: "N/A",
    process: [{"title":"FPV Drone Assembly & Tuning","content":"Assembled and configured a custom 5-inch FPV racing drone from individual components: carbon fiber frame, F4 flight controller, 4-in-1 30A BLHeli_S ESCs, 2207 2200KV motors, RunCam Phoenix 2 CMOS camera, TBS Unify Pro 5.8GHz VTX, and TBS Crossfire nano RX. Performed PID tuning in Betaflight with rate profiles for cinematic vs freestyle flying. Calibrated GPS module for return-to-home and position hold. Tuned BLHeli_S ESCs for bidirectional throttle response and smooth mid-throttle linearity. Conducted flight testing with DJI FPV goggles."},{"title":"E-Commerce Graphic Design","content":"Completed a 2-month summer internship (2025.7.1-2025.8.31) at 芯毅智能家具公司 (Core Smart Furniture) as a graphic design intern. Responsible for designing overseas market product detail pages and draft packaging — delivered 30+ complete layouts including product feature pages, sizing guides, lifestyle shots, and A+ content modules. Coordinated with the operations team to iterate designs based on user engagement analytics, improving page conversion through Chinese-optimized visual hierarchy and CTA placement."}],
    prototype: [],
    engineering: "FPV Drone: 5-inch freestyle frame, 4S 1300mAh LiPo, F4 flight controller running Betaflight 4.4, BLHeli_S 30A ESCs, 2207 2200KV motors, RunCam Phoenix 2 (119° FOV), TBS Unify Pro VTX (25-800mW auto), TBS Crossfire diversity RX, GPS+compass module for RTH. AUW ~550g with 4S battery. Achieved 5-minute mixed flight time. Graphic design: 30+ overseas e-commerce detail page layouts for Amazon and eBay, product packaging drafts, A+ content modules in Photoshop and Illustrator. All layouts optimized for cross-cultural visual communication.",
    finalDesign: "N/A",
    reflection: "These projects expanded my technical vocabulary beyond industrial design. Building and tuning a drone gave me hands-on understanding of the relationship between hardware specifications (motor KV, propeller pitch, ESC timing) and real-world flight characteristics. The graphic design internship taught me that layout, typography, and imagery work together in a measurable way — seeing A/B test results from my design iterations gave me a data-driven perspective on visual communication. Both projects reinforced my belief that good designers understand the full making cycle.",
    images: {"cover":{"src":"/images/other-works/clean/cover.jpg","alt":"Other works"},"hero":{"src":"/images/other-works/clean/hero.jpg","alt":"Other works hero"}},
  },
];

