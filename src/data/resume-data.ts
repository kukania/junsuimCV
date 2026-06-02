import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Junsu Im",
  initials: "JI",
  location: "Mountain View, CA, USA",
  locationLink: "https://www.google.com/maps/place/Mountain+View,+CA",
  about: "Software Engineer | Distributed Data and Storage Systems",
  summary:
    "Software Engineer and Storage Systems Ph.D. specializing in high-performance distributed infrastructure, key-value storage engines, and storage architecture. Built production distributed infrastructure at Meta serving billion-scale global QPS, contributing to safe storage migration, API extensions, and cross-region consistency observability. Published systems research in EuroSys, OSDI, and USENIX ATC, including an ATC Best Paper Award, with hands-on expertise in LSM-tree storage engines, transactional key-value systems, SSD/NVMe architecture, storage metadata indexing, and C/C++ performance optimization.",
  avatarUrl: "",
  personalWebsiteUrl: "",
  contact: {
    email: "junsuim93@gmail.com",
    tel: "",
    social: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/junsu-im-10002b13b/",
        icon: "linkedin",
      },
      {
        name: "Google Scholar",
        url: "https://scholar.google.com/citations?user=liyI8F0AAAAJ&hl=en",
        icon: "globe",
      },
    ],
  },
  education: [
    {
      school: "Daegu Gyeongbuk Institute of Science and Technology (DGIST)",
      degree: "Ph.D. in Electrical Engineering and Computer Science",
      start: "Mar. 2018",
      end: "Feb. 2025",
      details: [
        "Advisor: Sungjin Lee",
      ],
    },
    {
      school: "Inha University",
      degree: "B.S. in Computer Science and Engineering",
      start: "Mar. 2012",
      end: "Feb. 2018",
      details: [],
    },
  ],
  work: [
    {
      company: "Meta — Core Data, Facebook Counting Infrastructure",
      link: "https://about.meta.com",
      badges: [],
      title: "Software Engineer",
      location: "Menlo Park, CA, USA",
      start: "Jul. 2025",
      end: "Current",
      description: "",
      highlights: [
        "Developed and shipped 90+ production code changes for distributed stateful infrastructure serving billion-scale global QPS across regions, spanning platform reliability, automation, and API capabilities.",
        "Designed and rolled out data purging mechanisms across multi-tier storage layers.",
        "Built safe storage-tier migration and counter-comparison primitives to preserve data integrity during cross-region infrastructure transitions.",
        "Designed a monitoring framework and core health metrics for cross-region consistency and data freshness, improving observability for globally distributed stateful services.",
        "Extended core APIs to support Redis-compatible operations and broader cache/storage use cases.",
        "Developed an autonomous LLM rollout agent with persistent state, automated recovery, and operator-facing CLI workflows."
      ],
    },
    {
      company: "POSTECH — CAOSLAB",
      link: "https://www.postech.ac.kr",
      badges: [],
      title: "Postdoctoral Researcher",
      location: "Pohang, S. Korea",
      start: "Mar. 2025",
      end: "Jun. 2025",
      description: "",
      highlights: [
        "Conducted research on high-performance LSM-tree-based key-value storage systems for data-intensive workloads, focusing on system-level performance optimization.",
      ],
    },
    {
      company: "Meta — Network Delivery Engineering",
      link: "https://about.meta.com",
      badges: [],
      title: "Software Engineering Intern",
      location: "Menlo Park, CA, USA",
      start: "Jun. 2024",
      end: "Sep. 2024",
      description: "",
      highlights: [
        "Developed Thrift APIs and designed code-generation tooling for production network infrastructure services.",
      ],
    },
    {
      company: "SK hynix — Storage Architecture Team, Memory System Research",
      link: "https://www.skhynix.com",
      badges: [],
      title: "Research Intern",
      location: "Seongnam, S. Korea",
      start: "Oct. 2022",
      end: "Feb. 2023",
      description: "",
      highlights: [
        "Explored the feasibility of improving LSM-tree-based storage organization for data-intensive workloads in modern storage systems.",
      ],
    },
    {
      company: "MIT CSAIL",
      link: "https://www.csail.mit.edu",
      badges: [],
      title: "Research Intern",
      location: "Cambridge, MA, USA",
      start: "Jul. 2019",
      end: "Aug. 2019",
      description: "",
      highlights: [
        "Designed an LSM-tree-based key-value storage engine for key-value SSDs.",
        "Integrated a hardware accelerator into the storage-engine data path to optimize write performance.",
      ],
    },
    {
      company: "DGIST — DataLab",
      link: "https://www.dgist.ac.kr",
      badges: [],
      title: "Ph.D. Researcher, Storage Systems",
      location: "Daegu, S. Korea",
      start: "Feb. 2018",
      end: "Feb. 2025",
      description: "",
      highlights: [
        "Designed and implemented LSM-tree-based key-value storage engines for SSD and network-attached storage environments, targeting high throughput and bounded tail-latency; resulted in publications at USENIX ATC and ACM TOS.",
        "Designed a transaction-enabled key-value SSD architecture for key-value-based file systems, contributing to research published at OSDI.",
        "Developed memory-efficient metadata indexing and LSM-tree-based FTL algorithms for ultra-large-scale SSDs, resulting in a first-author EuroSys publication.",
        "Implemented and evaluated multiple FTL and caching designs for flash SSDs, analyzing latency, memory overhead, and read/write amplification.",
      ],
    },
  ],
  skills: [
    {
      category: "Distributed Systems & Infrastructure",
      items: ["Distributed stateful services", "distributed caching", "storage migration", "consistency and freshness observability"],
    },
    {
      category: "Database & Storage Systems",
      items: ["LSM-tree", "key-value stores", "RocksDB", "transactional storage", "storage metadata indexing", "SSD/NVMe", "flash translation layers"],
    },
    {
      category: "Systems Engineering",
      items: ["C/C++", "Python", "Linux", "multithreaded systems", "performance profiling", "benchmarking", "tail-latency optimization"],
    },
    {
      category: "Research & Evaluation",
      items: ["Storage architecture", "throughput and latency evaluation", "memory-efficiency analysis", "read/write amplification analysis"],
    },
  ],
  publications: [
    {
      title: "Solid State Drive Targeted Memory-Efficient Indexing for Universal I/O Patterns and Fragmentation Degrees",
      authors: "J. Im, J. Kim, S. Oh, J. Koo, J. Park, S. Lee",
      venue: "proceedings of the European Conference on Computer Systems (EuroSys)",
      year: "2025",
      note: "First author",
    },
    {
      title: "Modernizing File System through In-Storage Indexing",
      authors: "J. Koo, J. Im, J. Song, J. Park, E. Lee, Bryan S. Kim, S. Lee",
      venue: "proceedings of the 15th USENIX Symposium on Operating Systems Design and Implementation (OSDI)",
      year: "2021",
    },
    {
      title: "Design of LSM-tree-based Key-value SSDs with Bounded Tails",
      authors: "J. Im, J. Bae, C. Chung, Arvind, and S. Lee",
      venue: "ACM Transactions on Storage, vol. 19, no. 2, pp. 1–27",
      year: "2021",
      note: "First author",
    },
    {
      title: "PinK: High-speed In-storage Key-value Store with Bounded Tails",
      authors: "J. Im, J. Bae, C. Chung, Arvind, and S. Lee",
      venue: "proceedings of the USENIX Annual Technical Conference (ATC)",
      year: "2020",
      note: "First author; Best Paper Award",
    },
    {
      title: "LightStore: Software-defined Network-attached Key-value Drives",
      authors: "C. Chung, J. Koo, J. Im, Arvind, and S. Lee",
      venue: "proceedings of the International Conference on Architectural Support for Programming Languages and Operating Systems (ASPLOS)",
      year: "2019",
    },
  ],
  domesticPublications: [],
  patents: [],
  awards: [
    {
      title: "Best Paper Award",
      organization: "USENIX Annual Technical Conference (ATC)",
      date: "2020",
      location: "U.S.A",
    },
    {
      title: "Ph.D. Scholarship Student",
      organization: "SK hynix",
      date: "2022",
      location: "S. Korea",
    },
  ],
  grants: [],
  projects: [],
} as const;
